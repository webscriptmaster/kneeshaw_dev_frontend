"use client";

import useJobListStore from "@/zustand/JobList";

import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step04 from "./Step04";
import Step05 from "./Step05";

export default function Job() {
  const jobStore = useJobListStore();

  return (
    <section className="flex w-full flex-1 flex-col p-4 lg:p-16">
      {jobStore.stage === 1 && <Step01 />}

      {jobStore.stage === 2 && <Step02 />}

      {jobStore.stage === 3 && <Step03 />}

      {jobStore.stage === 4 && <Step04 />}

      {jobStore.stage === 5 && <Step05 />}
    </section>
  );
}
