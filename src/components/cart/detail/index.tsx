"use client";

import { useEffect, useState } from "react";

import { ICart } from "@/types/interfaces";
import useCartStore from "@/zustand/Cart";
import LoadingOverlay from "@/components/_layout/LoadingOverlay";
import Header from "./Header";
import Overview from "./Overview";
import Messages from "./Messages";
import Details from "./Details";
import Billing from "./Billing";

interface Props {
  id: string;
}

export default function CartDetail({ id }: Props) {
  const cartStore = useCartStore();

  const [cartItem, setCartItem] = useState<ICart | null>(null);

  const initialize = async () => {
    const newGame = await cartStore.getAction(id);
    setCartItem(newGame);
  };

  useEffect(() => {
    initialize();
  }, [id]);

  return (
    <>
      {!cartItem && <LoadingOverlay loading />}

      {cartItem && (
        <>
          <Header {...cartItem} />
          <Overview {...cartItem} />
          <Messages {...cartItem} />
          <Details {...cartItem} />
          <Billing {...cartItem} />
        </>
      )}
    </>
  );
}
