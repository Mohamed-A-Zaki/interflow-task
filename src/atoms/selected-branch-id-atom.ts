import { atom } from "@mongez/react-atom";

type SelectedBranchIdAtom = {
  selectedBranchId: number | null;
};

export const selectedBranchIdAtom = atom<SelectedBranchIdAtom>({
  key: "selected-branch-id",
  default: {
    selectedBranchId: null,
  },
});
