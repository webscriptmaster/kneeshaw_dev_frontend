import { toast } from "sonner";
import { create } from "zustand";

import { IJobDatabase } from "@/types/interfaces";
import { apiGetJobDatabaseList } from "@/api/JobDatabase";

interface IJobDatabaseState {
  loading: boolean;
  jobDatabases: IJobDatabase[];

  getListAction: () => void;
}

const useJobDatabaseStore = create<IJobDatabaseState>()((set) => ({
  loading: false,
  jobDatabases: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetJobDatabaseList();

      if (response && response.data) {
        set({ jobDatabases: response.data.result });
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

export default useJobDatabaseStore;
