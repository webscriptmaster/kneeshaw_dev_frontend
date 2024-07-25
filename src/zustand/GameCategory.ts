import { toast } from "sonner";
import { create } from "zustand";

import { IGameCategory } from "@/types/interfaces";
import { apiGetGameCategoryList } from "@/api/GameCategory";

interface IGameCategoryState {
  loading: boolean;
  gameCategories: IGameCategory[];

  getListAction: () => void;
}

const useGameCategoryStore = create<IGameCategoryState>()((set) => ({
  loading: false,
  gameCategories: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetGameCategoryList();

      if (response && response.data) {
        set({ gameCategories: response.data.result });
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

export default useGameCategoryStore;
