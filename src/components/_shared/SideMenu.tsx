"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { AiOutlineSafety } from "react-icons/ai";
import { LuFileText, LuHome, LuSettings, LuShoppingCart } from "react-icons/lu";

export default function SideMenu() {
  const pathName = usePathname();

  return (
    <div className="hidden flex-col gap-4 self-start rounded-md bg-tertiary p-8 lg:flex">
      <Link
        className={clsx(
          "flex items-center gap-3 text-[14px] font-[500] md:text-[16px] lg:text-[18px]",
          pathName.includes("/profile") ? "text-[#AFD275]" : ""
        )}
        href="/profile"
      >
        <LuHome className="h-5 w-5" />
        My Profile
      </Link>

      <Link
        className={clsx(
          "flex items-center gap-3 text-[14px] font-[500] md:text-[16px] lg:text-[18px]",
          pathName.includes("/cart") ? "text-[#AFD275]" : ""
        )}
        href="/cart"
      >
        <LuShoppingCart className="h-5 w-5" />
        Shopping Cart
      </Link>

      <Link
        className={clsx(
          "flex items-center gap-3 text-[14px] font-[500] md:text-[16px] lg:text-[18px]",
          pathName.includes("/quote") ? "text-[#AFD275]" : ""
        )}
        href="/quote"
      >
        <LuFileText className="h-5 w-5" />
        Request Quote
      </Link>

      <Link
        className={clsx(
          "flex items-center gap-3 text-[14px] font-[500] md:text-[16px] lg:text-[18px]",
          pathName.includes("/settings") ? "text-[#AFD275]" : ""
        )}
        href="/settings"
      >
        <LuSettings className="h-5 w-5" />
        Settings
      </Link>

      <Link
        className={clsx(
          "flex items-center gap-3 text-[14px] font-[500] md:text-[16px] lg:text-[18px]",
          pathName.includes("/safety") ? "text-[#AFD275]" : ""
        )}
        href="/safety"
      >
        <AiOutlineSafety className="h-5 w-5" />
        Privacy & Safety
      </Link>
    </div>
  );
}
