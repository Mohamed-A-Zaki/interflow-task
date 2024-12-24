import { openCreateBranchModalAtom } from "@/atoms/open-create-branch-modal-atom";
import { useTranslation } from "react-i18next";
import AddBranchForm from "../forms/AddBranchForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function AddBranchModal() {
  const { t } = useTranslation();

  return (
    <Dialog
      open={openCreateBranchModalAtom.useOpened()}
      onOpenChange={openCreateBranchModalAtom.toggle}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">{t("addNewBranch")}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <AddBranchForm />
      </DialogContent>
    </Dialog>
  );
}
