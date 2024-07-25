"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { IJobExperience } from "@/types/interfaces";
import useJobExperienceStore from "@/zustand/JobExperience";

interface Props {
  value: IJobExperience | null;
  onChange: (value: IJobExperience | null) => void;
}
export default function JobExperienceSelect({ value, onChange }: Props) {
  const jobExperienceStore = useJobExperienceStore();
  const [selectedItem, setSelectedItem] = useState<IJobExperience | null>(
    value
  );

  const initialize = async () => {
    await jobExperienceStore.getListAction();
  };

  const handleSelect = (id: string) => {
    setSelectedItem(
      jobExperienceStore.jobExperiences.find((je) => je._id === id) ?? null
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
        What level of experience will it need?
      </p>

      <RadioGroup
        className="space-y-2"
        value={selectedItem?._id}
        onValueChange={handleSelect}
      >
        {jobExperienceStore.jobExperiences.map((je) => (
          <div key={je._id} className="flex flex-col">
            <div className="mb-1 flex items-center space-x-2">
              <RadioGroupItem value={je._id ?? ""} id={je._id} />
              <Label
                htmlFor={je._id}
                className={clsx(
                  "text-[14px] font-[400] md:text-[16px] lg:text-[18px]",
                  selectedItem?._id === je._id ? "text-[#AFD275]" : ""
                )}
              >
                {je.name}
              </Label>
            </div>
            <p className="pl-6 text-[12px] font-[400] brightness-50 md:text-[13px] lg:text-[14px]">
              {je.description}
            </p>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
