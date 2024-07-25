"use client";

export default function Creating() {
  return (
    <div className="mb-40 flex w-full">
      <div className="flex w-full flex-col self-start md:w-2/3">
        <div className="mb-5 flex h-1 w-[100px] items-center">
          <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
          <div className="h-0 w-[70px] border border-[#AFD276]" />
        </div>

        <h2 className="font-lbv mb-5 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
          What we're creating
        </h2>

        <p className="mb-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Kneeshaw Game Development is a leading game development company that
          specializes in creating immersive and engaging gaming experiences for
          players around the world. Based in the United Kingdom, Kneeshaw Game
          Development is known for its passion for gaming and its commitment to
          innovation, which has led to the creation of some of the most popular
          and successful games on the market.
        </p>
      </div>

      <div className="hidden md:flex md:w-1/3 md:items-center md:justify-center">
        <img src="/images/about/game-launcher.png" alt="Game Launcher" />
      </div>
    </div>
  );
}
