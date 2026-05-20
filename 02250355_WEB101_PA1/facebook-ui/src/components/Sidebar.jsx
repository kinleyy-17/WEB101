const shortcuts = [
  { name: "Kinley Tshering", emoji: "👤" },
  { name: "CST Bhutan", emoji: "🏫" },
  { name: "Gaming Zone", emoji: "🎮" },
];

const menuItems = [
  { icon: "👤", label: "Kinley Tshering" },
  { icon: "👥", label: "Friends" },
  { icon: "💬", label: "Messenger" },
  { icon: "⌚", label: "Memories" },
  { icon: "🔖", label: "Saved" },
  { icon: "👥", label: "Groups" },
  { icon: "📺", label: "Video" },
  { icon: "🛒", label: "Marketplace" },
  { icon: "📰", label: "Feeds" },
  { icon: "🎉", label: "Events" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 h-[calc(100vh-56px)] w-72 overflow-y-auto py-4 px-2 hidden lg:block">
      {menuItems.map(({ icon, label }) => (
        <button
          key={label}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#3a3b3c] transition-colors text-white text-sm font-medium"
        >
          <span className="w-9 h-9 bg-[#3a3b3c] rounded-full flex items-center justify-center text-lg">
            {icon}
          </span>
          {label}
        </button>
      ))}

      <hr className="border-[#3a3b3c] my-3" />
      <p className="text-gray-400 text-xs font-semibold px-3 mb-2">
        Your shortcuts
      </p>
      {shortcuts.map(({ name, emoji }) => (
        <button
          key={name}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#3a3b3c] transition-colors text-white text-sm"
        >
          <span className="w-9 h-9 bg-[#3a3b3c] rounded-lg flex items-center justify-center text-lg">
            {emoji}
          </span>
          {name}
        </button>
      ))}

      <p className="text-gray-400 text-xs px-3 mt-4">
        Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2025
      </p>
    </aside>
  );
}
