import { toast } from "sonner";
import { create } from "zustand";

import { IJobPeriod } from "@/types/interfaces";
import { apiGetJobPeriodList } from "@/api/JobPeriod";

interface IJobPeriodState {
  loading: boolean;
  jobPeriods: IJobPeriod[];

  getListAction: () => void;
}

const useJobPeriodStore = create<IJobPeriodState>()((set) => ({
  loading: false,
  jobPeriods: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobPeriodList();

      if (response && response.data) {
        set({ jobPeriods: response.data.result });
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

export default useJobPeriodStore;
