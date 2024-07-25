"use client";

import useAuthStore from "@/zustand/Auth";
import ChangeEmailDialog from "./ChangeEmailDialog";
import ChangePasswordDialog from "./ChangePasswordDialog";
import ChangePaymentDialog from "./ChangePaymentDialog";

export default function MySettings() {
  const authStore = useAuthStore();

  return (
    <div className="flex flex-1 flex-col rounded-md bg-tertiary p-5 md:p-10">
      <h1 className="mb-4 text-[16px] font-[500] md:text-[18px] lg:text-[20px]">
        Settings
      </h1>

      <p className="mb-10 text-[12px] font-[400] md:text-[14px] lg:text-[16px]">
        This information will be changed on your profile.
      </p>

      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-4 md:gap-10">
        <p className="text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
          Email
        </p>
        <div className="flex flex-col items-start md:col-span-3">
          <p className="mb-2 text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
            {authStore.user?.email}
          </p>

          <ChangeEmailDialog />
        </div>

        <p className="text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
          Password
        </p>
        <div className="flex flex-col items-start md:col-span-3">
          <ChangePasswordDialog />
        </div>

        <p className="text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
          Payment
        </p>
        <div className="flex flex-col items-start md:col-span-3">
          <ChangePaymentDialog />
        </div>
      </div>
    </div>
  );
}
