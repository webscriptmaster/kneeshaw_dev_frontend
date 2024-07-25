"use client";

import { IGame } from "@/types/interfaces";

export default function Sidebar(props: IGame) {
  const { videos, screenshots, logos } = props;

  return (
    <div className="sticky top-10 hidden h-72 rounded-md bg-tertiary p-8 lg:block">
      <ul className="flex list-none flex-col gap-4">
        <li>
          <a
            href="#game-fact-sheet"
            className="flex items-center gap-2 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#E7717D] hover:before:bg-[#E7717D]"
          >
            GAME FACT SHEET
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="#history"
            className="flex items-center gap-2 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#E7717D] hover:before:bg-[#E7717D]"
          >
            HISTORY
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="#videos"
            className="flex items-center gap-2 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#E7717D] hover:before:bg-[#E7717D]"
          >
            VIDEOS ({videos.length})
          </a>
        </li>
        <li>
          <a
            href="#screenshots"
            className="flex items-center gap-2 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#E7717D] hover:before:bg-[#E7717D]"
          >
            SCREENSHOTS ({screenshots.length})
          </a>
        </li>
        <li>
          <a
            href="#logo"
            className="flex items-center gap-2 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#E7717D] hover:before:bg-[#E7717D]"
          >
            LOGO ({logos.length})
          </a>
        </li>
        <li>
          <a
            href="#credits"
            className="flex items-center gap-2 before:h-4 before:w-4 before:rounded-full before:border-2 before:border-[#E7717D] hover:before:bg-[#E7717D]"
          >
            CREDITS
          </a>
        </li>
      </ul>
    </div>
  );
}
