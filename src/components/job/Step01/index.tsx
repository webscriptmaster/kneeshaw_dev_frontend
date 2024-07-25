"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useJobListStore from "@/zustand/JobList";

import Stepper from "../components/Stepper";
import LeftScreen from "../components/LeftScreen";

export default function Step01() {
  const jobStore = useJobListStore();

  const [data, setData] = useState<any>({
    title: jobStore.newJob?.title ?? ""
  });
  const [error, setError] = useState<any>({
    title: ""
  });

  const handleFieldChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev: any) => ({ ...prev, [field]: e.target.value }));
      setError((prev: any) => ({ ...prev, [field]: "" }));
    };

  const handleNextClick = () => {
    if (!data.title) {
      setError((prev: any) => ({ ...prev, title: "Title is required." }));
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
            Unleashing Your Freelancing Potential
          </p>

          <h1 className="font-lbv mb-8 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
            Let’s start with a title
          </h1>

          <Label className="mb-3 text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
            Write a title for your job post
          </Label>

          <Input
            className="bg-transparent"
            value={data.title}
            onChange={handleFieldChange("title")}
          />
          <p className="mb-6 mt-1 text-sm font-medium text-destructive brightness-150">
            {error.title}
          </p>

          <p className="mb-1 text-[14px] font-[300] md:text-[16px] lg:text-[18px]">
            Here are some examples of work titles that freelancers commonly use
            on freelance websites:
          </p>

          <ul className="mb-3 list-inside list-disc text-[14px] font-[300] md:text-[16px] lg:text-[18px]">
            <li>Web Developer</li>
            <li>Graphic Designer</li>
            <li>Content Writer</li>
            <li>Social Media Manager</li>
            <li>SEO Specialist </li>
          </ul>

          <p className="mb-8 text-[14px] font-[300] md:text-[16px] lg:text-[18px]">
            Remember, these are just examples, and you can customize them based
            on your specific skills and expertise. It's important to choose a
            title that accurately represents your capabilities and attracts
            potential clients in your desired field.
          </p>
        </div>

        <div className="self-end">
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
