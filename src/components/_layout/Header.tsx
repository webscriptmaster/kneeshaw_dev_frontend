"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect } from "react";

import clsx from "clsx";
import { LuMoon, LuShoppingBag, LuSun } from "react-icons/lu";

import { THEME_MODE } from "@/utils/constants";
import useThemeStore from "@/zustand/Theme";
import useAuthStore from "@/zustand/Auth";
import useGameListStore from "@/zustand/GameList";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

import useCartStore from "@/zustand/Cart";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
  const pathName = usePathname();
  const authStore = useAuthStore();
  const themeStore = useThemeStore();
  const cartStore = useCartStore();
  const gameStore = useGameListStore();

  const handleSwitchTheme = () => {
    themeStore.setMode(
      themeStore.mode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK
    );
  };

  const initialize = async () => {
    await gameStore.getListAction();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <header
      className={clsx(
        "flex items-center justify-between border-b px-[24px] py-[4px] md:py-[24px] lg:px-[48px]",
        themeStore.mode === THEME_MODE.DARK
          ? "border-b-[#EDF1F3]/15"
          : "border-b-[#211D19]/15"
      )}
    >
      <Logo />

      <div className="hidden items-center justify-between text-[18px] font-[600] lg:gap-[16px] xl:flex xl:gap-[48px]">
        <Link
          href="/games"
          className={
            pathName.includes("/games") ? "border-b-[2px] border-[#AFD275]" : ""
          }
        >
          Games
        </Link>
        <Link
          href="/blogs"
          className={
            pathName.includes("/blogs") ? "border-b-[2px] border-[#AFD275]" : ""
          }
        >
          Blog
        </Link>
        <Link
          href="/services"
          className={
            pathName.includes("/services")
              ? "border-b-[2px] border-[#AFD275]"
              : ""
          }
        >
          Services
        </Link>
        <Link
          href="/job"
          className={
            pathName.includes("/job") ? "border-b-[2px] border-[#AFD275]" : ""
          }
        >
          Job
        </Link>
        <Link
          href="/about"
          className={
            pathName.includes("/about") ? "border-b-[2px] border-[#AFD275]" : ""
          }
        >
          About Us
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={clsx(
                  "rounded-none p-0 text-[18px] font-[600]",
                  pathName.includes("/press")
                    ? "border-b-[2px] border-[#AFD275]"
                    : ""
                )}
              >
                Press
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-80 bg-background p-4">
                  {gameStore.games.map((g) => (
                    <Link
                      className="flex items-center gap-4 rounded-md hover:bg-[#AFD275]"
                      key={g._id}
                      href={`/press/${g._id}`}
                    >
                      <img
                        className="h-20 w-20 rounded-md object-contain"
                        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${g.logos[0]}`}
                        alt={g.shortTitle ?? g.title}
                      />

                      <p className="font-lbv">{g.shortTitle || g.title}</p>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex flex-row items-center gap-[24px]">
        <div
          className="flex cursor-pointer gap-[12px] rounded-full bg-[#888888] p-[4px]"
          onClick={handleSwitchTheme}
        >
          <LuMoon
            className={clsx(
              "rounded-full p-1 text-[24px] text-[#EDF1F3]",
              themeStore.mode === THEME_MODE.DARK ? "bg-[#000000]" : ""
            )}
          />
          <LuSun
            className={clsx(
              "rounded-full p-1 text-[24px] text-[#000000]",
              themeStore.mode === THEME_MODE.LIGHT ? "bg-[#EDF1F3]" : ""
            )}
          />
        </div>

        <Link className="relative" href="/cart">
          <LuShoppingBag className="text-[24px]" />
          <div className="absolute bottom-[-5px] right-[-5px] h-[16px] w-[16px] rounded-[100%] bg-[#AFD275] text-center text-[10px] leading-[15px]">
            {cartStore.cartItems.length}
          </div>
        </Link>

        <div className="hidden items-center justify-center gap-[12px] lg:flex">
          {!authStore.user?._id && (
            <>
              <Link
                className="text-[18px] font-[600] text-[#AFD275]"
                href="/signin"
              >
                Sign In
              </Link>
              <Link
                className="rounded-[18px] bg-[#AFD275] px-[24px] py-[8px] text-[18px] font-[600]"
                href="/signup"
              >
                Sign Up
              </Link>
            </>
          )}

          {authStore.user?._id && <ProfileDropdown />}
        </div>

        <Sidebar />
      </div>
    </header>
  );
}
