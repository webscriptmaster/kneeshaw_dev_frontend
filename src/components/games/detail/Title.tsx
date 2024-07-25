"use client";

import { IGame } from "@/types/interfaces";

export default function Title(props: IGame) {
  const { title, promotional } = props;

  return (
    <div className="mb-40 flex flex-col">
      <h1 className="font-lbv mb-10 text-center text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        {title}
      </h1>

      <div className="mb-10 flex h-1 w-full items-center justify-center">
        <div className="h-0 w-[35px] border border-[#AFD276]" />
        <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
        <div className="h-0 w-[35px] border border-[#AFD276]" />
      </div>

      <p className="text-center text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
        {promotional}
      </p>
    </div>
  );
}
