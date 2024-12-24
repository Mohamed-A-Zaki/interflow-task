import { FaStore } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Switch } from "./ui/switch";

export default function BranchItem() {
  return (
    <div className="mb-5 flex items-center justify-between border-b pb-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span>الرئيسي</span>
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
            مستودع
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
