"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { LuClock3 } from "react-icons/lu";
import { RiCurrencyLine } from "react-icons/ri";

import useJobBudgetStore from "@/zustand/JobBudget";
import { JOB_BUDGET_MODE } from "@/utils/constants";

interface Props {
  value: string;
  onChange: (value: string) => void;
}
export default function JobBudgetModeSelect({ value, onChange }: Props) {
  const jobBudgetStore = useJobBudgetStore();
  const [selectedItem, setSelectedItem] = useState(value);

  const initialize = async () => {
    await jobBudgetStore.getAction();
  };

  const handleModeChange = (mode: string) => () => {
    setSelectedItem(mode);
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <div className="flex justify-between gap-5 md:gap-10">
      <div
        className={clsx(
          "flex flex-1 flex-col items-center rounded-md border p-5",
          selectedItem === JOB_BUDGET_MODE.HOURLY ? "bg-[#AFD275]/20" : ""
        )}
        onClick={handleModeChange(JOB_BUDGET_MODE.HOURLY)}
      >
        <LuClock3 className="mb-2 h-6 w-6" />
        <p className="text-[14px] font-[300] md:text-[16px] lg:text-[18px]">
          Hourly Rate
        </p>
      </div>

      <div
        className={clsx(
          "flex flex-1 flex-col items-center rounded-md border p-5",
          selectedItem === JOB_BUDGET_MODE.FIXED ? "bg-[#AFD275]/20" : ""
        )}
        onClick={handleModeChange(JOB_BUDGET_MODE.FIXED)}
      >
        <RiCurrencyLine className="mb-2 h-6 w-6" />
        <p className="text-[14px] font-[300] md:text-[16px] lg:text-[18px]">
          Project Budget
        </p>
      </div>
    </div>
  );
}
