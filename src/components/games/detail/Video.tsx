"use client";

import dynamic from "next/dynamic";

import { IGame } from "@/types/interfaces";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false
});

export default function Video(props: IGame) {
  const { videos } = props;

  return (
    <div className="mb-[100px] w-full">
      {videos.map((v) => (
        <ReactPlayer
          key={v.title}
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
      ))}
    </div>
  );
}
