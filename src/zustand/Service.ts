import { toast } from "sonner";
import { create } from "zustand";

import { IService } from "@/types/interfaces";
import { apiGetServiceList } from "@/api/Service";

interface IServiceState {
  loading: boolean;
  services: IService[];

  getListAction: () => void;
}

const useServiceStore = create<IServiceState>()((set) => ({
  loading: false,
  services: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetServiceList();

      if (response && response.data) {
        set({ services: response.data.result });
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

export default useServiceStore;
