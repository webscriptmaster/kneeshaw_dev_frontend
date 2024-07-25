"use client";

import { IGame } from "@/types/interfaces";

export default function Title(props: IGame) {
  const { title, promotional } = props;

  return (
    <div className="flex flex-col gap-4 bg-tertiary p-4 md:p-8">
      <h1 className="font-lbv text-[20px] md:text-[30px] lg:text-[40px]">
        {title}
      </h1>

      <p className="text-[16px] md:text-[18px] lg:text-[20px]">{promotional}</p>
    </div>
  );
}
