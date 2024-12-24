import { openEditBranchModalAtom } from "@/atoms/open-edit-branch-modal-atom";
import { useTranslation } from "react-i18next";
import EditBranchForm from "../forms/EditBranchForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function EditBranchModal() {
  const { t } = useTranslation();

  return (
    <Dialog
      open={openEditBranchModalAtom.useOpened()}
      onOpenChange={openEditBranchModalAtom.toggle}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            {t("editBranchData")}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <EditBranchForm />
      </DialogContent>
    </Dialog>
  );
}
