"use client";

import { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { LuSearch } from "react-icons/lu";

import { Input } from "@/components/ui/input";

export default function CollapsedSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [collapsed, setCollapsed] = useState(true);
  const [keyword, setKeyword] = useState("");

  const handleIconClick = () => {
    setCollapsed((prev) => !prev);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  useEffect(() => {
    if (!collapsed) {
      inputRef.current?.focus();
    }
  }, [collapsed]);

  return (
    <div className="flex w-full justify-end px-5 py-5">
      <div className={clsx("relative", collapsed ? "w-10" : "w-full")}>
        <Input
          ref={inputRef}
          readOnly={collapsed}
          value={collapsed ? "" : keyword}
          onChange={handleKeywordChange}
        />

        <div
          className="absolute right-[10px] top-[10px] cursor-pointer"
          onClick={handleIconClick}
        >
          <LuSearch className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
