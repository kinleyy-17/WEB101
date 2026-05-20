const contacts = [
  { name: "Sonam Wangchuk", emoji: "🧑", online: true },
  { name: "Karma Dorji", emoji: "👨", online: true },
  { name: "Dechen Lhamo", emoji: "👩", online: false },
  { name: "Tenzin Norbu", emoji: "🧔", online: true },
];

export default function RightSidebar() {
  return (
    <aside className="fixed right-0 top-14 h-[calc(100vh-56px)] w-72 overflow-y-auto py-4 px-4 hidden xl:block">
      <p className="text-gray-400 text-sm font-semibold mb-3">Contacts</p>
      {contacts.map(({ name, emoji, online }) => (
        <button key={name} className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-[#3a3b3c] transition-colors">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-[#4e4f50] flex items-center justify-center text-lg">{emoji}</div>
            {online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#18191a]" />}
          </div>
          <span className="text-white text-sm">{name}</span>
        </button>
      ))}
    </aside>
  );
}