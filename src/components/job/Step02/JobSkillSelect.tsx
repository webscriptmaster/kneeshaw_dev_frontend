"use client";

import { useEffect } from "react";

import Select from "react-select";

import useJobSkillStore from "@/zustand/JobSkill";
import { IJobSkill } from "@/types/interfaces";

interface Props {
  value: IJobSkill[];
  onChange: (value: IJobSkill[]) => void;
}

export default function JobSkillSelect({ value, onChange }: Props) {
  const jobSkillStore = useJobSkillStore();

  const initialize = async () => {
    await jobSkillStore.getListAction();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <Select
      autoFocus
      hideSelectedOptions
      isSearchable
      isMulti
      options={jobSkillStore.jobSkills}
      getOptionLabel={(option: IJobSkill) => option.name}
      getOptionValue={(option: IJobSkill) => option._id ?? ""}
      classNames={{
        control: () => "!bg-transparent",
        input: () => "!text-primary",
        menuList: () => "!bg-tertiary",
        option: (state) => (state.isFocused ? "!bg-accent" : "!bg-tertiary"),
        multiValue: () =>
          "!bg-transparent !border !border-[#AFD275] !rounded-md !text-[#AFD275]",
        multiValueLabel: () => "!text-[#AFD275]"
      }}
      value={value}
      onChange={(newValue) => onChange([...newValue])}
    />
  );
}
