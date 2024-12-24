import AddBranchModal from "./components/modals/AddBranchModal";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div dir="rtl">
      <HomePage />

      {/* modals */}
      <AddBranchModal />
    </div>
  );
}
