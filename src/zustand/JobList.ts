import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { IJob } from "@/types/interfaces";
import { apiCreateJob, apiGetJobList } from "@/api/JobList";

interface IJobListState {
  hasHydrated: boolean;
  loading: boolean;
  jobs: IJob[];

  stage: number;
  maxStage: number;
  newJob: Record<string, any> | null;

  setHasHydrated: (payload: boolean) => void;

  setStage: (payload: number) => void;
  increaseStage: () => void;
  decreaseStage: () => void;

  updateNewJob: (payload: Record<string, any>) => void;
  clearNewJob: () => void;

  getListAction: () => void;
  createAction: (onSuccessCallback?: () => void) => void;
}

const useJobListStore = create<IJobListState>()(
  persist(
    (set, get) => ({
      hasHydrated: false,
      loading: false,
      jobs: [],

      stage: 1,
      maxStage: 5,
      newJob: null,

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),

      setStage: (payload: number) => set({ stage: payload }),
      increaseStage: () =>
        set({
          stage: get().stage < get().maxStage ? get().stage + 1 : get().maxStage
        }),
      decreaseStage: () =>
        set({ stage: get().stage > 1 ? get().stage - 1 : 1 }),

      updateNewJob: (payload: Record<string, any>) =>
        set({ newJob: { ...get().newJob, ...payload } }),
      clearNewJob: () => set({ newJob: null }),

      getListAction: async () => {
        try {
          set({ loading: true });
          const response = await apiGetJobList();

          if (response && response.data) {
            set({ jobs: response.data.result });
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
      },

      createAction: async (onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiCreateJob(get().newJob);

          if (response && response.data) {
            set({ stage: 1 });
            set({ newJob: null });
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
      name: "ks-job",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useJobListStore;
