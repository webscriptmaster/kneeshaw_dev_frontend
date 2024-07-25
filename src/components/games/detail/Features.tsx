"use client";

import { IGame } from "@/types/interfaces";

interface FeatureCardProps {
  thumbnail: string;
  title: string;
  description?: string;
}
function FeatureCard({ thumbnail, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col rounded-md border p-4 md:p-8">
      <img
        className="mb-4 h-16 w-16 rounded-md object-cover"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail}`}
        alt={title}
      />

      <div className="font-lbv mb-8 text-[18px] font-[400] md:text-[24px] lg:text-[30px]">
        {title}
      </div>

      <p className="text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
        {description}
      </p>
    </div>
  );
}

export default function Features(props: IGame) {
  const { features } = props;

  return (
    <div className="mb-[100px] flex flex-col">
      <h2 className="font-lbv mb-5 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        Features
      </h2>

      <div className="mb-10 flex h-1 w-[100px] items-center">
        <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
        <div className="h-0 w-[70px] border border-[#AFD276]" />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  );
}
