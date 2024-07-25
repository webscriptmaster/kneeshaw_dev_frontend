import { toast } from "sonner";
import { create } from "zustand";

import { IFaq } from "@/types/interfaces";
import { apiGetFaqList } from "@/api/Faq";

interface IFaqState {
  loading: boolean;
  faqs: IFaq[];

  getListAction: () => void;
}

const useFaqStore = create<IFaqState>()((set) => ({
  loading: false,
  faqs: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetFaqList();

      if (response && response.data) {
        set({ faqs: response.data.result });
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

export default useFaqStore;
