"use client";

import { useState } from "react";

import { ALL } from "@/utils/constants";

import Filter from "./Filter";
import PopularGames from "./PopularGames";
import Title from "./Title";

export default function Games() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(ALL);
  const [selectedPlatformId, setSelectedPlatformId] = useState(ALL);

  const handleFilterChange = (newCategoryId: string, newPlatformId: string) => {
    setSelectedCategoryId(newCategoryId);
    setSelectedPlatformId(newPlatformId);
  };

  return (
    <section className="mb-[100px] mt-[150px] flex w-full flex-col px-5 md:px-10">
      <Title />

      <Filter onFilterChange={handleFilterChange} />

      <PopularGames
        categoryId={selectedCategoryId}
        platformId={selectedPlatformId}
      />
    </section>
  );
}
