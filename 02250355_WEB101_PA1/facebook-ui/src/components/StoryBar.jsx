function StoryBar() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      
      {[1, 2, 3, 4].map((story) => (
        <div
          key={story}
          className="min-w-[110px] h-[180px] bg-gray-300 rounded-xl flex items-end p-2 text-white font-semibold"
        >
          Story {story}
        </div>
      ))}

    </div>
  );
}

export default StoryBar;