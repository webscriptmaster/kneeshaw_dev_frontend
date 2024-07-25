"use client";

import { Button } from "@/components/ui/button";

export default function Introduction() {
  return (
    <div className="mb-[100px] flex flex-col">
      <div className="mb-16 flex w-full flex-col self-start px-5 md:w-3/4 md:px-10">
        <div className="mb-8 flex h-1 w-[100px] items-center">
          <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
          <div className="h-0 w-[70px] border border-[#AFD276]" />
        </div>

        <h2 className="mb-5 text-[20px] text-[#AFD275] md:text-[30px] lg:text-[40px]">
          Meet Kneeshaw
        </h2>

        <p className="mb-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Kneeshaw Developments is a dynamic and innovative gaming development
          website that is dedicated to providing its clients with top-quality
          gaming solutions. With a team of highly skilled and experienced
          developers, Kneeshaw Developments is well-positioned to provide
          clients with a wide range of services, from game design and
          development to testing, publishing, and marketing. At Kneeshaw
          Developments, we understand that the gaming industry is constantly
          evolving, and we work tirelessly to stay up-to-date with the latest
          trends and technologies. Our team is made up of experts in game
          development, art, design, programming, and marketing, who are
          passionate about creating engaging and immersive gaming experiences
          for players of all ages.
        </p>

        <div>
          <Button variant="outline" className="border-[#AFD275] text-[#AFD275]">
            Read More
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col self-end px-5 md:w-3/4 md:px-10">
        <div className="mb-8 flex h-1 w-[100px] items-center md:hidden">
          <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
          <div className="h-0 w-[70px] border border-[#AFD276]" />
        </div>

        <div className="mb-8 hidden h-1 w-[100px] items-center md:flex md:self-end">
          <div className="h-0 w-[70px] border border-[#AFD276]" />
          <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
        </div>

        <h2 className="mb-5 text-[#AFD275] md:text-right md:text-[30px] lg:text-[40px]">
          Agency Services
        </h2>

        <p className="mb-5 text-xs sm:text-sm md:text-right md:text-base lg:text-lg xl:text-xl">
          Are you looking for a community of gamers and developers to
          collaborate with on your next gaming project? Look no further than
          Kneeshaw Developments! Our community is made up of passionate gamers
          and developers who share the same goal of creating the next big thing
          in gaming. With access to the latest tools and resources, you'll have
          everything you need to bring your game ideas to life. Join us today
          and let's work together to make gaming history!
        </p>

        <div className="self-start md:self-end">
          <Button variant="outline" className="border-[#AFD275] text-[#AFD275]">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
