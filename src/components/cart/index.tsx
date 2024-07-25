"use client";

import SideMenu from "@/components/_shared/SideMenu";

import MyCart from "./MyCart";

export default function Cart() {
  return (
    <section className="mb-24 mt-10 flex w-full gap-5 px-5 md:gap-10 md:px-10">
      <SideMenu />

      <MyCart />
    </section>
  );
}
