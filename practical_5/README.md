# Practical 5: Infinite Scroll with TanStack Query

## What's this about?

For this practical, I added infinite scrolling to our TikTok-style app. Instead of having a "load more" button or page numbers, the feed just keeps loading new videos as you scroll down — exactly how the real TikTok works.

To pull this off, I used **TanStack Query** (which used to be called React Query) on the frontend and switched the backend over to **cursor-based pagination**, which is a much better fit for this kind of endless feed than the usual page/offset approach.

---

## Tech Stack

| Layer     | What I used                         |
|-----------|-------------------------------------|
| Frontend  | Next.js, React, TanStack Query      |
| Backend   | Node.js, Express.js                 |
| Database  | PostgreSQL + Prisma ORM             |
| API Style | RESTful                             |

---

## Files I touched

```
TikTok_Frontend/
├── src/
│   ├── app/
│   │   ├── layout.js                  # Added QueryClientProvider here
│   │   └── providers.jsx              # New file — client-side React Query setup
│   ├── services/
│   │   └── videoService.js            # Updated to send cursor instead of page number
│   ├── hooks/
│   │   └── useIntersectionObserver.js # New hook to detect bottom of page
│   └── components/
│       └── ui/
│           └── VideoFeed.jsx          # Main component — now does infinite scroll

TikTok_Server/
└── src/
    └── controllers/
        └── videoController.js         # Reworked to use cursor-based pagination
```

---

## A bit of background — why cursor-based pagination?

Before jumping into the code, it's worth understanding why I didn't just stick with the normal `page=1`, `page=2` approach.

With **offset-based pagination**, if someone posts a new video while you're scrolling, the whole list shifts and you might see a video twice or miss one entirely. It also gets slower the deeper you go into large datasets.

**Cursor-based pagination** doesn't have those problems. Instead of saying "give me page 3", you say "give me the next 5 videos after this specific video ID". Since you're always working from a fixed point in the list, you get consistent results no matter what's happening with new content being added.

For an infinite scroll feed with potentially thousands of videos, cursor-based is clearly the right call.

| Feature                     | Offset-Based               | Cursor-Based             |
|-----------------------------|----------------------------|--------------------------|
| Parameters                  | `page`, `limit`            | `cursor`, `limit`        |
| Handles new content         | ❌ Can skip or repeat      | ✅ Always consistent     |
| Performance on large data   | ❌ Gets slower             | ✅ Stays fast            |
| Good for infinite scroll?   | ⚠️ Not really             | ✅ Perfect for it        |

---

## What I actually did

### Backend changes

#### Updating `getAllVideos`

The first thing I changed was how `getAllVideos` in `videoController.js` handles requests. It now accepts `cursor` and `limit` instead of `page` and `limit`.

One trick I used here is the **n+1 pattern** — I ask Prisma for one more video than the user actually needs. If I get that extra one back, I know there's another page. I then remove it before sending the response and use the last real video's ID as the `nextCursor`.

```js
const { cursor, limit = 5 } = req.query;
const take = parseInt(limit) + 1; // fetch one extra to check if more exist

const videos = await prisma.video.findMany({
  take,
  ...(cursor && { skip: 1, cursor: { id: parseInt(cursor) } }),
  orderBy: { createdAt: "desc" },
  include: { user: true, likes: true, comments: true },
});

let hasNextPage = false;
let nextCursor = null;

if (videos.length > parseInt(limit)) {
  hasNextPage = true;
  videos.pop(); // remove the extra one
  nextCursor = videos[videos.length - 1].id;
}

res.json({ videos, nextCursor, hasNextPage });
```

#### Updating `getFollowingVideos`

Same idea here — just applied the same cursor-based logic to the following feed. The only extra step is first grabbing the list of user IDs that the logged-in user follows, then filtering videos to only show content from those accounts.

---

### Frontend changes

#### Step 1 — Install TanStack Query

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

#### Step 2 — Wrapping the app with `QueryClientProvider`

React Query needs a `QueryClient` available at the top of the component tree. The catch in Next.js is that `layout.js` is a Server Component (so it can export `metadata`), but `QueryClientProvider` needs to run on the client.

My fix was to create a separate `providers.jsx` file marked with `"use client"` and import it into `layout.js`. That way both concerns are handled cleanly.

```jsx
// providers.jsx
"use client";
const [queryClient] = useState(() => new QueryClient());

return (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
```

I kept `ReactQueryDevtools` in there too — it's really handy for seeing what's cached and what's being fetched while you're building.

#### Step 3 — Updating `videoService.js`

The service functions now accept a `pageParam` argument (which TanStack Query passes in automatically). If a cursor exists, it gets appended to the request URL.

```js
export const fetchVideos = async ({ pageParam = null }) => {
  const params = new URLSearchParams({ limit: "5" });
  if (pageParam) params.append("cursor", pageParam);

  const res = await fetch(`${API_URL}/videos?${params}`);
  return res.json(); // returns { videos, nextCursor, hasNextPage }
};
```

#### Step 4 — Building `useIntersectionObserver.js`

Rather than adding a scroll event listener (which fires constantly and hurts performance), I used the **Intersection Observer API**. It watches a target element and fires a callback only when that element enters or leaves the viewport — much cleaner.

I wrapped it in a custom hook so it's reusable. You pass in a callback, it gives you back a `ref`, and you attach that ref to whatever element you want to watch.

```js
export function useIntersectionObserver(onIntersect, options = {}) {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && onIntersect()),
      options
    );
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect(); // cleanup on unmount
  }, [onIntersect]);

  return targetRef;
}
```

#### Step 5 — Rewriting `VideoFeed.jsx`

This is where everything comes together. I swapped out `useQuery` for `useInfiniteQuery`, which is built for exactly this pattern. It keeps track of all the pages fetched so far, knows when there's more to load, and gives you a `fetchNextPage()` function to call when you need it.

I placed an invisible `<div>` (the "sentinel") at the very bottom of the feed and attached the intersection observer to it. The moment that div scrolls into view, it triggers `fetchNextPage()` automatically.

```jsx
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
  queryKey: ["videos", feedType],
  queryFn: fetchFn,
  getNextPageParam: (lastPage) =>
    lastPage.hasNextPage ? lastPage.nextCursor : undefined,
  initialPageParam: null,
});

// flatten all pages into one list
const videos = data?.pages.flatMap((page) => page.videos) ?? [];

// load more when sentinel comes into view
const sentinelRef = useIntersectionObserver(
  useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])
);

// in the JSX — invisible trigger at the bottom of the feed
<div ref={sentinelRef} />
```

---

## How to run it

### Start the backend
```bash
cd TikTok_Server
npm install
npx prisma generate
npm run dev
```

### Start the frontend
```bash
cd TikTok_Frontend
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) and scroll away.

---

## References

- [TanStack Query Docs](https://tanstack.com/query/latest)
- [useInfiniteQuery Guide](https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries)
- [Intersection Observer API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Prisma Cursor-Based Pagination](https://www.prisma.io/docs/orm/prisma-client/queries/pagination#cursor-based-pagination)
- [Next.js App Router Docs](https://nextjs.org/docs/app)