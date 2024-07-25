"use client";

import { useEffect } from "react";

import { IService } from "@/types/interfaces";
import useServiceStore from "@/zustand/Service";

function ServiceItem(prop: IService) {
  const { thumbnail, title } = prop;

  return (
    <div className="flex flex-col items-center rounded-[40px] bg-tertiary p-5 shadow-[0px_0px_18px_-4px_#00000026]">
      <img
        className="mb-6 h-[70px] w-[70px] object-cover"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${thumbnail}`}
        alt={title}
      />

      <p className="text-center text-[18px] font-[500]">{title}</p>
    </div>
  );
}

export default function Services() {
  const serviceStore = useServiceStore();

  const initialize = async () => {
    await serviceStore.getListAction();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="mb-[150px] flex flex-col">
      <h2 className="mb-[100px] text-center text-[20px] font-[400] md:text-[30px] lg:text-[40px]">
        Meet With Our Services
      </h2>

      <div className="grid w-full grid-cols-1 gap-5 px-5 md:grid-cols-2 md:gap-10 md:px-10 lg:grid-cols-4">
        {serviceStore.services.map((s) => (
          <ServiceItem key={s._id} {...s} />
        ))}
      </div>
    </div>
  );
}
