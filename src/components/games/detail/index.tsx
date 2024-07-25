"use client";

import { useEffect, useState } from "react";

import LoadingOverlay from "@/components/_layout/LoadingOverlay";

import { IGame } from "@/types/interfaces";
import useGameListStore from "@/zustand/GameList";

import Title from "./Title";
import Overview from "./Overview";
import Features from "./Features";
import Story from "./Story";
import Video from "./Video";
import Credits from "./Credits";

interface Props {
  id: string;
}

export default function GameDetail({ id }: Props) {
  const gameStore = useGameListStore();
  const [game, setGame] = useState<IGame | null>(null);

  const initialize = async () => {
    const newGame = await gameStore.getAction(id);
    setGame(newGame);
  };

  useEffect(() => {
    initialize();
  }, [id]);

  return (
    <>
      {!game && <LoadingOverlay loading />}

      {game && (
        <>
          <Title {...game} />
          <Overview {...game} />
          <Features {...game} />
          <Story {...game} />
          <Video {...game} />
          <Credits {...game} />
        </>
      )}
    </>
  );
}
