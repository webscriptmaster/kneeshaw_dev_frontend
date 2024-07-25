import { toast } from "sonner";
import { create } from "zustand";

import { IGamePlatform } from "@/types/interfaces";
import { apiGetGamePlatformList } from "@/api/GamePlatform";

interface IGamePlatformState {
  loading: boolean;
  gamePlatforms: IGamePlatform[];

  getListAction: () => void;
}

const useGamePlatformStore = create<IGamePlatformState>()((set) => ({
  loading: false,
  gamePlatforms: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetGamePlatformList();

      if (response && response.data) {
        set({ gamePlatforms: response.data.result });
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

export default useGamePlatformStore;
