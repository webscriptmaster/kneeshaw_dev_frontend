"use client";

import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import useGameCategoryStore from "@/zustand/GameCategory";
import useGamePlatformStore from "@/zustand/GamePlatform";
import { ALL } from "@/utils/constants";

interface Props {
  onFilterChange?: (categoryId: string, platformId: string) => void;
}

export default function Filter({ onFilterChange }: Props) {
  const gameCategoryStore = useGameCategoryStore();
  const gamePlatformStore = useGamePlatformStore();

  const [selectedCategoryId, setSelectedCategoryId] = useState(ALL);
  const [selectedPlatformId, setSelectedPlatformId] = useState(ALL);

  const initialize = async () => {
    await gameCategoryStore.getListAction();
    await gamePlatformStore.getListAction();
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategoryId(value);

    if (typeof onFilterChange === "function") {
      onFilterChange(value, selectedPlatformId);
    }
  };

  const handlePlatformChange = (value: string) => {
    setSelectedPlatformId(value);

    if (typeof onFilterChange === "function") {
      onFilterChange(selectedCategoryId, value);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="mb-32 flex justify-center">
      <div className="flex w-full flex-col gap-4 md:flex-row lg:w-3/4 lg:gap-16">
        <Select value={selectedCategoryId} onValueChange={handleCategoryChange}>
          <SelectTrigger className="bg-tertiary">
            <SelectValue placeholder="(All Categories)" />
          </SelectTrigger>
          <SelectContent className="bg-tertiary">
            <SelectItem value={ALL}>(All Categories)</SelectItem>
            {gameCategoryStore.gameCategories.map((gc) => (
              <SelectItem key={gc._id} value={gc._id ?? ""}>
                {gc.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedPlatformId} onValueChange={handlePlatformChange}>
          <SelectTrigger className="bg-tertiary">
            <SelectValue placeholder="(All Platforms)" />
          </SelectTrigger>
          <SelectContent className="bg-tertiary">
            <SelectItem value={ALL}>(All Platforms)</SelectItem>
            {gamePlatformStore.gamePlatforms.map((gp) => (
              <SelectItem key={gp._id} value={gp._id ?? ""}>
                {gp.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
