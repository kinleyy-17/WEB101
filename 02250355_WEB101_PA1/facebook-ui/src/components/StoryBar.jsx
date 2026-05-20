const stories = [
  { name: "Kinley", bg: "from-blue-500 to-blue-700", emoji: "👤" },
  { name: "Sonam", bg: "from-pink-500 to-red-500", emoji: "🌸" },
  { name: "Karma", bg: "from-green-500 to-teal-600", emoji: "🏔️" },
  { name: "Dechen", bg: "from-purple-500 to-indigo-600", emoji: "✨" },
  { name: "Tenzin", bg: "from-yellow-400 to-orange-500", emoji: "☀️" },
];

export default function StoryBar() {
  return (
    <div className="flex gap-3 mb-4 overflow-x-auto pb-1">
      {/* Create Story */}
      <div className="flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden bg-[#3a3b3c] cursor-pointer hover:brightness-110 transition relative">
        <div className="h-3/4 bg-[#4e4f50] flex items-center justify-center">
          <span className="text-4xl">🖼️</span>
        </div>
        <div className="h-1/4 flex flex-col items-center justify-center">
          <span className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center text-white text-xl font-bold -mt-5 border-4 border-[#242526]">+</span>
          <span className="text-white text-xs font-semibold mt-1">Create story</span>
        </div>
      </div>

      {/* Stories */}
      {stories.map(({ name, bg, emoji }) => (
        <div
          key={name}
          className={`flex-shrink-0 w-28 h-48 rounded-xl overflow-hidden bg-gradient-to-b ${bg} cursor-pointer hover:brightness-110 transition relative`}
        >
          <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-[#1877F2] bg-gray-700 flex items-center justify-center text-xl">
            {emoji}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60">
            <span className="text-white text-xs font-semibold">{name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
