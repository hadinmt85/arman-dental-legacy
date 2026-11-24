"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "./Icon";

type BeforeAfterProps = {
  src: string;
  alt: string;
  className?: string;
  initial?: number;
  sizes?: string;
  hint?: boolean;
};

export function BeforeAfter({
  src,
  alt,
  className = "",
  initial = 54,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  hint = true,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(initial);

  return (
    <div
      className={`group relative select-none overflow-hidden bg-sand focus-within:ring-2 focus-within:ring-forest-600 focus-within:ring-offset-2 focus-within:ring-offset-paper ${className}`}
      dir="ltr"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          className="object-cover"
          style={{
            filter:
              "sepia(0.2) saturate(0.92) brightness(0.95) contrast(0.98)",
          }}
        />
        <div className="absolute inset-0 bg-[#b9913f]/10 mix-blend-multiply" />
      </div>

      <span
        className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-ink shadow-sm backdrop-blur"
        dir="rtl"
      >
        قبل
      </span>
      <span
        className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-ink/85 px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur"
        dir="rtl"
      >
        بعد
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-white/90"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-float">
          <span className="flex items-center">
            <Icon name="chevronLeft" className="h-4 w-4" />
            <Icon name="chevronRight" className="-ml-1.5 h-4 w-4" />
          </span>
        </span>
      </div>

      {hint ? (
        <span
          className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/55 px-3.5 py-1.5 text-[10px] font-medium text-white backdrop-blur"
          dir="rtl"
        >
          برای مقایسه بکشید
        </span>
      ) : null}

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="اسلایدر مقایسه تصویر قبل و بعد از درمان"
        className="compare-range absolute inset-0 z-20 h-full w-full"
      />
    </div>
  );
}
