"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import useJobListStore from "@/zustand/JobList";

import JobBudgetModeSelect from "./JobBudgetModeSelect";
import JobBudgetAmountSelect from "./JobBudgetAmountSelect";

import Stepper from "../components/Stepper";
import LeftScreen from "../components/LeftScreen";

export default function Step04() {
  const jobStore = useJobListStore();

  const [data, setData] = useState<any>({
    mode: jobStore.newJob?.budget?.mode ?? "",
    from: jobStore.newJob?.budget?.from ?? 0,
    to: jobStore.newJob?.budget?.to ?? 0
  });
  const [error, setError] = useState<any>({
    mode: "",
    from: "",
    to: ""
  });

  const handleBudgetModeChange = (value: string) => {
    setData((prev: any) => ({ ...prev, mode: value }));
    setError((prev: any) => ({ ...prev, mode: "" }));
  };

  const handleBudgetAmountChange = (value: any) => {
    setData((prev: any) => ({ ...prev, ...value }));
    setError((prev: any) => ({ ...prev, from: "", to: "" }));
  };

  const handleBackClick = () => {
    jobStore.decreaseStage();
  };

  const handleNextClick = () => {
    if (!data.mode) {
      setError((prev: any) => ({ ...prev, mode: "Mode is required." }));
      return;
    }

    if (!data.from) {
      setError((prev: any) => ({ ...prev, from: "From is required." }));
      return;
    }

    if (!data.to) {
      setError((prev: any) => ({ ...prev, to: "To is required." }));
      return;
    }

    jobStore.updateNewJob({ budget: data });
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
            More Details
          </p>

          <h1 className="font-lbv mb-8 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
            Tell us about your budget
          </h1>

          <JobBudgetModeSelect
            value={data.mode}
            onChange={handleBudgetModeChange}
          />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.mode}
          </p>

          <JobBudgetAmountSelect
            mode={data.mode}
            value={{ from: data.from, to: data.to }}
            onChange={handleBudgetAmountChange}
          />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.from}
            {error.to}
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
