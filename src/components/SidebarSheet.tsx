import { openSidebarSheetAtom } from "@/atoms/open-sidebar-sheet-atom";
import Sidebar from "./Sidebar";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

export default function SidebarSheet() {
  return (
    <Sheet
      open={openSidebarSheetAtom.useOpened()}
      onOpenChange={openSidebarSheetAtom.toggle}
    >
      <SheetContent className="overflow-auto p-0 text-white" dir="rtl">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        {/* Form */}
        <Sidebar className="w-full" />
      </SheetContent>
    </Sheet>
  );
}
