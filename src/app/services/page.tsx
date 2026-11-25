import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "خدمات دندانپزشکی",
  description:
    "خدمات تخصصی کلینیک دندانپزشکی آرمان: ایمپلنت دیجیتال، لمینت، ارتودنسی نامرئی، بلیچینگ، درمان ریشه، دندانپزشکی کودکان و جرم‌گیری.",
  alternates: { canonical: "/services" },
};

const assurances = [
  {
    icon: "shield" as const,
    title: "استریلیزاسیون استاندارد",
    text: "کنترل عفونت مطابق پروتکل‌های وزارت بهداشت.",
  },
  {
    icon: "sparkle" as const,
    title: "تعرفه شفاف",
    text: "هزینه‌ها پیش از شروع درمان، مکتوب اعلام می‌شود.",
  },
  {
    icon: "heart" as const,
    title: "پیگیری بعد از درمان",
    text: "تماس پیگیری و ویزیت کنترل دوره‌ای.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="خدمات"
        eyebrow="خدمات کلینیک"
        title="هر درمان، یک مسیر روشن."
        description="از پیشگیری و درمان ریشه تا ایمپلنت و طراحی لبخند؛ هر درمان با معاینه دقیق، پلن شفاف و پیگیری منظم انجام می‌شود."
      >
        <div className="flex flex-wrap gap-2.5">
          <Link href="/appointment" className="btn btn-primary btn-sm">
            رزرو نوبت
            <Icon name="arrowLeft" className="h-3.5 w-3.5" />
          </Link>
          <a href={`tel:${site.phoneHref}`} className="btn btn-outline btn-sm">
            مشاوره تلفنی
          </a>
        </div>
      </PageHero>

      <section className="container-x pt-8">
        <div className="grid gap-3 md:grid-cols-3">
          {assurances.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span>
                <b className="block text-[11px] font-bold text-ink">
                  {item.title}
                </b>
                <span className="mt-1 block text-[9.5px] leading-5 text-muted">
                  {item.text}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="فهرست خدمات"
              title="درمان مناسب تو، با جزئیات کامل."
              description="روی هر خدمت بزن تا توضیحات، ویژگی‌ها و تعرفه تقریبی را ببینی. برای انتخاب دقیق، یک مشاوره کوتاه کافی است."
            />
            <p className="max-w-[260px] rounded-xl border border-line bg-sky-soft px-4 py-3 text-[9px] leading-5 text-muted">
              تعرفه‌ها تقریبی هستند و پس از معاینه و بررسی تصاویر، هزینه نهایی
              به‌صورت مکتوب اعلام می‌شود.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index + 1}
                detailed
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x section">
          <SectionHeading
            eyebrow="مسیر درمان"
            title="از مشاوره تا پیگیری، در چهار قدم."
            description="یک فرآیند ثابت برای همه درمان‌ها؛ تا بدانی در هر مرحله چه اتفاقی می‌افتد."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-line bg-sky-soft/60 p-5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[11px] font-bold text-brand-600 shadow-sm">
                  {step.step}
                </span>
                <h3 className="mt-4 text-[13px] font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[10px] leading-5 text-muted">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="checkCircle" className="h-3.5 w-3.5 text-mint-600" />
              بی‌حسی و کنترل درد در همه درمان‌ها
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="checkCircle" className="h-3.5 w-3.5 text-mint-600" />
              امکان پرداخت مرحله‌ای
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="checkCircle" className="h-3.5 w-3.5 text-mint-600" />
              پرونده دیجیتال و آرشیو تصاویر
            </span>
          </div>
        </div>
      </section>

      <section className="container-x py-12 sm:py-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-sky sm:aspect-[16/7]">
          <Image
            src="/images/care.jpg"
            alt="گفت‌وگوی پزشک و بیمار در کلینیک دندانپزشکی آرمان"
            fill
            sizes="(min-width: 1280px) 1160px, 100vw"
            className="object-cover object-[50%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/10 to-transparent" />
          <div className="absolute bottom-5 right-5 text-white sm:bottom-7 sm:right-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[9px] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-300" />
              داخل کلینیک آرمان
            </span>
            <p className="mt-2 text-lg font-bold sm:text-xl">
              هر جزئیات، با دقت.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBand
          title="مطمئن نیستی از کجا شروع کنی؟"
          text="یک مشاوره کوتاه رزرو کن؛ وضعیت دهان بررسی می‌شود و گزینه‌های درمانی با هزینه و زمان‌بندی شفاف ارائه می‌شود."
        />
      </div>
    </>
  );
}
