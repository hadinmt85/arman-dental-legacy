import Link from "next/link";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  text?: string;
  className?: string;
};

export function CtaBand({
  title = "نوبتت را رزرو کن.",
  text = "در چند دقیقه زمان مراجعه را انتخاب کن؛ بقیه‌اش با ما. مشاوره اولیه پیش از هر درمان انجام می‌شود.",
  className = "",
}: CtaBandProps) {
  return (
    <section className={`container-x ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-11 text-white sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-28 right-1/4 h-64 w-64 rounded-full bg-mint-300/20 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow eyebrow-light">رزرو نوبت</span>
            <h2 className="mt-3 max-w-xl text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.2] tracking-[-0.045em]">
              {title}
            </h2>
            <p className="mt-3 max-w-lg text-xs leading-7 text-white/70 sm:text-[13px]">
              {text}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col lg:items-end">
            <Link href="/appointment" className="btn btn-light w-full sm:w-auto">
              رزرو آنلاین
              <Icon name="arrowLeft" className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              dir="ltr"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
