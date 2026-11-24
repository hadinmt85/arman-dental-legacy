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
  text = "در چند دقیقه زمان مراجعه را انتخاب کن؛ بقیه‌اش با ما. مشاوره اولیه و بررسی وضعیت دهان پیش از هر درمان انجام می‌شود.",
  className = "",
}: CtaBandProps) {
  return (
    <section className={`container-x ${className}`}>
      <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-900 px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
        <div className="absolute inset-0 bg-grid-soft opacity-[0.08]" />
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-forest-500/30 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow eyebrow-light">شروع کن</span>
            <h2 className="mt-5 max-w-2xl text-[clamp(2.1rem,4.4vw,3.6rem)] font-black leading-[1.15] tracking-[-0.035em]">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-8 text-white/65">
              {text}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <Link href="/appointment" className="btn btn-light w-full sm:w-auto">
              رزرو آنلاین
              <Icon name="arrowLeft" className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              dir="ltr"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
