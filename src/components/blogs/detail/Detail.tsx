"use client";

import { IBlog } from "@/types/interfaces";

export default function Detail(props: IBlog) {
  const { game, details } = props;

  return (
    <div className="mb-[100px] flex flex-col">
      <h2 className="font-lbv mb-10 text-center text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        Details
      </h2>

      <p className="text-center text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
        {details}
      </p>

      {game && typeof game === "object" && game?.downloadLink && (
        <div className="mt-16 flex items-center justify-center">
          <a
            href={game?.downloadLink}
            target="_blank"
            className="rounded-[16px] border border-[#AFD275] px-4 py-2 text-center text-[16px] font-[700] text-[#AFD275]"
          >
            Download {game?.shortTitle ?? game?.title}
          </a>
        </div>
      )}
    </div>
  );
}
