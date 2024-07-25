"use client";

export default function Mission() {
  return (
    <div className="mb-40 flex w-full">
      <div className="relative hidden w-1/3 translate-x-[-40px] md:flex md:items-center">
        <img src="/images/about/game-of-life-01.png" alt="Game Of Life 01" />
        <img
          className="absolute top-[50%] translate-y-[-50%]"
          src="/images/about/game-of-life-02.png"
          alt="Game Of Life 02"
        />
      </div>

      <div className="flex w-full flex-col md:w-2/3 md:items-end">
        <div className="mb-5 flex h-1 w-[100px] items-center md:hidden">
          <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
          <div className="h-0 w-[70px] border border-[#AFD276]" />
        </div>

        <div className="mb-5 hidden h-1 w-[100px] items-center md:flex">
          <div className="h-0 w-[70px] border border-[#AFD276]" />
          <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
        </div>

        <h2 className="font-lbv mb-5 text-[20px] font-[700] md:text-right md:text-[30px] lg:text-[40px]">
          Our mission
        </h2>

        <p className="mb-5 text-xs sm:text-sm md:text-right md:text-base lg:text-lg xl:text-xl">
          One of our main focuses is on creating games that are accessible to
          players of all skill levels. We believe that games should be fun and
          engaging for everyone, regardless of their experience with gaming, and
          we work hard to ensure that our games are easy to pick up and play
          while still providing a challenging and rewarding experience.
          <br />
          <br />
          In addition to creating our own original games, we also work with
          publishers and other developers to help bring their games to market.
          Our team has extensive experience in all aspects of game development,
          from concept and design to programming and marketing, and we are
          committed to helping our clients achieve success in the highly
          competitive gaming industry.
        </p>
      </div>
    </div>
  );
}
