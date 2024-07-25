"use client";

import { IGame } from "@/types/interfaces";

interface CharacterProps {
  thumbnail: string;
  title: string;
  description?: string;
}

function Character({ thumbnail, title, description }: CharacterProps) {
  return (
    <div className="flex w-[400px] flex-col">
      <div className="relative px-10">
        <img
          className="relative z-10 h-full w-full rounded-md object-cover"
          src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail}`}
          alt={title}
        />

        <div className="absolute bottom-0 left-0 right-0 top-[50%] z-0 rounded-t-md bg-background" />
      </div>

      <div className="flex flex-1 flex-col rounded-b-md bg-background px-10 py-5">
        <h3 className="font-lbv mb-5 text-center text-[20px] font-[400] md:text-[22px] lg:text-[24px]">
          {title}
        </h3>

        {description && (
          <p className="text-center text-[14px] font-[400] brightness-50 md:text-[16px] lg:text-[18px]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Overview(props: IGame) {
  const { overview } = props;

  return (
    <div className="mb-32 flex flex-col rounded-md bg-tertiary p-5 md:p-10">
      <div className="mb-5 flex h-1 w-[100px] items-center">
        <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
        <div className="h-0 w-[70px] border border-[#AFD276]" />
      </div>

      <h2 className="font-lbv mb-8 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        {overview.title}
      </h2>

      <p className="mb-10 text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
        {overview.description}
      </p>

      <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
        {overview.characters.map((oc) => (
          <Character key={oc.title} {...oc} />
        ))}
      </div>
    </div>
  );
}
