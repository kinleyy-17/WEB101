const contacts = [
  { name: "Sonam Wangchuk", emoji: "🧑", online: true },
  { name: "Karma Dorji", emoji: "👨", online: true },
  { name: "Dechen Lhamo", emoji: "👩", online: false },
  { name: "Tenzin Norbu", emoji: "🧔", online: true },
  { name: "Pema Choden", emoji: "👩‍🦱", online: false },
  { name: "Ugyen Tshering", emoji: "🧑‍💼", online: true },
];

export default function RightSidebar() {
  return (
    <aside className="fixed right-0 top-14 h-[calc(100vh-56px)] w-72 overflow-y-auto py-4 px-4 hidden xl:block">
      {/* Sponsored */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm font-semibold mb-3">Sponsored</p>
        <div className="flex gap-3 cursor-pointer hover:bg-[#3a3b3c] p-2 rounded-lg">
          <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
            🏔️
          </div>
          <div>
            <p className="text-white text-sm font-medium">Visit Bhutan</p>
            <p className="text-gray-400 text-xs">tourism.gov.bt</p>
            <p className="text-gray-400 text-xs mt-1">Discover the last Shangri-La 🇧🇹</p>
          </div>
        </div>
      </div>

      <hr className="border-[#3a3b3c] mb-4" />

      {/* Contacts */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-gray-400 text-sm font-semibold">Contacts</p>
          <div className="flex gap-2 text-gray-400">
            <button className="hover:bg-[#3a3b3c] p-1.5 rounded-full">🔍</button>
            <button className="hover:bg-[#3a3b3c] p-1.5 rounded-full">···</button>
          </div>
        </div>
        {contacts.map(({ name, emoji, online }) => (
          <button
            key={name}
            className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-[#3a3b3c] transition-colors"
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-[#4e4f50] flex items-center justify-center text-lg">
                {emoji}
              </div>
              {online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#18191a]" />
              )}
            </div>
            <span className="text-white text-sm">{name}</span>
          </button>
        ))}
      </div>

      {/* Group Conversations */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-gray-400 text-sm font-semibold">Group conversations</p>
          <button className="text-gray-400 hover:bg-[#3a3b3c] p-1.5 rounded-full">✏️</button>
        </div>
        <button className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-[#3a3b3c] transition-colors">
          <div className="w-9 h-9 rounded-full bg-[#3a3b3c] flex items-center justify-center text-lg">➕</div>
          <span className="text-white text-sm">Create new group</span>
        </button>
      </div>
    </aside>
  );
}
