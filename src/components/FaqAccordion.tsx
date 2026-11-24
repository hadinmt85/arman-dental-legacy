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
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-right"
            >
              <span
                className={`text-sm font-semibold transition sm:text-base ${
                  isOpen ? "text-ink" : "text-ink-soft"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border transition duration-300 ${
                  isOpen
                    ? "border-ink bg-ink text-white"
                    : "border-line text-muted"
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
                <p className="max-w-2xl pb-6 text-sm leading-8 text-muted">
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
