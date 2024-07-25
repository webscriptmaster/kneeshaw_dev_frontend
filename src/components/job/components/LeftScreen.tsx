"use client";

import clsx from "clsx";
import { LuBriefcase, LuClock5, LuFileText, LuUsers } from "react-icons/lu";

interface Props {
  className?: string;
}

export default function LeftScreen({ className }: Props) {
  return (
    <div
      className={clsx(
        "relative bg-[linear-gradient(148.73deg,_rgba(175,210,117,0.9)_4.56%,_rgba(175,210,117,0)_110.87%,_rgba(175,210,117,0.6)_110.87%)]",
        className
      )}
    >
      <LuUsers className="absolute left-[10%] top-[5%] h-40 w-40 rotate-[-20deg] brightness-75" />

      <LuFileText className="absolute right-[10%] top-[20%] h-40 w-40 rotate-[15deg] brightness-75" />

      <LuClock5 className="absolute bottom-[20%] left-[10%] h-40 w-40 rotate-[-20deg] brightness-75" />

      <LuBriefcase className="absolute bottom-[5%] right-[10%] h-40 w-40 rotate-[15deg] brightness-75" />
    </div>
  );
}
