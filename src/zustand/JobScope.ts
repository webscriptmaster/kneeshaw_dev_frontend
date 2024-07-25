import { toast } from "sonner";
import { create } from "zustand";

import { IJobScope } from "@/types/interfaces";
import { apiGetJobScopeList } from "@/api/JobScope";

interface IJobScopeState {
  loading: boolean;
  jobScopes: IJobScope[];

  getListAction: () => void;
}

const useJobScopeStore = create<IJobScopeState>()((set) => ({
  loading: false,
  jobScopes: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobScopeList();

      if (response && response.data) {
        set({ jobScopes: response.data.result });
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

export default useJobScopeStore;
