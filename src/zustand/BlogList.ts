import { toast } from "sonner";
import { create } from "zustand";

import { IBlog } from "@/types/interfaces";
import { apiGetBlogById, apiGetBlogList } from "@/api/BlogList";

interface IBlogListState {
  loading: boolean;
  blogs: IBlog[];

  getAction: (id: string) => Promise<IBlog | null>;
  getListAction: () => void;
}

const useBlogListStore = create<IBlogListState>()((set) => ({
  loading: false,
  blogs: [],

  getAction: async (id: string) => {
    try {
      set({ loading: true });
      const response = await apiGetBlogById(id);

      if (response && response.data) {
        return response.data.result as IBlog;
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
      const response = await apiGetBlogList();

      if (response && response.data) {
        set({ blogs: response.data.result });
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

export default useBlogListStore;
