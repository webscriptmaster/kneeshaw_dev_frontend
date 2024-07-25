"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import numeral from "numeral";

import { IGame } from "@/types/interfaces";
import useGameListStore from "@/zustand/GameList";
import { ALL } from "@/utils/constants";

function GameCard(props: IGame) {
  const { _id: id, gamers, logos, title, description, thumbnail } = props;

  return (
    <div className="flex w-full flex-col gap-5 rounded-md bg-tertiary p-5 md:h-[600px] md:flex-row md:gap-10 md:p-10">
      <div className="flex flex-1 flex-col">
        <div className="mb-10 text-[16px] font-[600] md:text-[18px] lg:text-[20px]">
          {numeral(gamers).format("0.[0]a")} players
        </div>

        <div className="relative mb-10 min-h-20 flex-1">
          <div className="absolute bottom-0 left-0 right-0 top-0">
            <img
              className="h-full w-full rounded-md object-cover"
              src={`${process.env.NEXT_PUBLIC_API_SERVER}/${logos[0]}`}
              alt={title}
            />
          </div>
        </div>

        <div className="mb-10 text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
          {description}
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            className="rounded-md bg-[#AFD275] px-5 py-2.5"
            href={`/tocart/${id}`}
          >
            Get it now
          </Link>

          <Link
            className="rounded-md border border-[#AFD275] px-5 py-2.5"
            href={`/games/${id}`}
            target="_blank"
          >
            More
          </Link>
        </div>
      </div>

      <div className="md:flex-1">
        <img
          className="h-full w-full rounded-md object-cover"
          src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail}`}
          alt={title}
        />
      </div>
    </div>
  );
}

interface Props {
  categoryId: string;
  platformId: string;
}

export default function PopularGames({ categoryId, platformId }: Props) {
  const gameStore = useGameListStore();
  const [games, setGames] = useState<IGame[]>([]);

  const initialize = async () => {
    await gameStore.getListAction();
  };

  const filterGames = () => {
    let newGames = gameStore.games;

    if (categoryId !== ALL) {
      newGames = newGames.filter((g) => g.category === categoryId);
    }

    if (platformId !== ALL) {
      newGames = newGames.filter((g) => g.platform === platformId);
    }

    setGames(newGames);
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    filterGames();
  }, [gameStore.games, categoryId, platformId]);

  return (
    <div className="flex w-full flex-col">
      <div className="mb-5 flex h-1 w-[100px] items-center">
        <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
        <div className="h-0 w-[70px] border border-[#AFD276]" />
      </div>

      <h2 className="font-lbv mb-10 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        Popular Games
      </h2>

      <div className="flex flex-col gap-24">
        {games.map((g) => (
          <GameCard key={g._id} {...g} />
        ))}
      </div>
    </div>
  );
}
