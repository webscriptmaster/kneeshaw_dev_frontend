"use client";

import Link from "next/link";

import clsx from "clsx";
import { LuCheck, LuCircleDollarSign, LuShoppingCart } from "react-icons/lu";

import { ICart } from "@/types/interfaces";
import useCartStore from "@/zustand/Cart";
import { CART_STATUS } from "@/utils/constants";

function CartItem(props: ICart) {
  const { _id: id, game, status } = props;

  return (
    <div className="flex w-full flex-col rounded-md bg-tertiary p-4">
      <img
        className="mb-4 h-[300px] w-full rounded-md object-cover"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${game.thumbnail}`}
        alt={game.title}
      />

      <h2 className="font-lbv lg:text[20px] mb-4 flex-1 text-[16px] font-[700] md:text-[18px]">
        {game.title}
      </h2>

      <div
        className={clsx(
          "mb-5 flex items-center gap-2 text-[14px] font-[400]",
          status === CART_STATUS.PURCHASED && "text-[#AFD275]",
          status === CART_STATUS.IN_PROCESSING && "text-[#E7717D]"
        )}
      >
        {status === CART_STATUS.PURCHASED && <LuCheck />}
        {status === CART_STATUS.IN_PROCESSING && <LuCircleDollarSign />}
        {status === CART_STATUS.IN_CART && <LuShoppingCart />}

        <span>{status}</span>
      </div>

      <div className="flex justify-end">
        <Link
          href={`/cart/${id}`}
          className="h-auto rounded-[8px] border border-[#AFD275] bg-transparent px-10 py-2.5"
        >
          View details
        </Link>
      </div>
    </div>
  );
}

export default function MyCart() {
  const cartStore = useCartStore();

  return (
    <div className="grid w-full flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cartStore.cartItems.map((c) => (
        <CartItem key={c._id} {...c} />
      ))}
    </div>
  );
}
