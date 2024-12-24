import AddBranchModal from "./components/modals/AddBranchModal";
import SidebarSheet from "./components/SidebarSheet";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div dir="rtl">
      <HomePage />

      {/* modals */}
      <AddBranchModal />
      <SidebarSheet />
    </div>
  );
}
