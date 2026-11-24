import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceRow } from "@/components/ServiceRow";
import { processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "خدمات دندانپزشکی",
  description:
    "خدمات تخصصی کلینیک دندانپزشکی آرمان: ایمپلنت دیجیتال، لمینت، ارتودنسی نامرئی، بلیچینگ، درمان ریشه، دندانپزشکی کودکان و جرم‌گیری.",
  alternates: { canonical: "/services" },
};

const assurances = [
  "تعرفه شفاف پیش از شروع درمان",
  "کنترل درد و بی‌حسی کامل",
  "گارانتی کتبی و پیگیری دوره‌ای",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="خدمات"
        eyebrow="خدمات"
        title="هر درمان، یک مسیر روشن."
        description="از پیشگیری و درمان ریشه تا ایمپلنت و طراحی لبخند؛ هر درمان با معاینه دقیق، پلن شفاف و پیگیری منظم انجام می‌شود."
      >
        <Link href="/appointment" className="btn btn-dark">
          رزرو نوبت
          <Icon name="arrowLeft" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="border-b border-line bg-white/45">
        <div className="container-x flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          {assurances.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-[11px] font-medium text-ink-soft"
            >
              <Icon name="check" className="h-3.5 w-3.5 text-forest-600" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 min-[900px]:grid-cols-12">
          <aside className="min-[900px]:col-span-4">
            <span className="eyebrow">فهرست خدمات</span>
            <h2 className="mt-4 text-[clamp(1.8rem,3.4vw,2.7rem)] font-extrabold leading-[1.24] tracking-[-0.03em] text-ink">
              درمان مناسب تو،
              <br />
              با جزئیات کامل.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-8 text-muted">
              روی هر خدمت بزن تا توضیحات، ویژگی‌ها و تعرفه تقریبی را ببینی. برای
              انتخاب دقیق، یک مشاوره کوتاه کافی است.
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-sand-soft p-5">
              <p className="text-xs font-semibold text-ink">درباره تعرفه‌ها</p>
              <p className="mt-2 text-[11px] leading-6 text-muted">
                هزینه‌ها بر اساس شرایط دهان، تعداد جلسات و مواد مصرفی متفاوت
                است. تعرفه نهایی پس از معاینه به‌صورت مکتوب اعلام می‌شود.
              </p>
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <p className="text-[11px] text-muted">سؤالی داری؟</p>
              <a
                href={`tel:${site.phoneHref}`}
                dir="ltr"
                className="mt-2 block text-lg font-bold text-ink transition hover:text-forest-700"
              >
                {site.phone}
              </a>
            </div>
          </aside>

          <div className="min-[900px]:col-span-8">
            {services.map((service, index) => (
              <ServiceRow
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

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="border-t border-ink/15 pt-5">
                <span className="text-[11px] tabular-nums text-muted">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-muted">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-sand sm:aspect-[16/7]">
          <Image
            src="/images/care.jpg"
            alt="گفت‌وگوی پزشک و بیمار در کلینیک دندانپزشکی آرمان"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
          <div className="absolute bottom-6 right-6 text-white sm:bottom-8 sm:right-8">
            <p className="text-[10px] tracking-wide text-white/65">
              داخل کلینیک آرمان
            </p>
            <p className="mt-1.5 text-lg font-bold sm:text-xl">
              هر جزئیات، با دقت.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBand
          title="مطمئن نیستی از کجا شروع کنی؟"
          text="یک مشاوره کوتاه رزرو کن؛ وضعیت دهان بررسی می‌شود و گزینه‌های درمانی با هزینه و زمان‌بندی شفاف ارائه می‌شود."
        />
      </div>
    </>
  );
}
