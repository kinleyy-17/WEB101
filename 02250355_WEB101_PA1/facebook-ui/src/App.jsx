import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#18191a] text-white">
      <NavBar />
      <div className="flex">
        <Sidebar />
        {/* Center feed with left/right margin for sidebars */}
        <div className="flex-1 lg:ml-72 xl:mr-72">
          <Feed />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}
