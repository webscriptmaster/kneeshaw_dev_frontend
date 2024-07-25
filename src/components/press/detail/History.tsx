"use client";

import { IGame } from "@/types/interfaces";

export default function History(props: IGame) {
  const { history, features } = props;

  return (
    <div
      id="history"
      className="flex w-full flex-col rounded-md bg-tertiary p-4 md:p-8"
    >
      <h2 className="font-lbv mb-4 text-[16px] font-[700] md:text-[20px] lg:text-[24px]">
        HISTORY
      </h2>

      <p className="mb-4 text-[14px] md:text-[16px] lg:text-[18px]">
        {history}
      </p>

      <h3 className="mb-2 text-[14px] font-[600] md:text-[16px] lg:text-[18px]">
        Features
      </h3>

      <ul className="flex list-outside list-disc flex-col gap-2 pl-8">
        {features.map((f) => (
          <li
            key={f.title}
            className="text-[12px] md:text-[14px] lg:text-[16px]"
          >
            <span className="font-[600]">{f.title}.</span> {f.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
