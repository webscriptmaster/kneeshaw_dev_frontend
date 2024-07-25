"use client";

import { useEffect, useState } from "react";

import LoadingOverlay from "@/components/_layout/LoadingOverlay";

import { IGame } from "@/types/interfaces";
import useGameListStore from "@/zustand/GameList";

import Banner from "./Banner";
import Title from "./Title";
import FactSheet from "./FactSheet";
import History from "./History";
import Videos from "./Videos";
import Screenshots from "./Screenshots";
import Logo from "./Logo";
import Credits from "./Credits";
import Sidebar from "./Sidebar";

interface Props {
  id: string;
}

export default function PressDetail({ id }: Props) {
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
          <Banner {...game} />
          <Title {...game} />

          <div className="flex gap-8 p-4 md:p-8">
            <Sidebar {...game} />

            <div className="flex flex-1 flex-col gap-4 md:gap-8">
              <FactSheet {...game} />
              <History {...game} />
              <Videos {...game} />
              <Screenshots {...game} />
              <Logo {...game} />
              <Credits {...game} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
