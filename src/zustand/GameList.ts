import { toast } from "sonner";
import { create } from "zustand";

import { IGame } from "@/types/interfaces";
import { apiGetGameById, apiGetGameList } from "@/api/GameList";

interface IGameListState {
  loading: boolean;
  games: IGame[];

  getAction: (id: string) => Promise<IGame | null>;
  getListAction: () => void;
}

const useGameListStore = create<IGameListState>()((set) => ({
  loading: false,
  games: [],

  getAction: async (id: string) => {
    try {
      set({ loading: true });
      const response = await apiGetGameById(id);

      if (response && response.data) {
        return response.data.result as IGame;
      }

      return null;
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

    return null;
  },

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetGameList();

      if (response && response.data) {
        set({ games: response.data.result });
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

export default useGameListStore;
