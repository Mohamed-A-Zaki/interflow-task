import { openCreateBranchModalAtom } from "@/atoms/open-create-branch-modal-atom";
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
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
