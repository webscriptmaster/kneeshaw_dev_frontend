"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import useJobListStore from "@/zustand/JobList";

import { IJobExperience, IJobPeriod, IJobScope } from "@/types/interfaces";

import JobScopeSelect from "./JobScopeSelect";
import JobPeriodSelect from "./JobPeriodSelect";
import JobExperienceSelect from "./JobExperienceSelect";

import Stepper from "../components/Stepper";
import LeftScreen from "../components/LeftScreen";

export default function Step03() {
  const jobStore = useJobListStore();

  const [data, setData] = useState<any>({
    scope: jobStore.newJob?.scope ?? null,
    period: jobStore.newJob?.period ?? null,
    experience: jobStore.newJob?.experience ?? null
  });
  const [error, setError] = useState<any>({
    scope: "",
    period: "",
    experience: ""
  });

  const handleScopeChange = (value: IJobScope | null) => {
    setData((prev: any) => ({ ...prev, scope: value }));
    setError((prev: any) => ({ ...prev, scope: "" }));
  };

  const handlePeriodChange = (value: IJobPeriod | null) => {
    setData((prev: any) => ({ ...prev, period: value }));
    setError((prev: any) => ({ ...prev, period: "" }));
  };

  const handleExperienceChange = (value: IJobExperience | null) => {
    setData((prev: any) => ({ ...prev, experience: value }));
    setError((prev: any) => ({ ...prev, experience: "" }));
  };

  const handleBackClick = () => {
    jobStore.decreaseStage();
  };

  const handleNextClick = () => {
    if (!data.scope) {
      setError((prev: any) => ({ ...prev, scope: "Scope is required." }));
      return;
    }

    if (!data.period) {
      setError((prev: any) => ({ ...prev, period: "Period is required." }));
      return;
    }

    if (!data.experience) {
      setError((prev: any) => ({
        ...prev,
        experience: "Experience is required."
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
            Scope of work
          </p>

          <h1 className="font-lbv mb-8 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
            Estimate the scope of your work
          </h1>

          <JobScopeSelect value={data.scope} onChange={handleScopeChange} />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.scope}
          </p>

          <JobPeriodSelect value={data.period} onChange={handlePeriodChange} />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.period}
          </p>

          <JobExperienceSelect
            value={data.experience}
            onChange={handleExperienceChange}
          />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.experience}
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
