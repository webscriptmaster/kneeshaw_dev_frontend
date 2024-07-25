"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  LuChevronDown,
  LuFileText,
  LuHome,
  LuLogOut,
  LuSettings,
  LuShoppingBag
} from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import useAuthStore from "@/zustand/Auth";

export default function ProfileDropdown() {
  const router = useRouter();
  const authStore = useAuthStore();

  const handleLogoutClick = async () => {
    await authStore.logoutAction(() => {
      router.push("/signin");
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-[8px]">
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
          <LuChevronDown className="h-[24px] w-[24px]" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[300px] bg-tertiary p-[24px]"
        align="end"
      >
        <DropdownMenuItem className="mb-[24px]">
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
        </DropdownMenuItem>

        <DropdownMenuItem className="mb-[12px]">
          <Link
            href="/profile"
            className="flex items-center gap-[12px] text-[18px] font-[500]"
          >
            <LuHome className="h-[24px] w-[24px]" />
            My Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="mb-[12px]">
          <Link
            href="/cart"
            className="flex items-center gap-[12px] text-[18px] font-[500]"
          >
            <LuShoppingBag className="h-[24px] w-[24px]" />
            Shopping Cart
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="mb-[12px]">
          <Link
            href="/quote"
            className="flex items-center gap-[12px] text-[18px] font-[500]"
          >
            <LuFileText className="h-[24px] w-[24px]" />
            Request Quote
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="mb-[12px]">
          <Link
            href="/settings"
            className="flex items-center gap-[12px] text-[18px] font-[500]"
          >
            <LuSettings className="h-[24px] w-[24px]" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="mb-[12px]">
          <Link
            href="/safety"
            className="flex items-center gap-[12px] text-[18px] font-[500]"
          >
            <AiOutlineSafety className="h-[24px] w-[24px]" />
            Privacy & Safety
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex items-center gap-[12px] text-[18px] font-[500]"
          onClick={handleLogoutClick}
        >
          <LuLogOut className="h-[24px] w-[24px]" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
