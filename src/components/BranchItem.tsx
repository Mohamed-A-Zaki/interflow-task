import { Branch } from "@/atoms/branches-atom";
import { openEditBranchModalAtom } from "@/atoms/open-edit-branch-modal-atom";
import { selectedBranchIdAtom } from "@/atoms/selected-branch-id-atom";
import { FaStore } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";

export default function BranchItem({ id, country, name }: Branch) {
  const openEditBranchModal = () => {
    /***
     * openEditBranchModal
     */
    openEditBranchModalAtom.open();
    /***
     * selectedBranchId
     */
    selectedBranchIdAtom.change("selectedBranchId", id);
  };

  return (
    <div
      className="mb-5 flex cursor-pointer items-center justify-between border-b pb-5"
      onClick={openEditBranchModal}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span>{name}</span>-<span>{country}</span>
          <Badge
            variant={"outline"}
            className="rounded-full border-secondary text-primary"
          >
            مفتوح
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 text-gray-400">
            <FaStore />
            فرع
          </div>
          -
          <div className="flex items-center gap-1 font-semibold">
            <Checkbox className="rounded-full" />
            <span className="text-primary underline">الافتراضي</span>
          </div>
        </div>
      </div>
      <Switch dir="ltr" className="data-[state=checked]:bg-secondary" />
    </div>
  );
}
