import { useState } from "react";
import StoryBar from "./StoryBar";
import PostCard from "./PostCard";

const initialPosts = [
  {
    id: 1,
    name: "Sonam Wangchuk",
    emoji: "🧑",
    time: "2 hrs",
    content: "Hello from Bhutan 🇧🇹 Beautiful day in Thimphu!",
    image: "🏔️",
    likes: 24,
  },
  {
    id: 2,
    name: "Karma Dorji",
    emoji: "👨",
    time: "5 hrs",
    content: "This UI looks clean! Built with React + Tailwind 🚀",
    likes: 12,
  },
  {
    id: 3,
    name: "Dechen Lhamo",
    emoji: "👩",
    time: "Yesterday",
    content: "Tailwind makes styling so easy ✨ Loving every bit of it.",
    image: "🌸",
    likes: 38,
  },
  {
    id: 4,
    name: "Tenzin Norbu",
    emoji: "🧔",
    time: "2 days",
    content: "Just finished my Web101 assignment 🎉 Deployed to Vercel!",
    likes: 57,
  },
];

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      name: "Kinley Tshering",
      emoji: "👤",
      time: "Just now",
      content: newPost,
      likes: 0,
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <main className="max-w-xl mx-auto pt-20 px-2">
      <StoryBar />

      {/* Create Post */}
      <div className="bg-[#242526] rounded-xl shadow p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            K
          </div>
          <input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePost()}
            placeholder="What's on your mind, Kinley?"
            className="flex-1 bg-[#3a3b3c] hover:bg-[#4e4f50] text-white text-sm rounded-full px-4 py-2.5 outline-none placeholder-gray-400 cursor-pointer focus:ring-2 focus:ring-[#1877F2] transition-colors"
          />
        </div>
        <hr className="border-[#3a3b3c] my-3" />
        <div className="flex justify-around">
          <button className="flex items-center gap-2 text-gray-400 hover:bg-[#3a3b3c] px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            📹 Live video
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:bg-[#3a3b3c] px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            🖼️ Photo/video
          </button>
          <button
            onClick={handlePost}
            className="flex items-center gap-2 text-gray-400 hover:bg-[#3a3b3c] px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            😊 Feeling
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </main>
  );
}
