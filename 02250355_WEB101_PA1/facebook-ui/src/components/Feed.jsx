import StoryBar from "./StoryBar";
import PostCard from "./PostCard";

function Feed() {
  return (
    <main className="flex-1 max-w-2xl mx-auto p-4 space-y-4">
      
      <StoryBar />

      <PostCard name="Sonam" content="Hello from Bhutan 🇧🇹" />
      <PostCard name="Karma" content="This UI looks clean!" />
      <PostCard name="Dechen" content="Tailwind makes styling easy 🚀" />

    </main>
  );
}

export default Feed;