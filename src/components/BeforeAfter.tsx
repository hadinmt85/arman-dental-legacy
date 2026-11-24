"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { SmileArt } from "./SmileArt";

type BeforeAfterProps = {
  initial?: number;
  className?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfter({
  initial = 55,
  className = "",
  beforeLabel = "قبل",
  afterLabel = "بعد",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(initial);

  return (
    <div
      className={`group relative select-none overflow-hidden focus-within:ring-2 focus-within:ring-gold-500/70 focus-within:ring-offset-2 focus-within:ring-offset-cream ${className}`}
      dir="ltr"
    >
      <SmileArt
        variant="after"
        className="absolute inset-0 h-full w-full"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <SmileArt variant="before" className="h-full w-full" />
      </div>

      <span
        className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold text-navy-900 shadow-sm backdrop-blur"
        dir="rtl"
      >
        {beforeLabel}
      </span>
      <span
        className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-navy-900/80 px-3 py-1 text-[11px] font-bold text-gold-200 shadow-sm backdrop-blur"
        dir="rtl"
      >
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-[2px] -translate-x-1/2 bg-white/90 shadow-[0_0_18px_rgba(0,0,0,0.25)]"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-navy-900/10 bg-white text-navy-900 shadow-lg">
          <span className="flex items-center">
            <Icon name="chevronLeft" className="h-4 w-4" />
            <Icon name="chevronRight" className="-ml-1.5 h-4 w-4" />
          </span>
        </span>
      </div>

      <span
        className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy-950/55 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur"
        dir="rtl"
      >
        برای مقایسه بکشید
      </span>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="اسلایدر مقایسه تصویر قبل و بعد از درمان"
        className="compare-range absolute inset-0 z-20 m-0 h-full w-full opacity-100"
      />
    </div>
  );
}
