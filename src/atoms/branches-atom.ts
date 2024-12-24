import { atom } from "@mongez/react-atom";
import { openCreateBranchModalAtom } from "./open-create-branch-modal-atom";

type Branch = {
  id: number;
  name: string;
  country: string;
};

type BranchesAtom = {
  branches: Branch[];
};

type BranchesAtomActions = {
  /***
   * createBranch
   */
  createBranch: (data: Branch) => void;
  /***
   * deleteBranch
   */
  deleteBranch: (id: string) => void;
  /***
   * editBranch
   */
  editBranch: (data: Branch) => void;
};

export const branchesAtom = atom<BranchesAtom, BranchesAtomActions>({
  key: "branches",
  default: {
    branches: [],
  },

  actions: {
    /***
     * createBranch
     */
    createBranch(data: Branch) {
      branchesAtom.change("branches", [...branchesAtom.value.branches, data]);
      openCreateBranchModalAtom.close();
    },
    /***
     * deleteBranch
     */
    deleteBranch(id: string) {
      branchesAtom.change(
        "branches",
        branchesAtom.value.branches.filter(
          (branch) => branch.id !== Number(id),
        ),
      );
    },
    /**
     * editBranch
     */
    editBranch(data: Branch) {
      branchesAtom.change(
        "branches",
        branchesAtom.value.branches.map((branch) =>
          branch.id === data.id ? data : branch,
        ),
      );
    },
  },
});
