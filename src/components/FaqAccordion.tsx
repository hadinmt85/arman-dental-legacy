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
    <div className="divide-y divide-navy-900/8 overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right transition hover:bg-navy-50/60 sm:px-7"
            >
              <span
                className={`text-sm font-bold sm:text-[15px] ${
                  isOpen ? "text-navy-900" : "text-navy-800"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition duration-300 ${
                  isOpen
                    ? "rotate-180 border-gold-500/40 bg-gold-50 text-gold-600"
                    : "border-navy-900/10 text-navy-600"
                }`}
              >
                <Icon name="chevronDown" className="h-4 w-4" />
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
                <p className="px-5 pb-6 text-sm leading-7 text-muted sm:px-7">
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
