function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-blue-600 font-bold text-2xl">facebook</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Facebook"
          className="bg-gray-100 px-4 py-2 rounded-full w-1/3 focus:outline-none"
        />

        {/* Menu */}
        <div className="flex gap-4">
          <button className="hover:bg-gray-100 px-3 py-2 rounded-lg">Home</button>
          <button className="hover:bg-gray-100 px-3 py-2 rounded-lg">Profile</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;