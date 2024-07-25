"use client";

import Link from "next/link";

import useThemeStore from "@/zustand/Theme";
import { THEME_MODE } from "@/utils/constants";

export default function Logo() {
  const themeStore = useThemeStore();

  return (
    <Link href="/">
      <img
        className="h-[48px] w-[108px] md:h-[86px] md:w-[192px]"
        src={
          themeStore.mode === THEME_MODE.DARK
            ? "/logo/logo-white.png"
            : "/logo/logo-black.png"
        }
        alt="Logo"
      />
    </Link>
  );
}
