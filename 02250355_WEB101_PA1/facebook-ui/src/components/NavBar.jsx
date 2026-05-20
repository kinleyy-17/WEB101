import { useState } from "react";

export default function NavBar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#242526] shadow-lg h-14 flex items-center justify-between px-4">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-2">
        <span className="text-[#1877F2] text-3xl font-bold select-none">f</span>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search Facebook"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#3a3b3c] text-white text-sm rounded-full pl-9 pr-4 py-2 w-52 outline-none placeholder-gray-400 focus:ring-2 focus:ring-[#1877F2]"
          />
        </div>
      </div>

      {/* Center: Nav Icons */}
      <div className="flex items-center gap-1">
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "📺", label: "Watch" },
          { icon: "🛒", label: "Marketplace" },
          { icon: "👥", label: "Groups" },
          { icon: "🎮", label: "Gaming" },
        ].map(({ icon, label, active }) => (
          <button
            key={label}
            title={label}
            className={`px-6 py-2 rounded-lg text-xl transition-colors ${
              active
                ? "border-b-2 border-[#1877F2] text-[#1877F2]"
                : "text-gray-400 hover:bg-[#3a3b3c]"
            }`}
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Right: Profile & Actions */}
      <div className="flex items-center gap-2">
        <button className="bg-[#3a3b3c] hover:bg-[#4e4f50] text-white rounded-full px-3 py-1.5 text-sm font-semibold flex items-center gap-1">
          <span>⊞</span> Menu
        </button>
        <button className="bg-[#3a3b3c] hover:bg-[#4e4f50] w-10 h-10 rounded-full text-lg flex items-center justify-center">
          💬
        </button>
        <button className="bg-[#3a3b3c] hover:bg-[#4e4f50] w-10 h-10 rounded-full text-lg flex items-center justify-center">
          🔔
        </button>
        <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-sm cursor-pointer">
          K
        </div>
      </div>
    </nav>
  );
}
