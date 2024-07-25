"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { IBlog } from "@/types/interfaces";

interface ScreenshotSlideProps {
  screenshot: string;
}

function ScreenshotSlide({ screenshot }: ScreenshotSlideProps) {
  return (
    <div className="relative h-full flex-1 bg-tertiary">
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <img
          className="h-full w-full rounded-md object-cover"
          src={`${process.env.NEXT_PUBLIC_API_SERVER}/${screenshot}`}
          alt="Screenshot"
        />
      </div>
    </div>
  );
}

export default function MoreScreen(props: IBlog) {
  const { game, screenshots } = props;

  if (!game || typeof game === "string") return null;

  return (
    <div className="mb-[100px] flex flex-col px-5 md:px-10">
      <h2 className="font-lbv mb-10 text-center text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        More screens from {game?.shortTitle ?? game?.title}
      </h2>

      <Swiper
        className="mb-10 h-[600px] w-full rounded-md"
        modules={[Navigation]}
        navigation
        slidesPerView={1}
      >
        {screenshots.map((s) => (
          <SwiperSlide key={s}>
            <ScreenshotSlide screenshot={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
