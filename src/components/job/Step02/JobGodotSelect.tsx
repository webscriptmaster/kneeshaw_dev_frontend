"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { LuCheck } from "react-icons/lu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import { IJobGodot } from "@/types/interfaces";
import useJobGodotStore from "@/zustand/JobGodot";

interface Props {
  value: IJobGodot[];
  onChange: (value: IJobGodot[]) => void;
}

export default function JobGodotSelect({ value, onChange }: Props) {
  const jobGodotStore = useJobGodotStore();
  const [selectedItems, setSelectedItems] = useState(value);

  const initialize = async () => {
    await jobGodotStore.getListAction();
  };

  const handleSelect = (jg: IJobGodot) => () => {
    setSelectedItems((prev) => {
      if (prev.find((p) => p._id === jg._id)) {
        return prev.filter((p) => p._id !== jg._id);
      }
      return [...prev, jg];
    });
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    onChange(selectedItems);
  }, [selectedItems]);

  return (
    <Accordion type="single" collapsible className="w-full border-none">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="border-b pb-1 text-[14px] font-[300] !no-underline md:text-[16px] lg:text-[18px]">
          Godot
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 py-2">
          {jobGodotStore.jobGodots.map((jg) => (
            <div
              key={jg._id}
              className={clsx(
                "flex w-full cursor-pointer items-center justify-between rounded-md border p-2",
                selectedItems.find((v) => v._id === jg._id)
                  ? "border-[#AFD275]"
                  : ""
              )}
              onClick={handleSelect(jg)}
            >
              <span
                className={clsx(
                  "text-[12px] font-[300] md:text-[14px] lg:text-[16px]",
                  selectedItems.find((v) => v._id === jg._id)
                    ? "text-[#AFD275]"
                    : ""
                )}
              >
                {jg.name}
              </span>
              <LuCheck
                className={clsx(
                  "",
                  selectedItems.find((v) => v._id === jg._id)
                    ? "block text-[#AFD275]"
                    : "hidden"
                )}
              />
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
