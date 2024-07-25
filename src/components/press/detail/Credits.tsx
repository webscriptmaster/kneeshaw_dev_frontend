"use client";

import { IGame } from "@/types/interfaces";

export default function Credits(props: IGame) {
  const { credits } = props;

  return (
    <div
      id="credits"
      className="flex w-full flex-col rounded-md bg-tertiary p-4 md:p-8"
    >
      <h2 className="font-lbv mb-4 text-[16px] font-[700] md:text-[20px] lg:text-[24px]">
        CREDITS
      </h2>

      <p className="text-[14px] md:text-[16px] lg:text-[18px]">{credits}</p>
    </div>
  );
}
