"use client";

import clsx from "clsx";

import { THEME_MODE, USER_ROLES } from "@/utils/constants";
import useAuthStore from "@/zustand/Auth";
import useThemeStore from "@/zustand/Theme";

export default function RoleSwitch() {
  const authStore = useAuthStore();
  const themeStore = useThemeStore();

  const handleSwitchRole = (newRole: string) => {
    authStore.setRole(newRole);

    if (newRole === USER_ROLES.GAMER) {
      themeStore.setMode(THEME_MODE.DARK);
    }

    if (newRole === USER_ROLES.DEVELOPER) {
      themeStore.setMode(THEME_MODE.LIGHT);
    }
  };

  return (
    <div className="mb-[100px] flex w-full justify-center px-5 md:px-10">
      <div
        className={clsx(
          "flex rounded-[26px] p-[10px]",
          authStore.role === USER_ROLES.GAMER ? "bg-[#39352F]" : "bg-[#E3E4E3]"
        )}
      >
        <button
          type="button"
          className={clsx(
            "rounded-[16px] px-[30px] py-[20px] text-[22px] font-bold md:px-[90px]",
            authStore.role === USER_ROLES.GAMER
              ? "bg-[#E7717D] text-[#EDF1F3]"
              : "text-[#00000080]"
          )}
          onClick={() => handleSwitchRole(USER_ROLES.GAMER)}
        >
          Play with Us
        </button>

        <button
          type="button"
          className={clsx(
            "rounded-[16px] px-[30px] py-[20px] text-[22px] font-bold md:px-[90px]",
            authStore.role === USER_ROLES.DEVELOPER
              ? "bg-[#AFD275] text-[#EDF1F3]"
              : "text-[#EDF1F3B2]"
          )}
          onClick={() => handleSwitchRole(USER_ROLES.DEVELOPER)}
        >
          Create with Us
        </button>
      </div>
    </div>
  );
}
