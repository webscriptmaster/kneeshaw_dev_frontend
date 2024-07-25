"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { LuGlobe } from "react-icons/lu";
import { MdOutlineSouthAmerica } from "react-icons/md";
import { JOB_LOCATION_MODE } from "@/utils/constants";

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export default function LocationModeSelect({ value, onChange }: Props) {
  const [selectedItem, setSelectedItem] = useState(value);

  const handleModeChange = (mode: string) => () => {
    setSelectedItem(mode);
  };

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <div className="flex justify-between gap-5 md:gap-10">
      <div
        className={clsx(
          "flex flex-1 flex-col items-center rounded-md border p-5",
          selectedItem === "worldwide" ? "bg-[#AFD275]/20" : ""
        )}
        onClick={handleModeChange(JOB_LOCATION_MODE.WORLDWIDE)}
      >
        <LuGlobe className="mb-2 h-6 w-6" />
        <p className="text-[14px] font-[300] md:text-[16px] lg:text-[18px]">
          Worldwide
        </p>
      </div>

      <div
        className={clsx(
          "flex flex-1 flex-col items-center rounded-md border p-5",
          selectedItem === "us" ? "bg-[#AFD275]/20" : ""
        )}
        onClick={handleModeChange(JOB_LOCATION_MODE.US)}
      >
        <MdOutlineSouthAmerica className="mb-2 h-6 w-6" />
        <p className="text-[14px] font-[300] md:text-[16px] lg:text-[18px]">
          U.S. only
        </p>
      </div>
    </div>
  );
}
