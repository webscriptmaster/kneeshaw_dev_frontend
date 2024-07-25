"use client";

import Link from "next/link";
import { IGame } from "@/types/interfaces";

export default function Credits(props: IGame) {
  const { credits } = props;

  return (
    <div className="mb:p-10 flex flex-col bg-tertiary p-5">
      <h2 className="font-lbv mb-5 text-center text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        Credits
      </h2>

      <p className="mb-5 text-center text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
        {credits}
      </p>

      <div className="flex justify-center">
        <Link
          className="rounded-md bg-[#AFD275] px-5 py-2.5 text-center"
          href="/presskit"
          target="_blank"
        >
          Download Press Kit
        </Link>
      </div>
    </div>
  );
}
