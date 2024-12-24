import { openCreateBranchModalAtom } from "@/atoms/open-create-branch-modal-atom";
import AddBranchForm from "../forms/AddBranchForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function AddBranchModal() {
  return (
    <Dialog
      open={openCreateBranchModalAtom.useOpened()}
      onOpenChange={openCreateBranchModalAtom.toggle}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <AddBranchForm />
      </DialogContent>
    </Dialog>
  );
}
