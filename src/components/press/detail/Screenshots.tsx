"use client";

import { IGame } from "@/types/interfaces";

export default function Screenshots(props: IGame) {
  const { _id: id, title, screenshots } = props;

  return (
    <div
      id="screenshots"
      className="flex w-full flex-col rounded-md bg-tertiary p-4 md:p-8"
    >
      <h2 className="font-lbv mb-4 text-[16px] font-[700] md:text-[20px] lg:text-[24px]">
        SCREENSHOTS
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {screenshots.map((s, index) => (
          <img
            key={`${id}-${index.toString()}-${s}`}
            className="h-full min-h-[200px] w-full rounded-md object-cover"
            src={`${process.env.NEXT_PUBLIC_API_SERVER}/${s}`}
            alt={title}
          />
        ))}
      </div>
    </div>
  );
}
