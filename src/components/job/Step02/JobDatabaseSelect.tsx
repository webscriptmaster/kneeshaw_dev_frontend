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

import { IJobDatabase } from "@/types/interfaces";
import useJobDatabaseStore from "@/zustand/JobDatabase";

interface Props {
  value: IJobDatabase[];
  onChange: (value: IJobDatabase[]) => void;
}

export default function JobDatabaseSelect({ value, onChange }: Props) {
  const jobDatabaseStore = useJobDatabaseStore();
  const [selectedItems, setSelectedItems] = useState(value);

  const initialize = async () => {
    await jobDatabaseStore.getListAction();
  };

  const handleSelect = (jd: IJobDatabase) => () => {
    setSelectedItems((prev) => {
      if (prev.find((p) => p._id === jd._id)) {
        return prev.filter((p) => p._id !== jd._id);
      }
      return [...prev, jd];
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
          Databases
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 py-2">
          {jobDatabaseStore.jobDatabases.map((jd) => (
            <div
              key={jd._id}
              className={clsx(
                "flex w-full cursor-pointer items-center justify-between rounded-md border p-2",
                selectedItems.find((v) => v._id === jd._id)
                  ? "border-[#AFD275]"
                  : ""
              )}
              onClick={handleSelect(jd)}
            >
              <span
                className={clsx(
                  "text-[12px] font-[300] md:text-[14px] lg:text-[16px]",
                  selectedItems.find((v) => v._id === jd._id)
                    ? "text-[#AFD275]"
                    : ""
                )}
              >
                {jd.name}
              </span>
              <LuCheck
                className={clsx(
                  "",
                  selectedItems.find((v) => v._id === jd._id)
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
