"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Pagination } from "swiper/modules";

import useGameListStore from "@/zustand/GameList";
import { IGame } from "@/types/interfaces";

import "swiper/css";
import "swiper/css/pagination";

function GameSlide(prop: IGame) {
  const { _id: id, title = "", description, screenshots } = prop;

  return (
    <div className="grid h-[600px] grid-cols-1 gap-5 bg-tertiary p-5 lg:h-[500px] lg:grid-cols-2 lg:gap-10 lg:p-10">
      <div className="flex flex-col justify-between">
        <div className="mb-5 flex flex-col">
          <h2 className="font-lbv mb-5 text-[20px] font-[700] text-[#AFD275] md:text-[30px] lg:text-[40px]">
            {title}
          </h2>

          <p className="text-[18px] font-[400]">{description}</p>
        </div>

        <Link
          href={`/games/${id}`}
          target="_blank"
          className="w-40 rounded-[10px] bg-[#AFD275] px-8 py-4"
        >
          View More
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-5 lg:gap-10">
        <div className="relative col-span-2 row-span-2">
          <div className="absolute bottom-0 left-0 right-0 top-0">
            <img
              className="h-full w-full rounded-md object-cover"
              src={`${process.env.NEXT_PUBLIC_API_SERVER}/${screenshots[0]}`}
              alt={title}
            />
          </div>
        </div>

        <div className="relative col-span-1 row-span-1">
          <div className="absolute bottom-0 left-0 right-0 top-0">
            <img
              className="h-full w-full rounded-md object-cover"
              src={`${process.env.NEXT_PUBLIC_API_SERVER}/${screenshots[1]}`}
              alt={title}
            />
          </div>
        </div>

        <div className="relative col-span-1 row-span-1">
          <div className="absolute bottom-0 left-0 right-0 top-0">
            <img
              className="h-full w-full rounded-md object-cover"
              src={`${process.env.NEXT_PUBLIC_API_SERVER}/${screenshots[2]}`}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ThumbSlide(prop: IGame) {
  const { title = "", thumbnail } = prop;

  return (
    <div>
      <img
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail}`}
        alt={title}
      />
    </div>
  );
}

export default function Library() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const gameListStore = useGameListStore();

  const initialize = async () => {
    await gameListStore.getListAction();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="mb-[200px] flex w-full flex-col px-5 md:px-10">
      <h2 className="mb-[100px] text-center text-[20px] font-[400] md:text-[30px] lg:text-[40px]">
        Enjoy our library of games
      </h2>

      <Swiper
        className="mb-10 w-full rounded-md"
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
      >
        {gameListStore.games.map((g) => (
          <SwiperSlide key={g._id}>
            <GameSlide {...g} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="mb-10 w-full"
        modules={[Thumbs, Pagination]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={50}
        slidesPerView={8}
        pagination={{
          el: ".swiper-pagination-container",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 4
        }}
      >
        {gameListStore.games.map((g) => (
          <SwiperSlide key={`thumb-${g._id}`}>
            <ThumbSlide {...g} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center">
        <div className="swiper-pagination-container !translate-x-0" />
      </div>
    </div>
  );
}
