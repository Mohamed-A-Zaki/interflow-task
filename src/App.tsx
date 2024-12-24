import { languageAtom } from "./atoms/language-atom";
import AddBranchModal from "./components/modals/AddBranchModal";
import EditBranchModal from "./components/modals/EditBranchModal";
import SidebarSheet from "./components/SidebarSheet";
import HomePage from "./pages/HomePage";

export default function App() {
  const { currentLanguage } = languageAtom.useValue();

  return (
    <div dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      <HomePage />

      {/* modals */}
      <AddBranchModal />
      <EditBranchModal />
      <SidebarSheet />
    </div>
  );
}
