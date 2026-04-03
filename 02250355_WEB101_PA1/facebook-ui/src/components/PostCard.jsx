function PostCard({ name, content }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <h3 className="font-semibold">{name}</h3>
      </div>

      {/* Content */}
      <p className="mb-3">{content}</p>

      {/* Actions */}
      <div className="flex justify-between border-t pt-2 text-gray-600">
        <button className="flex-1 hover:bg-gray-100 py-1 rounded transition">
          Like
        </button>
        <button className="flex-1 hover:bg-gray-100 py-1 rounded transition">
          Comment
        </button>
        <button className="flex-1 hover:bg-gray-100 py-1 rounded transition">
          Share
        </button>
      </div>

    </div>
  );
}

export default PostCard;