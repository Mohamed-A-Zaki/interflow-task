import { openEditBranchModalAtom } from "@/atoms/open-edit-branch-modal-atom";
import EditBranchForm from "../forms/EditBranchForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function EditBranchModal() {
  return (
    <Dialog
      open={openEditBranchModalAtom.useOpened()}
      onOpenChange={openEditBranchModalAtom.toggle}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">تعديل بيانات الفرع</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <EditBranchForm />
      </DialogContent>
    </Dialog>
  );
}
