"use client";

import { format } from "date-fns";
import { LuCalendar, LuGlobe, LuTag, LuUsers } from "react-icons/lu";

import { IGame } from "@/types/interfaces";

export default function FactSheet(props: IGame) {
  const { releaseDate, availableLanguages, players, price } = props;

  return (
    <div
      id="game-fact-sheet"
      className="flex w-full flex-col gap-4 rounded-md bg-tertiary p-4 md:p-8"
    >
      <h2 className="font-lbv text-[16px] font-[700] md:text-[20px] lg:text-[24px]">
        GAME FACT SHEET
      </h2>

      <dl className="grid grid-cols-1 items-center gap-4 rounded-md bg-card p-4 md:grid-cols-2 md:p-8 lg:grid-cols-3">
        <dt className="flex items-center gap-2 text-[14px] opacity-50 md:text-[16px] lg:text-[18px]">
          <LuCalendar className="h-4 w-4" /> Release Date
        </dt>
        <dd className="text-[14px] font-[500] md:text-[16px] lg:col-span-2 lg:text-[18px]">
          {releaseDate ? format(new Date(releaseDate), "PPP") : "Coming Soon"}
        </dd>

        <dt className="flex items-center gap-2 text-[14px] opacity-50 md:text-[16px] lg:text-[18px]">
          <LuGlobe className="h-4 w-4" /> Available Languages
        </dt>
        <dd className="text-[14px] font-[500] md:text-[16px] lg:col-span-2 lg:text-[18px]">
          {availableLanguages.join(",")}
        </dd>

        <dt className="flex items-center gap-2 text-[14px] opacity-50 md:text-[16px] lg:text-[18px]">
          <LuUsers className="h-4 w-4" /> Players
        </dt>
        <dd className="text-[14px] font-[500] md:text-[16px] lg:col-span-2 lg:text-[18px]">
          {players}
        </dd>

        <dt className="flex items-center gap-2 text-[14px] opacity-50 md:text-[16px] lg:text-[18px]">
          <LuTag className="h-4 w-4" /> Price
        </dt>
        <dd className="text-[14px] font-[500] md:text-[16px] lg:col-span-2 lg:text-[18px]">
          USD ${price}
        </dd>
      </dl>
    </div>
  );
}
