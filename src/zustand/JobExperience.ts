import { toast } from "sonner";
import { create } from "zustand";

import { IJobExperience } from "@/types/interfaces";
import { apiGetJobExperienceList } from "@/api/JobExperience";

interface IJobExperienceState {
  loading: boolean;
  jobExperiences: IJobExperience[];

  getListAction: () => void;
}

const useJobExperienceStore = create<IJobExperienceState>()((set) => ({
  loading: false,
  jobExperiences: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobExperienceList();

      if (response && response.data) {
        set({ jobExperiences: response.data.result });
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

export default useJobExperienceStore;
