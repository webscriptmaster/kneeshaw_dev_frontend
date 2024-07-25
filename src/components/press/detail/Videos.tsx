"use client";

import ReactPlayer from "react-player";
import { IGame } from "@/types/interfaces";

export default function Videos(props: IGame) {
  const { videos } = props;

  return (
    <div
      id="videos"
      className="flex w-full flex-col rounded-md bg-tertiary p-4 md:p-8"
    >
      <h2 className="font-lbv mb-4 text-[16px] font-[700] md:text-[20px] lg:text-[24px]">
        VIDEOS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((v) => (
          <div key={v.title} className="flex flex-col">
            <p className="mb-2 text-[12px] md:text-[14px] lg:text-[16px]">
              {v.title}
            </p>

            <ReactPlayer
              light={
                <img
                  className="h-full w-full rounded-md object-cover"
                  src={`${process.env.NEXT_PUBLIC_API_SERVER}/${v.thumbnail}`}
                  alt="Video Thumbnail"
                />
              }
              url={v.src}
              controls
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
