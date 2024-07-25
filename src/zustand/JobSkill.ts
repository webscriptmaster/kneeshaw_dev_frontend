import { toast } from "sonner";
import { create } from "zustand";

import { IJobSkill } from "@/types/interfaces";
import { apiGetJobSkillList } from "@/api/JobSkill";

interface IJobSkillState {
  loading: boolean;
  jobSkills: IJobSkill[];

  getListAction: () => void;
}

const useJobSkillStore = create<IJobSkillState>()((set) => ({
  loading: false,
  jobSkills: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobSkillList();

      if (response && response.data) {
        set({ jobSkills: response.data.result });
      }
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      set({ loading: false });
    }
  }
}));

export default useJobSkillStore;
