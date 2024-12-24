import { Infinity } from "lucide-react";
import { FaStore } from "react-icons/fa";
import BranchItem from "./BranchItem";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function BranchesList() {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="flex items-center justify-between bg-[#fcfcfc] p-5">
        <div className="flex items-center gap-2">
          <FaStore />
          <span className="font-semibold text-[#666]">الفروع والمستودعات</span>
          <span className="text-sm text-gray-400">(1 من 5)</span>
        </div>
        <div className="flex overflow-hidden rounded-md">
          <Input
            className="rounded-none rounded-s-md focus-visible:ring-0"
            placeholder="عدد لا محدود"
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
