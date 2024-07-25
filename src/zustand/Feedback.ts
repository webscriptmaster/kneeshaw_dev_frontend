import { toast } from "sonner";
import { create } from "zustand";

import { apiCreateFeedback } from "@/api/Feedback";

interface IFeedbackState {
  loading: boolean;

  createAction: (data: any, onSuccessCallback?: () => void) => void;
}

const useFeedbackStore = create<IFeedbackState>()((set) => ({
  loading: false,

  createAction: async (data: any, onSuccessCallback) => {
    try {
      set({ loading: true });
      const response = await apiCreateFeedback(data);

      if (response && response.data) {
        toast.success(response.data.msg);

        if (typeof onSuccessCallback === "function") {
          onSuccessCallback();
        }
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

export default useFeedbackStore;
