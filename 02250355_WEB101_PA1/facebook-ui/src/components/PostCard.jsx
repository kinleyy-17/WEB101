import { useState } from "react";

export default function PostCard({ name, emoji, time, content, image, likes = 0 }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setComments([...comments, { text: comment, user: "Kinley" }]);
    setComment("");
    setShowComments(true);
  };

  return (
    <div className="bg-[#242526] rounded-xl shadow mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl">
          {emoji}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{time} · 🌐</p>
        </div>
        <button className="ml-auto text-gray-400 hover:text-white text-xl">···</button>
      </div>

      {/* Content */}
      <p className="px-4 pb-3 text-white text-sm leading-relaxed">{content}</p>

      {/* Image */}
      {image && (
        <div className="w-full bg-[#3a3b3c] h-64 flex items-center justify-center text-6xl">
          {image}
        </div>
      )}

      {/* Stats */}
      {(likeCount > 0 || comments.length > 0) && (
        <div className="flex items-center justify-between px-4 py-2 text-gray-400 text-xs">
          {likeCount > 0 && (
            <span>👍 {likeCount}</span>
          )}
          {comments.length > 0 && (
            <button
              onClick={() => setShowComments(!showComments)}
              className="ml-auto hover:underline"
            >
              {comments.length} comment{comments.length > 1 ? "s" : ""}
            </button>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex border-t border-[#3a3b3c] mx-4">
        <button
          onClick={handleLike}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-[#3a3b3c] ${
            liked ? "text-[#1877F2]" : "text-gray-400"
          }`}
        >
          {liked ? "👍" : "👍"} Like
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold text-gray-400 hover:bg-[#3a3b3c] transition-colors"
        >
          💬 Comment
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold text-gray-400 hover:bg-[#3a3b3c] transition-colors">
          ↗️ Share
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 pb-3">
          {comments.map((c, i) => (
            <div key={i} className="flex gap-2 mt-2">
              <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                K
              </div>
              <div className="bg-[#3a3b3c] rounded-2xl px-3 py-1.5">
                <p className="text-white text-xs font-semibold">{c.user}</p>
                <p className="text-white text-sm">{c.text}</p>
              </div>
            </div>
          ))}
          <form onSubmit={handleComment} className="flex gap-2 mt-3 items-center">
            <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              K
            </div>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 bg-[#3a3b3c] text-white text-sm rounded-full px-4 py-2 outline-none placeholder-gray-400 focus:ring-2 focus:ring-[#1877F2]"
            />
          </form>
        </div>
      )}
    </div>
  );
}
