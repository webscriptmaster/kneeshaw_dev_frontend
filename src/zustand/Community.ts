import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { apiCommunityJoin } from "@/api/Community";

interface ICommunityState {
  hasHydrated: boolean;
  loading: boolean;
  isJoined: boolean;

  setHasHydrated: (payload: boolean) => void;

  joinAction: (data: any, onSuccessCallback?: () => void) => void;
}

const useCommunityStore = create<ICommunityState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      loading: false,
      isJoined: false,

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),

      joinAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiCommunityJoin(data);

          if (response && response.data) {
            set({ isJoined: true });
            toast.success(response.data.msg);

            if (typeof onSuccessCallback === "function") {
              onSuccessCallback();
            }
          }
        } catch (err: any) {
          console.error(err);
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.msg
          ) {
            toast.error(err.response.data.msg);
          } else {
            toast.error("Something went wrong. Please try again later.");
          }
        } finally {
          set({ loading: false });
        }
      }
    }),
    {
      name: "ks-community",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useCommunityStore;
