"use client";

import { IGame } from "@/types/interfaces";

export default function Banner(props: IGame) {
  const { banner, title } = props;

  return (
    <div className="max-h-[calc(100vh-135px)] w-full">
      <img
        className="h-full w-full object-cover"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${banner}`}
        alt={title}
      />
    </div>
  );
}
