"use client";

import SideMenu from "@/components/_shared/SideMenu";

import MySettings from "./MySettings";

export default function Settings() {
  return (
    <section className="mb-24 mt-10 flex w-full gap-5 px-5 md:gap-10 md:px-10">
      <SideMenu />

      <MySettings />
    </section>
  );
}
