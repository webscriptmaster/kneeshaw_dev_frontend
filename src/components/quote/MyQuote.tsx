"use client";

import { useEffect } from "react";

import useJobListStore from "@/zustand/JobList";

import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function MyQuote() {
  const jobStore = useJobListStore();

  useEffect(() => {
    jobStore.getListAction();
  }, []);

  return (
    <div className="flex flex-1 flex-col rounded-md bg-tertiary p-5 md:p-10">
      <h1 className="mb-4 text-[16px] font-[500] md:text-[18px] lg:text-[20px]">
        Quote
      </h1>

      <p className="mb-10 text-[12px] font-[400] md:text-[14px] lg:text-[16px]">
        Here you will discover the exciting array of jobs you have submitted.
      </p>

      <div className="w-full">
        <DataTable columns={columns} data={jobStore.jobs ?? []} />
      </div>
    </div>
  );
}
