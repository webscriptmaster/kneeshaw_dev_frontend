"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { LuAlignJustify } from "react-icons/lu";

import { useEffect } from "react";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import useAuthStore from "@/zustand/Auth";
import useGameListStore from "@/zustand/GameList";
import useCartStore from "@/zustand/Cart";

export default function Sidebar() {
  const router = useRouter();
  const pathName = usePathname();
  const authStore = useAuthStore();
  const gameStore = useGameListStore();
  const cartStore = useCartStore();

  const handleLogoutClick = async () => {
    await authStore.logoutAction(() => {
      router.push("/signin");
    });
  };

  const initialize = async () => {
    await gameStore.getListAction();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="block xl:hidden" variant="ghost">
          <LuAlignJustify className="text-[24px]" />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col items-center gap-[24px] bg-tertiary pt-[64px]">
        {authStore.user?._id && (
          <div className="flex items-center gap-[12px]">
            <Avatar className="h-[48px] w-[48px]">
              {authStore.user?.avatar && (
                <AvatarImage
                  src={`${process.env.NEXT_PUBLIC_API_SERVER}/${authStore.user?.avatar}`}
                  alt="Avatar"
                />
              )}
              <AvatarFallback className="bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
                {authStore.user?.firstName?.[0]}
                {authStore.user?.lastName?.[0]}
              </AvatarFallback>
            </Avatar>

            <div className="text-[18px] font-[600]">
              {authStore.user?.firstName} {authStore.user?.lastName}
            </div>
          </div>
        )}

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

        <div className="my-[4px] h-[1px] w-full border-t" />

        <p
          className={
            pathName.includes("/press") ? "border-b-[2px] border-[#AFD275]" : ""
          }
        >
          Press
        </p>

        <div className="w-auto">
          {gameStore.games.map((g) => (
            <Link
              className="flex items-center gap-4 rounded-md p-4 hover:bg-[#AFD275]"
              key={g._id}
              href={`/press/${g._id}`}
            >
              <img
                className="h-10 w-10 rounded-md object-contain"
                src={`${process.env.NEXT_PUBLIC_API_SERVER}/${g.logos[0]}`}
                alt={g.shortTitle ?? g.title}
              />

              <p className="font-lbv">{g.shortTitle || g.title}</p>
            </Link>
          ))}
        </div>

        {!authStore.user?._id && (
          <>
            <div className="my-[4px] h-[1px] w-full border-t" />

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

        {authStore.user?._id && (
          <>
            <div className="my-[4px] h-[1px] w-full border-t" />

            <Link
              href="/profile"
              className={
                pathName.includes("/profile")
                  ? "border-b-[2px] border-[#AFD275]"
                  : ""
              }
            >
              My Profile
            </Link>
            <Link
              href="/cart"
              className={clsx(
                "flex items-center gap-2",
                pathName.includes("/cart")
                  ? "border-b-[2px] border-[#AFD275]"
                  : ""
              )}
            >
              Shopping Cart
              <div className="h-[16px] w-[16px] rounded-[100%] bg-[#AFD275] text-center text-[10px]">
                {cartStore.cartItems.length}
              </div>
            </Link>
            <Link
              href="/quote"
              className={
                pathName.includes("/quote")
                  ? "border-b-[2px] border-[#AFD275]"
                  : ""
              }
            >
              Request Quote
            </Link>
            <Link
              href="/settings"
              className={
                pathName.includes("/settings")
                  ? "border-b-[2px] border-[#AFD275]"
                  : ""
              }
            >
              Settings
            </Link>
            <Link
              href="/safety"
              className={
                pathName.includes("/safety")
                  ? "border-b-[2px] border-[#AFD275]"
                  : ""
              }
            >
              Privacy & Safety
            </Link>

            <div className="my-[4px] h-[1px] w-full border-t" />

            <div className="cursor-pointer" onClick={handleLogoutClick}>
              Logout
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
