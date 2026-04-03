function Sidebar() {
  const items = ["Kinley Tshering", "Friends", "Groups", "Marketplace"];

  return (
    <aside className="hidden md:block w-1/4 p-4">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;