"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { IJobPeriod } from "@/types/interfaces";
import useJobPeriodStore from "@/zustand/JobPeriod";

interface Props {
  value: IJobPeriod | null;
  onChange: (value: IJobPeriod | null) => void;
}
export default function JobPeriodSelect({ value, onChange }: Props) {
  const jobPeriodStore = useJobPeriodStore();
  const [selectedItem, setSelectedItem] = useState<IJobPeriod | null>(value);

  const initialize = async () => {
    await jobPeriodStore.getListAction();
  };

  const handleSelect = (id: string) => {
    setSelectedItem(
      jobPeriodStore.jobPeriods.find((jp) => jp._id === id) ?? null
    );
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <div className="flex flex-col">
      <p className="mb-6 text-[14px] font-[500] md:text-[16px] lg:text-[18px]">
        How long it will take?
      </p>

      <RadioGroup
        className="space-y-2"
        value={selectedItem?._id}
        onValueChange={handleSelect}
      >
        {jobPeriodStore.jobPeriods.map((jp) => (
          <div key={jp._id} className="flex items-center space-x-2">
            <RadioGroupItem value={jp._id ?? ""} id={jp._id} />
            <Label
              htmlFor={jp._id}
              className={clsx(
                "text-[14px] font-[400] md:text-[16px] lg:text-[18px]",
                selectedItem?._id === jp._id ? "text-[#AFD275]" : ""
              )}
            >
              {jp.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
