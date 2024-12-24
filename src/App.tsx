import AddBranchModal from "./components/modals/AddBranchModal";
import EditBranchModal from "./components/modals/EditBranchModal";
import SidebarSheet from "./components/SidebarSheet";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div dir="rtl">
      <HomePage />

      {/* modals */}
      <AddBranchModal />
      <EditBranchModal />
      <SidebarSheet />
    </div>
  );
}
