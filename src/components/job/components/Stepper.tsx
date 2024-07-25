"use client";

import clsx from "clsx";

interface Props {
  active?: number;
  total?: number;
}

export default function Stepper({ active = 1, total = 1 }: Props) {
  const steps = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <div className="flex flex-row items-center gap-2">
      {steps.map((s) => (
        <div
          key={s}
          className={clsx(
            "cursor-pointer rounded-full",
            active === s
              ? "h-3 w-3 border-4 border-[#AFD275] bg-[#AFD275]"
              : s > active
                ? "h-2 w-2 bg-background invert"
                : "h-2 w-2 bg-[#AFD275] opacity-50"
          )}
        />
      ))}
    </div>
  );
}
