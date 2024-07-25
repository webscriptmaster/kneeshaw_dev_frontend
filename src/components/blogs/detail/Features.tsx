"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { IBlog } from "@/types/interfaces";

import "swiper/css";
import "swiper/css/navigation";

interface FeatureSlideProps {
  title: string;
  thumbnail: string;
  items: string[];
}

function FeatureSlide({ title, thumbnail, items }: FeatureSlideProps) {
  return (
    <div className="flex h-full flex-col bg-tertiary p-5 md:p-10">
      <div className="mb-10 flex flex-col">
        <h2 className="font-lbv mb-5 text-center text-[20px] font-[700] md:text-[22px] lg:text-[24px]">
          {title}
        </h2>
        <div className="border-b" />
      </div>

      <div className="flex flex-1 flex-col gap-5 md:flex-row md:gap-10">
        <div className="relative flex-1">
          <div className="absolute bottom-0 left-0 right-0 top-0">
            <img
              className="h-full w-full rounded-md object-cover"
              src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail}`}
              alt={title}
            />
          </div>
        </div>

        <ol className="flex flex-1 list-inside list-decimal flex-col gap-2.5">
          {items.map((i) => (
            <li
              key={i}
              className="text-[16px] font-[400] md:text-[18px] lg:text-[20px]"
            >
              {i}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function Features(props: IBlog) {
  const { features } = props;

  return (
    <div className="mb-[100px] flex flex-col px-5 md:px-10">
      <Swiper
        className="mb-10 h-[400px] w-full rounded-md"
        modules={[Navigation]}
        navigation
        slidesPerView={1}
      >
        {features.map((f) => (
          <SwiperSlide key={f.title}>
            <FeatureSlide {...f} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
