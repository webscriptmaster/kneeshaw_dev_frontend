"use client";

import { useEffect, useState } from "react";

import { Country, State } from "country-state-city";
import Select from "react-select";

import { Label } from "@/components/ui/label";
import { JOB_LOCATION_MODE } from "@/utils/constants";

interface Props {
  mode: string;
  value: string;
  onChange: (value: string) => void;
}
export default function LocationRegionSelect({ mode, value, onChange }: Props) {
  const [selectedItem, setSelectedItem] = useState(value);
  const [regions, setRegions] = useState<any>([]);

  const handleRegionChange = (newValue: any) => {
    setSelectedItem(newValue);
  };

  useEffect(() => {
    if (mode === JOB_LOCATION_MODE.WORLDWIDE) {
      setRegions(Country.getAllCountries());
    }

    if (mode === JOB_LOCATION_MODE.US) {
      setRegions(State.getAllStates().filter((s) => s.countryCode === "US"));
    }
  }, [mode]);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <div className="flex justify-between gap-5 md:gap-10">
      <div className="flex flex-1 flex-col">
        <Label className="mb-2 text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
          Select region or country preferences (Optional)
        </Label>
        <Select
          autoFocus
          hideSelectedOptions
          isSearchable
          options={regions}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.name}
          classNames={{
            control: () => "!bg-transparent",
            input: () => "!text-primary",
            menuList: () => "!bg-tertiary",
            option: (state) =>
              state.isFocused ? "!bg-accent" : "!bg-tertiary",
            singleValue: () => "!bg-transparent !text-[#AFD275]"
          }}
          value={selectedItem}
          onChange={handleRegionChange}
        />
        <p className="mt-2 text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
          These location preferences will be displayed to all candidates, but
          anyone can submit proposals.
        </p>
      </div>
    </div>
  );
}
