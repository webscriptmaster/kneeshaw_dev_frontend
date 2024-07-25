"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import useJobListStore from "@/zustand/JobList";

import LocationModeSelect from "./LocationModeSelect";
import LocationRegionSelect from "./LocationRegionSelect";

import Stepper from "../components/Stepper";
import LeftScreen from "../components/LeftScreen";

export default function Step05() {
  const router = useRouter();
  const jobStore = useJobListStore();

  const [data, setData] = useState<any>({
    mode: jobStore.newJob?.location?.mode ?? "",
    region: jobStore.newJob?.location?.region ?? ""
  });
  const [error, setError] = useState<any>({
    mode: "",
    region: ""
  });

  const handleModeChange = (value: string) => {
    setData((prev: any) => ({ ...prev, mode: value }));
    setError((prev: any) => ({ ...prev, mode: "" }));
  };

  const handleRegionChange = (value: any) => {
    setData((prev: any) => ({ ...prev, region: value?.name }));
    setError((prev: any) => ({ ...prev, region: "" }));
  };

  const handleBackClick = () => {
    jobStore.decreaseStage();
  };

  const handleNextClick = () => {
    if (!data.mode) {
      setError((prev: any) => ({ ...prev, type: "Mode is required." }));
      return;
    }

    jobStore.updateNewJob({ location: data });
    jobStore.createAction(() => {
      router.push("/quote");
    });
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
            Select your preferred location
          </h1>

          <LocationModeSelect value={data.mode} onChange={handleModeChange} />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.mode}
          </p>

          <LocationRegionSelect
            mode={data.mode}
            value={data.region}
            onChange={handleRegionChange}
          />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.region}
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
            Complete
          </Button>
        </div>
      </div>
    </div>
  );
}
