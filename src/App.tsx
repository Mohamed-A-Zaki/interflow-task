import AddBranchButton from "./components/AddBranchButton";
import BranchesList from "./components/BranchesList";
import BreadcrumbSection from "./components/BreadcrumbSection";
import AddBranchModal from "./components/modals/AddBranchModal";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div dir="rtl" className="flex">
      <Sidebar />
      <div className="container">
        <Navbar />
        <main>
          <BreadcrumbSection />
          <AddBranchButton />
          <BranchesList />
        </main>
      </div>

      {/* modals */}
      <AddBranchModal />
    </div>
  );
}
