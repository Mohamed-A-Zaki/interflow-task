import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div dir="rtl" className="flex">
      <Sidebar />
      <div className="container">
        <Navbar />
        <main>main content</main>
      </div>
    </div>
  );
}
