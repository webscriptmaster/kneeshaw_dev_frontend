"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { IJobDatabase, IJobGodot, IJobSkill } from "@/types/interfaces";
import useJobListStore from "@/zustand/JobList";

import JobSkillSelect from "./JobSkillSelect";
import JobGodotSelect from "./JobGodotSelect";
import JobDatabaseSelect from "./JobDatabaseSelect";

import Stepper from "../components/Stepper";
import LeftScreen from "../components/LeftScreen";

export default function Step02() {
  const jobStore = useJobListStore();

  const [data, setData] = useState<any>({
    skills: jobStore.newJob?.skills ?? [],
    godots: jobStore.newJob?.godots ?? [],
    databases: jobStore.newJob?.databases ?? []
  });
  const [error, setError] = useState<any>({
    skills: "",
    godots: "",
    databases: ""
  });

  const handleSkillChange = (value: IJobSkill[]) => {
    setData((prev: any) => ({ ...prev, skills: value }));
    setError((prev: any) => ({ ...prev, skills: "" }));
  };

  const handleGodotChange = (value: IJobGodot[]) => {
    setData((prev: any) => ({ ...prev, godots: value }));
    setError((prev: any) => ({ ...prev, godots: "" }));
  };

  const handleDatabaseChange = (value: IJobDatabase[]) => {
    setData((prev: any) => ({ ...prev, databases: value }));
    setError((prev: any) => ({ ...prev, databases: "" }));
  };

  const handleBackClick = () => {
    jobStore.decreaseStage();
  };

  const handleNextClick = () => {
    if (!data.skills.length) {
      setError((prev: any) => ({ ...prev, skills: "Skills is required." }));
      return;
    }

    if (!data.godots.length) {
      setError((prev: any) => ({ ...prev, godots: "Godots is required." }));
      return;
    }

    if (!data.databases.length) {
      setError((prev: any) => ({
        ...prev,
        databases: "Databases is required."
      }));
      return;
    }

    jobStore.updateNewJob(data);
    jobStore.increaseStage();
  };

  return (
    <div className="flex w-full flex-1 rounded-md bg-tertiary">
      <LeftScreen className="hidden w-2/5 rounded-l-md lg:block" />

      <div className="flex flex-1 flex-col p-4 lg:p-8">
        <div className="flex flex-1 flex-col">
          <div className="mb-8 self-end">
            <Stepper active={jobStore.stage} total={jobStore.maxStage} />
          </div>

          <p className="mb-3 text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
            Show us your skills
          </p>

          <h1 className="font-lbv mb-8 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
            What are the main skills required for your work?
          </h1>

          <Label className="mb-3 text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
            Search or add up to 10 skills
          </Label>

          <JobSkillSelect value={data.skills} onChange={handleSkillChange} />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.skills}
          </p>

          <JobGodotSelect value={data.godots} onChange={handleGodotChange} />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.godots}
          </p>

          <JobDatabaseSelect
            value={data.databases}
            onChange={handleDatabaseChange}
          />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.databases}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="h-auto border-[#AFD275] bg-transparent px-10 py-2.5"
            onClick={handleBackClick}
          >
            Back
          </Button>

          <Button
            className="h-auto bg-[#AFD275] px-10 py-2.5 hover:bg-[#AFD275]/80"
            onClick={handleNextClick}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
