import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { ICart } from "@/types/interfaces";
import {
  apiCreateCartItem,
  apiGetCartItemById,
  apiGetCartItemList
} from "@/api/Cart";

interface ICartState {
  hasHydrated: boolean;
  loading: boolean;
  cartItems: ICart[];

  setHasHydrated: (payload: boolean) => void;

  getAction: (id: string) => Promise<ICart | null>;
  getListAction: () => void;
  createAction: (data: any, onSuccessCallback?: () => void) => void;
}

const useCartStore = create<ICartState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      loading: false,
      cartItems: [],

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),

      getAction: async (id: string) => {
        try {
          set({ loading: true });
          const response = await apiGetCartItemById(id);

          if (response && response.data) {
            return response.data.result as ICart;
          }

          return null;
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

        return null;
      },

      getListAction: async () => {
        try {
          set({ loading: true });
          const response = await apiGetCartItemList();

          if (response && response.data) {
            set({ cartItems: response.data.result });
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

      createAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiCreateCartItem(data);

          if (response && response.data) {
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
      name: "ks-cart",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useCartStore;
