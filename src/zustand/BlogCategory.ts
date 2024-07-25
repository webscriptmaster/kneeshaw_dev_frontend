import { toast } from "sonner";
import { create } from "zustand";

import { IBlogCategory } from "@/types/interfaces";
import { apiGetBlogCategoryList } from "@/api/BlogCategory";

interface IBlogCategoryState {
  loading: boolean;
  blogCategories: IBlogCategory[];

  getListAction: () => void;
}

const useBlogCategoryStore = create<IBlogCategoryState>()((set) => ({
  loading: false,
  blogCategories: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetBlogCategoryList();

      if (response && response.data) {
        set({ blogCategories: response.data.result });
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

export default useBlogCategoryStore;
