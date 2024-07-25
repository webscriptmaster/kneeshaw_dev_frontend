/* eslint-disable react/no-danger */

"use client";

import clsx from "clsx";

import { Button } from "@/components/ui/button";

import useCookieConsentStore from "@/zustand/CookieConsent";

export default function CookieBanner() {
  const cookieConsentStore = useCookieConsentStore();

  const handleConsent = (isAccepted: boolean) => () => {
    cookieConsentStore.consentAction(isAccepted);
  };

  if (cookieConsentStore.isConsented) return null;

  return (
    <div
      className={clsx(
        "fixed z-50 flex w-full flex-col bg-card p-4 md:p-8",
        cookieConsentStore.cookieConsent?.position === "top"
          ? "top-0"
          : "bottom-0"
      )}
    >
      <p
        className="mb-4 text-[14px] md:text-[16px] lg:text-[18px]"
        dangerouslySetInnerHTML={{
          __html: cookieConsentStore.cookieConsent?.description ?? ""
        }}
      />

      <div className="flex justify-end gap-4">
        <Button
          className="bg-transparent"
          variant="outline"
          onClick={handleConsent(false)}
        >
          {cookieConsentStore.cookieConsent?.declineLabel}
        </Button>

        <Button
          className="border-[#AFD275] bg-transparent text-[#AFD275]"
          variant="outline"
          onClick={handleConsent(true)}
        >
          {cookieConsentStore.cookieConsent?.acceptLabel}
        </Button>
      </div>
    </div>
  );
}
