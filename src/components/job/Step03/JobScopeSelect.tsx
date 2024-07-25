"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { IoAppsOutline } from "react-icons/io5";

import { IJobScope } from "@/types/interfaces";
import useJobScopeStore from "@/zustand/JobScope";

function JobScopeItem(
  props: IJobScope & { selected: boolean; onClick: () => void }
) {
  const { name, description, selected, onClick } = props;

  return (
    <div
      className={clsx(
        "flex flex-1 flex-col items-center rounded-md border px-2.5 py-2.5 md:py-5",
        selected ? "bg-[#AFD275]/20" : ""
      )}
      onClick={onClick}
    >
      <IoAppsOutline className="mb-2 h-8 w-8" />
      <div className="mb-2 text-center text-[14px] font-[300] md:text-[16px] lg:text-[18px]">
        {name}
      </div>
      <div className="text-center text-[12px] font-[300] md:text-[13px] lg:text-[14px]">
        {description}
      </div>
    </div>
  );
}

interface Props {
  value: IJobScope | null;
  onChange: (value: IJobScope | null) => void;
}
export default function JobScopeSelect({ value, onChange }: Props) {
  const jobScopeStore = useJobScopeStore();
  const [selectedItem, setSelectedItem] = useState<IJobScope | null>(value);

  const initialize = async () => {
    await jobScopeStore.getListAction();
  };

  const handleSelect = (js: IJobScope) => () => {
    setSelectedItem(js);
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <div className="flex justify-between gap-5 md:gap-10">
      {jobScopeStore.jobScopes.map((js) => (
        <JobScopeItem
          key={js._id}
          selected={selectedItem?._id === js._id}
          onClick={handleSelect(js)}
          {...js}
        />
      ))}
    </div>
  );
}
