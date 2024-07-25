import { toast } from "sonner";
import { create } from "zustand";

import { IJobGodot } from "@/types/interfaces";
import { apiGetJobGodotList } from "@/api/JobGodot";

interface IJobGodotState {
  loading: boolean;
  jobGodots: IJobGodot[];

  getListAction: () => void;
}

const useJobGodotStore = create<IJobGodotState>()((set) => ({
  loading: false,
  jobGodots: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobGodotList();

      if (response && response.data) {
        set({ jobGodots: response.data.result });
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

export default useJobGodotStore;
