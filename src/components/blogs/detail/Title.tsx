"use client";

import { IBlog } from "@/types/interfaces";

export default function Title(props: IBlog) {
  const { title, description, thumbnail } = props;

  return (
    <div className="mb-[100px] flex flex-col gap-10 md:flex-row">
      <div className="flex flex-1 flex-col">
        <h1 className="font-lbv mb-10 text-[64px] font-[400] md:text-[80px] lg:text-[96px]">
          {title}
        </h1>

        <p className="text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
          {description}
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center md:justify-end">
        <img
          src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail.large}`}
          alt={title}
        />
      </div>
    </div>
  );
}
