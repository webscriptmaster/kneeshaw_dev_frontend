"use client";

import clsx from "clsx";

import { THEME_MODE } from "@/utils/constants";
import useThemeStore from "@/zustand/Theme";

interface CardProps {
  img: string;
  title: string;
  description: string;
}

function Card({ img, title, description }: CardProps) {
  const themeStore = useThemeStore();

  return (
    <div className="flex w-72 flex-col items-center">
      <img
        className={clsx(
          "mb-8 h-[68px] w-[68px]",
          themeStore.mode === THEME_MODE.DARK
            ? "brightness-100"
            : "brightness-0"
        )}
        src={img}
        alt={title}
      />

      <h3 className="font-lbv mb-8 text-center text-[18px] font-[400] md:text-[24px] lg:text-[30px]">
        {title}
      </h3>

      <p className="font[400] text-center text-[16px] md:text-[18px] lg:text-[20px]">
        {description}
      </p>
    </div>
  );
}

export default function Choose() {
  const chooseItems = [
    {
      img: "images/about/choose-innovation.png",
      title: "Innovation",
      description:
        "Our company uses innovative game development techniques and technologies."
    },
    {
      img: "images/about/choose-quality.png",
      title: "Quality",
      description:
        "We prioritize quality in every aspect of game development, from art to programming to testing "
    },
    {
      img: "images/about/choose-expertise.png",
      title: "Expertise",
      description: "5+ years  experience in game development industry."
    },
    {
      img: "images/about/choose-support.png",
      title: "Support",
      description:
        "After the game is launched any updates, bugs, or marketing support, you can rely on our team."
    },
    {
      img: "images/about/choose-collaboration.png",
      title: "Collaboration",
      description:
        "We’re committed to collaborating with our clients to ensure they get the game they want."
    }
  ];

  return (
    <div className="mb-40 flex flex-col">
      <h2 className="font-lbv mb-5 text-center text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        Why choose us in your game development?
      </h2>

      <div className="mb-32 flex h-1 w-full items-center justify-center">
        <div className="h-0 w-[35px] border border-[#AFD276]" />
        <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
        <div className="h-0 w-[35px] border border-[#AFD276]" />
      </div>

      <div className="flex flex-wrap justify-center gap-5 md:gap-10">
        {chooseItems.map((c) => (
          <Card key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}
