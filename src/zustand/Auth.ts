import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { IDataRequest, IUser } from "@/types/interfaces";
import { USER_ROLES } from "@/utils/constants";
import {
  apiChangeEmail,
  apiChangePassword,
  apiLogin,
  apiLogout,
  apiRegister,
  apiResetPasswordByToken,
  apiSendDataRequest,
  apiSendResetLink,
  apiUpdateProfile
} from "@/api/Auth";
import {
  removeLocalAccessToken,
  removeLocalRefreshToken,
  setLocalAccessToken,
  setLocalRefreshToken
} from "@/lib/auth";

interface IAuthState {
  hasHydrated: boolean;
  loading: boolean;
  role: string;
  user: IUser | null;
  lastDataRequest: IDataRequest | null;
  canDataRequest: boolean;

  setHasHydrated: (payload: boolean) => void;
  setRole: (payload: string) => void;

  loginAction: (data: any, onSuccessCallback?: () => void) => void;
  logoutAction: (onSuccessCallback?: () => void) => void;
  registerAction: (data: any, onSuccessCallback?: () => void) => void;

  forgotByEmailAction: (data: any, onSuccessCallback?: () => void) => void;
  resetPasswordByTokenAction: (
    data: any,
    onSuccessCallback?: () => void
  ) => void;

  updateProfileAction: (data: any, onSuccessCallback?: () => void) => void;
  changeEmailAction: (data: any, onSuccessCallback?: () => void) => void;
  changePasswordAction: (data: any, onSuccessCallback?: () => void) => void;

  sendDataRequestAction: (onSuccessCallback?: () => void) => void;
}

const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      loading: false,
      role: USER_ROLES.GAMER,
      user: null,
      lastDataRequest: null,
      canDataRequest: false,

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),
      setRole: (payload: string) => set({ role: payload }),

      loginAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiLogin(data);

          if (response && response.data) {
            const {
              user,
              lastDataRequest,
              canDataRequest,
              accessToken,
              refreshToken,
              msg
            } = response.data;

            setLocalAccessToken(accessToken);
            setLocalRefreshToken(refreshToken);

            set({ user: user ?? null });
            set({ lastDataRequest: lastDataRequest ?? null });
            set({ canDataRequest });
            set({
              role: [USER_ROLES.DEVELOPER, USER_ROLES.GAMER].includes(user.role)
                ? user.role
                : USER_ROLES.GAMER
            });
            toast.success(msg);

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
      },

      logoutAction: async (onSuccessCallback) => {
        try {
          set({ loading: true });
          await apiLogout();

          removeLocalAccessToken();
          removeLocalRefreshToken();

          set({ user: null });

          if (typeof onSuccessCallback === "function") {
            onSuccessCallback();
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

      registerAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiRegister(data);

          if (response && response.data) {
            const { msg } = response.data;
            toast.success(msg);

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
      },

      forgotByEmailAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiSendResetLink(data);

          if (response && response.data) {
            const { msg } = response.data;
            toast.success(msg);

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
      },

      resetPasswordByTokenAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiResetPasswordByToken(data);

          if (response && response.data) {
            const { msg } = response.data;
            toast.success(msg);

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
      },

      updateProfileAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiUpdateProfile(data);

          if (response && response.data) {
            set({ user: response.data.user ?? null });

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
      },

      changeEmailAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiChangeEmail(data);

          if (response && response.data) {
            set({ user: response.data.user ?? null });

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
      },

      changePasswordAction: async (data: any, onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiChangePassword(data);

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
      },

      sendDataRequestAction: async (onSuccessCallback) => {
        try {
          set({ loading: true });
          const response = await apiSendDataRequest();

          if (response && response.data) {
            set({ lastDataRequest: response.data.lastDataRequest });
            set({ canDataRequest: response.data.canDataRequest });
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
      name: "ks-auth",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useAuthStore;
