import { openCreateBranchModalAtom } from "@/atoms/open-create-branch-modal-atom";
import { BiPlus } from "react-icons/bi";
import { Button } from "./ui/button";

export default function AddBranchButton() {
  const openCreateBranchModal = () => {
    openCreateBranchModalAtom.open();
  };

  return (
    <Button
      onClick={openCreateBranchModal}
      className="my-5 flex items-center gap-2 rounded-full bg-secondary/70 p-5 text-black transition duration-300 hover:bg-secondary"
    >
      <BiPlus />
      إضافة فرع/ مستودع جديد
    </Button>
  );
}
