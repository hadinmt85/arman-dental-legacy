import type { Metadata } from "next";
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
    icon: "info" as const,
    title: "تعرفه شفاف",
    text: "هزینه‌ها پیش از شروع درمان به‌صورت مکتوب اعلام می‌شود.",
  },
  {
    icon: "scan" as const,
    title: "تجهیزات دیجیتال",
    text: "اسکن سه‌بعدی، رادیوگرافی دیجیتال و طراحی لبخند.",
  },
  {
    icon: "shield" as const,
    title: "گارانتی و پیگیری",
    text: "گارانتی کتبی درمان و تماس پیگیری پس از جلسات.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="خدمات"
        eyebrow="خدمات کلینیک"
        title="خدمات تخصصی دندانپزشکی، زیر یک سقف"
        description="از پیشگیری و درمان ریشه تا ایمپلنت و طراحی لبخند؛ هر درمان با معاینه دقیق، پلن شفاف و پیگیری منظم انجام می‌شود."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/appointment" className="btn btn-gold">
            رزرو نوبت
            <Icon name="arrowLeft" className="h-4 w-4" />
          </Link>
          <a href={`tel:${site.phoneHref}`} className="btn btn-on-dark">
            <Icon name="phone" className="h-4 w-4" />
            مشاوره تلفنی
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-3">
            {assurances.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-2xl border border-navy-900/8 bg-white p-5 shadow-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-600">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-900">{item.title}</p>
                  <p className="mt-1 text-[11px] leading-6 text-muted">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="start"
              eyebrow="فهرست خدمات"
              title="درمان مناسب شما، با جزئیات کامل"
              description="روی هر خدمت توضیحات، ویژگی‌ها و هزینه تقریبی را ببینید. برای انتخاب دقیق، مشاوره حضوری توصیه می‌شود."
            />
            <p className="max-w-xs rounded-2xl bg-gold-50 px-4 py-3 text-[10px] leading-5 text-gold-700">
              تعرفه‌ها تقریبی هستند و پس از معاینه و بررسی تصاویر، هزینه نهایی
              به‌صورت مکتوب اعلام می‌شود.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x section">
          <SectionHeading
            eyebrow="مسیر درمان"
            title="چهار قدم تا نتیجه‌ای قابل پیش‌بینی"
            description="فرآیند ثابت ما در همه درمان‌ها، از معاینه تا پیگیری، به شما اطمینان می‌دهد که هیچ مرحله‌ای نادیده نمی‌ماند."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="group relative rounded-3xl border border-navy-900/8 bg-cream/70 p-6 transition hover:-translate-y-1 hover:border-gold-400/50 hover:bg-white hover:shadow-card"
              >
                <span className="text-3xl font-black text-gold-300 transition group-hover:text-gold-500">
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-extrabold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-muted">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <Icon name="checkCircle" className="h-4 w-4 text-emerald-500" />
              بی‌حسی و کنترل درد در همه درمان‌ها
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="checkCircle" className="h-4 w-4 text-emerald-500" />
              امکان پرداخت مرحله‌ای
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="checkCircle" className="h-4 w-4 text-emerald-500" />
              پرونده دیجیتال و آرشیو تصاویر
            </span>
          </div>
        </div>
      </section>

      <div className="pb-20 pt-20 sm:pb-24 sm:pt-24">
        <CtaBand
          title="مطمئن نیستید کدام درمان مناسب شماست؟"
          text="با یک مشاوره کوتاه شروع کنید؛ وضعیت دهان و دندان شما بررسی می‌شود و گزینه‌های درمانی با هزینه و زمان‌بندی شفاف ارائه می‌شود."
        />
      </div>
    </>
  );
}
