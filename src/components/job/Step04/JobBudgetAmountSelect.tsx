"use client";

import { useEffect, useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import useJobBudgetStore from "@/zustand/JobBudget";
import { JOB_BUDGET_MODE } from "@/utils/constants";

interface Props {
  mode: string;
  value: any;
  onChange: (value: any) => void;
}
export default function JobBudgetAmountSelect({
  mode,
  value,
  onChange
}: Props) {
  const jobBudgetStore = useJobBudgetStore();
  const [selectedItem, setSelectedItem] = useState<any>(value);

  const initialize = async () => {
    await jobBudgetStore.getAction();
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem((prev: any) => ({ ...prev, from: Number(e.target.value) }));
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem((prev: any) => ({ ...prev, to: Number(e.target.value) }));
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <div className="flex justify-between gap-5 md:gap-10">
      <div className="flex flex-1 flex-col">
        <Label className="mb-2 text-[12px] font-[500] md:text-[13px] lg:text-[14px]">
          From (${mode === JOB_BUDGET_MODE.HOURLY && "/hour"})
        </Label>
        <Input
          type="number"
          className="bg-transparent"
          value={selectedItem.from}
          min={
            mode === JOB_BUDGET_MODE.HOURLY
              ? jobBudgetStore.jobBudget?.rateMin ?? 0
              : jobBudgetStore.jobBudget?.fixedMin ?? 0
          }
          max={
            mode === JOB_BUDGET_MODE.HOURLY
              ? jobBudgetStore.jobBudget?.rateMax ?? 100
              : jobBudgetStore.jobBudget?.fixedMax ?? 100
          }
          onChange={handleFromChange}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <Label className="mb-2 text-[12px] font-[500] md:text-[13px] lg:text-[14px]">
          To (${mode === JOB_BUDGET_MODE.HOURLY && "/hour"})
        </Label>
        <Input
          type="number"
          className="bg-transparent"
          value={selectedItem.to}
          min={
            mode === JOB_BUDGET_MODE.HOURLY
              ? jobBudgetStore.jobBudget?.rateMin ?? 0
              : jobBudgetStore.jobBudget?.fixedMin ?? 0
          }
          max={
            mode === JOB_BUDGET_MODE.HOURLY
              ? jobBudgetStore.jobBudget?.rateMax ?? 100
              : jobBudgetStore.jobBudget?.fixedMax ?? 100
          }
          onChange={handleToChange}
        />
      </div>
    </div>
  );
}
