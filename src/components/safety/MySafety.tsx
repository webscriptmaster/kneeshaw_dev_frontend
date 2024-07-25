"use client";

import Link from "next/link";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";

import useAuthStore from "@/zustand/Auth";

export default function MySafety() {
  const authStore = useAuthStore();

  const handleRequestDataClick = async () => {
    await authStore.sendDataRequestAction();
  };

  return (
    <div className="flex flex-1 flex-col rounded-md bg-tertiary p-5 md:p-10">
      <h1 className="mb-4 text-[16px] font-[500] md:text-[18px] lg:text-[20px]">
        Privacy & Safety
      </h1>

      <p className="mb-10 text-[12px] font-[400] md:text-[14px] lg:text-[16px]">
        Check out our{" "}
        <Link className="text-[#AFD275]" href="/terms" target="_blank">
          Terms
        </Link>{" "}
        and{" "}
        <Link className="text-[#AFD275]" href="/privacy" target="_blank">
          Privacy
        </Link>
        .
      </p>

      <div className="flex w-full flex-col">
        <div className="w-full rounded-md border p-4">
          {authStore.canDataRequest && (
            <Button
              className="border-[#AFD275] bg-transparent"
              variant="outline"
              onClick={handleRequestDataClick}
            >
              Request Data
            </Button>
          )}

          {!authStore.canDataRequest && (
            <p className="text-[12px] font-[400] md:text-[14px] lg:text-[16px]">
              You've requested a copy of your data. You can request again on{" "}
              {format(
                new Date(authStore.lastDataRequest?.availableAt ?? ""),
                "PPP"
              )}
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
