import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { ICookieConsent } from "@/types/interfaces";
import { apiGetCookieConsent } from "@/api/CookieConsent";

interface ICookieConsentState {
  hasHydrated: boolean;
  loading: boolean;
  cookieConsent: ICookieConsent | null;
  isConsented: boolean;
  isAccepted: boolean;

  setHasHydrated: (payload: boolean) => void;

  getAction: () => void;
  consentAction: (isAccepted: boolean) => void;
}

const useCookieConsentStore = create<ICookieConsentState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      loading: false,
      cookieConsent: null,
      isConsented: false,
      isAccepted: false,

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),

      getAction: async () => {
        try {
          set({ loading: true });
          const response = await apiGetCookieConsent();

          if (response && response.data) {
            set({ cookieConsent: response.data.result });
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

      consentAction: (isAccepted: boolean) => {
        try {
          set({ loading: true });
          set({ isConsented: true });
          set({ isAccepted });
        } catch (err: any) {
          console.error(err);
          if (err) {
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
      name: "ks-cookie",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useCookieConsentStore;
