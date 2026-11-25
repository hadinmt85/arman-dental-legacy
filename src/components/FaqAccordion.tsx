"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type FaqItem = {
  q: string;
  a: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.q}
            className="border-b border-line last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right transition hover:bg-sky-soft"
            >
              <span
                className={`text-[12px] font-semibold transition sm:text-[13px] ${
                  isOpen ? "text-brand-700" : "text-ink-soft"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition duration-300 ${
                  isOpen
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-line bg-white text-muted"
                }`}
              >
                <Icon
                  name={isOpen ? "close" : "plus"}
                  className="h-3 w-3"
                />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl px-5 pb-5 text-[11px] leading-6 text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
