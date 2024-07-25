"use client";

import { useEffect } from "react";

import { useTheme } from "next-themes";

import LoadingOverlay from "@/components/_layout/LoadingOverlay";
import useThemeStore from "@/zustand/Theme";
import useAuthStore from "@/zustand/Auth";
import useCommunityStore from "@/zustand/Community";
import useCookieConsentStore from "@/zustand/CookieConsent";
import useCartStore from "@/zustand/Cart";
import CookieBanner from "@/components/_layout/CookieBanner";

export default function RootTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();

  const themeStore = useThemeStore();
  const authStore = useAuthStore();
  const cookieConsentStore = useCookieConsentStore();
  const communityStore = useCommunityStore();
  const cartStore = useCartStore();

  const hasHydrated =
    themeStore.hasHydrated &&
    authStore.hasHydrated &&
    cookieConsentStore.hasHydrated &&
    communityStore.hasHydrated &&
    cartStore.hasHydrated;

  useEffect(() => {
    if (hasHydrated) {
      theme.setTheme(themeStore.mode);
    }
  }, [themeStore.mode, hasHydrated]);

  useEffect(() => {
    cookieConsentStore.getAction();
    cartStore.getListAction();
  }, []);

  return (
    <>
      {!hasHydrated && <LoadingOverlay loading />}

      {hasHydrated && (
        <>
          {children}

          <CookieBanner />
        </>
      )}
    </>
  );
}
