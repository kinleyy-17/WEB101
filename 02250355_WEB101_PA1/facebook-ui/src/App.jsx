import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Navbar />

      <div className="flex max-w-6xl mx-auto">
        <Sidebar />
        <Feed />
      </div>

    </div>
  );
}

export default App;