import { openSidebarSheetAtom } from "@/atoms/open-sidebar-sheet-atom";
import { CiMenuBurger } from "react-icons/ci";
import { Button } from "./ui/button";

export default function SidebarToggler() {
  const openSidebarSheet = () => {
    openSidebarSheetAtom.open();
  };

  return (
    <Button
      className="xl:hidden"
      variant={"outline"}
      onClick={openSidebarSheet}
    >
      <CiMenuBurger size={25} />
    </Button>
  );
}
