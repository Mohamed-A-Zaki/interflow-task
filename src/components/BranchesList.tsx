import { Infinity } from "lucide-react";
import { FaStore } from "react-icons/fa";
import BranchItem from "./BranchItem";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function BranchesList() {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="flex flex-col items-center justify-between gap-3 bg-[#fcfcfc] p-5 lg:flex-row">
        <div className="flex items-center gap-2">
          <FaStore />
          <span className="font-semibold text-[#666]">الفروع والمستودعات</span>
          <span className="text-sm text-gray-400">(1 من 5)</span>
        </div>
        <div className="flex w-full overflow-hidden rounded-md lg:w-fit">
          <Input
            className="rounded-none rounded-s-md focus-visible:ring-0"
            placeholder="عدد لا محدود"
            readOnly
          />
          <Button className="rounded-none bg-secondary/70 text-primary hover:bg-secondary">
            <Infinity />
          </Button>
        </div>
      </div>

      <div className="p-5">
        {[...new Array(3)].map((_, indx) => {
          return <BranchItem key={indx} />;
        })}
      </div>
    </div>
  );
}
