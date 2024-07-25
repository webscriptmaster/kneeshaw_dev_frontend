"use client";

export default function Introduction() {
  return (
    <div className="mb-[150px] flex flex-col">
      <div className="mb-16 flex w-full flex-col self-start md:w-3/4">
        <div className="mb-8 w-full border border-[#E7717D]" />
        <p className="px-4 text-xs sm:text-sm md:px-10 md:text-base lg:text-lg xl:text-xl">
          Welcome to Kneeshaw Developments, the premier gaming development
          website where you'll find the best games for gamers of all ages. Our
          passion for gaming is evident in every game we create, and we are
          dedicated to providing our players with immersive and engaging
          experiences that will keep them coming back for more.
        </p>
        <div className="mt-8 w-1/2 border border-[#E7717D]" />
      </div>

      <div className="flex w-full flex-col self-end md:w-3/4">
        <div className="mb-8 w-full border border-[#E7717D]" />
        <p className="px-4 text-xs sm:text-sm md:px-10 md:text-right md:text-base lg:text-lg xl:text-xl">
          Our game library features a wide range of games, from action-packed
          shooters and intense RPGs to casual puzzle games and family-friendly
          adventures. We have games for every platform, including PC, mobile,
          and console, and our developers are always working on new titles to
          keep our players entertained.
        </p>
        <div className="mt-8 w-1/2 self-end border border-[#E7717D]" />
      </div>
    </div>
  );
}
