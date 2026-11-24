"use client";

import Link from "next/link";
import { useState } from "react";
import { BeforeAfter } from "./BeforeAfter";
import { Icon } from "./Icon";
import { galleryCases } from "@/lib/site";

export function GalleryExplorer() {
  const [activeId, setActiveId] = useState(galleryCases[0].id);
  const activeCase =
    galleryCases.find((item) => item.id === activeId) ?? galleryCases[0];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {galleryCases.map((item) => {
          const isActive = item.id === activeCase.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition ${
                isActive
                  ? "border-navy-900 bg-navy-900 text-white shadow-card"
                  : "border-navy-900/10 bg-white text-navy-700 hover:border-gold-400 hover:text-navy-900"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <div className="rounded-4xl border border-navy-900/8 bg-cream p-2.5 shadow-card">
            <BeforeAfter
              key={activeCase.id}
              initial={52}
              className="aspect-[4/3] w-full rounded-[1.6rem]"
            />
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3.5">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-muted">
                <Icon name="info" className="h-3.5 w-3.5 text-gold-600" />
                تصویر نمونه شبیه‌سازی‌شده
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-navy-700">
                <Icon name="sparkles" className="h-3.5 w-3.5 text-gold-600" />
                {activeCase.service}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-navy-900/8 bg-white p-6 shadow-card sm:p-8">
          <span className="chip">{activeCase.service}</span>
          <h2 className="mt-4 text-2xl leading-[1.4] text-navy-900">
            {activeCase.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            {activeCase.description}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-cream/80 p-4">
              <dt className="text-[10px] text-muted">تعداد جلسات</dt>
              <dd className="mt-1 text-sm font-extrabold text-navy-900">
                {activeCase.sessions}
              </dd>
            </div>
            <div className="rounded-2xl bg-cream/80 p-4">
              <dt className="text-[10px] text-muted">مدت درمان</dt>
              <dd className="mt-1 text-sm font-extrabold text-navy-900">
                {activeCase.period}
              </dd>
            </div>
          </dl>

          <p className="mt-5 rounded-2xl border border-gold-500/25 bg-gold-50/60 p-3 text-[10px] leading-5 text-gold-700">
            {activeCase.note}. نتیجه واقعی هر درمان به شرایط دهان و برنامه
            درمانی فردی بستگی دارد.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/appointment" className="btn btn-primary btn-sm">
              رزرو مشاوره
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/services"
              className="btn btn-outline btn-sm"
            >
              مشاهده خدمات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
