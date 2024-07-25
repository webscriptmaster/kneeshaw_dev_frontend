"use client";

import { useEffect } from "react";
import { IService } from "@/types/interfaces";
import useServiceStore from "@/zustand/Service";

function ServiceItem(prop: IService) {
  const { thumbnail, title, description } = prop;

  return (
    <div className="flex flex-col items-center rounded-xl bg-tertiary">
      <img
        className="h-[100px] w-[100px] translate-y-[-50%]"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail}`}
        alt={title}
      />

      <h3 className="font-lbv mb-2 text-center text-[16px] font-[400] md:text-[20px] lg:text-[24px]">
        {title}
      </h3>

      <p className="mb-10 px-2 text-center text-[14px] font-[400] brightness-50 md:px-4 md:text-[16px] lg:text-[18px]">
        {description}
      </p>
    </div>
  );
}

export default function Service() {
  const serviceStore = useServiceStore();

  const initialize = async () => {
    await serviceStore.getListAction();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="mb-40 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-10 md:gap-y-20 lg:grid-cols-4">
      {serviceStore.services.map((s) => (
        <ServiceItem key={s._id} {...s} />
      ))}
    </div>
  );
}
