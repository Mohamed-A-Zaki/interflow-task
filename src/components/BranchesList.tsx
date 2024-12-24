import { branchesAtom } from "@/atoms/branches-atom";
import BranchItem from "./BranchItem";

export default function BranchesList() {
  const { branches } = branchesAtom.useValue();

  if (branches.length === 0) {
    return (
      <div className="p-5">
        <p className="text-center text-sm text-gray-400">لا يوجد فروع</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      {branches.map((_, indx) => {
        return <BranchItem key={indx} />;
      })}
    </div>
  );
}
