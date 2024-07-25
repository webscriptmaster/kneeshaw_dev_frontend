"use client";

import { useEffect, useState } from "react";

import numeral from "numeral";
import { toast } from "sonner";

import { IGame } from "@/types/interfaces";
import useGameListStore from "@/zustand/GameList";
import LoadingOverlay from "@/components/_layout/LoadingOverlay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCartStore from "@/zustand/Cart";

function GameCard(props: IGame) {
  const { _id: id, title, description, splash, price } = props;

  const cartStore = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.currentTarget.value));
  };

  const handleAddToCartClick = async () => {
    if (quantity < 1) {
      toast.error("Quantity should be greater than zero!");
      return;
    }

    await cartStore.createAction(
      {
        game: id,
        quantity,
        amount: price * quantity
      },
      async () => {
        await cartStore.getListAction();
      }
    );
  };

  return (
    <div className="flex w-full flex-col gap-5 rounded-md bg-tertiary p-5 md:flex-row md:gap-10 md:p-10">
      <div className="flex-1">
        <img
          className="h-full w-full rounded-md object-cover"
          src={`${process.env.NEXT_PUBLIC_API_SERVER}/${splash}`}
          alt={title}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h1 className="font-lbv lg:text[40px] mb-6 text-[20px] font-[700] md:text-[30px]">
          {title}
        </h1>
        <div className="mb-6 text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
          {description}
        </div>
        <div className="mb-6 flex justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-[700] text-[#AFD275] md:text-[16px] lg:text-[18px]">
              Price:
            </span>
            <span className="text-[14px] font-[700] md:text-[16px] lg:text-[18px]">
              $ {numeral(price).format("0.00")} USD
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-[700] text-[#AFD275] md:text-[16px] lg:text-[18px]">
              Total Price:
            </span>
            <span className="text-[14px] font-[700] md:text-[16px] lg:text-[18px]">
              $ {numeral(price * quantity).format("0.00")} USD
            </span>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-2">
          <span className="text-[14px] font-[700] text-[#AFD275] md:text-[16px] lg:text-[18px]">
            Quantity:
          </span>
          <Input
            className="w-[100px]"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            className="h-auto w-full rounded-md bg-[#AFD275] p-4 text-[18px] font-[600] hover:bg-[#AFD275]/80"
            onClick={handleAddToCartClick}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

interface Props {
  id: string;
}

export default function ToCartDetail({ id }: Props) {
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
    <section className="flex w-full flex-col px-5 md:px-10">
      {!game && <LoadingOverlay loading />}

      {game && <GameCard {...game} />}
    </section>
  );
}
