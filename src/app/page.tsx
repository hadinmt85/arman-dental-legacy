import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  doctors,
  faqs,
  services,
  site,
  testimonials,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  telephone: site.phoneHref,
  email: site.email,
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "تهران",
    addressCountry: "IR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

const features = [
  {
    icon: "shield" as const,
    title: "استریلیزاسیون استاندارد",
    text: "پروتکل‌های کنترل عفونت مطابق استانداردهای وزارت بهداشت.",
    tone: "brand",
  },
  {
    icon: "sparkle" as const,
    title: "تعرفه شفاف",
    text: "هزینه‌ها پیش از شروع درمان به‌صورت مکتوب اعلام می‌شود.",
    tone: "mint",
  },
  {
    icon: "heart" as const,
    title: "پیگیری بعد از درمان",
    text: "تماس پیگیری و ویزیت کنترل دوره‌ای برای نتیجه پایدار.",
    tone: "brand",
  },
];

export default function HomePage() {
  const featured = services.filter((service) => service.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-brand-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-mint-200/30 blur-3xl" />

        <div className="container-x relative grid gap-10 pb-14 pt-10 sm:pt-12 md:grid-cols-12 md:items-center md:gap-10 md:pb-16">
          <div className="animate-fade md:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-3.5 py-1.5 text-[10px] font-medium text-muted shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
              کلینیک دندانپزشکی در سعادت‌آباد
            </span>

            <h1 className="mt-5 text-[clamp(2.6rem,5.6vw,4.3rem)] font-extrabold leading-[1.12] tracking-[-0.055em] text-ink">
              دندانپزشکی،
              <br />
              <span className="text-brand-600">بدون نگرانی.</span>
            </h1>

            <p className="mt-5 max-w-md text-xs leading-7 text-muted sm:text-[13.5px]">
              درمان تخصصی با آرامش، شفافیت و تجهیزات دیجیتال. از مشاوره تا
              لبخند نهایی، همه‌چیز روشن و بدون استرس است.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/appointment" className="btn btn-primary">
                رزرو نوبت آنلاین
                <Icon name="arrowLeft" className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn btn-outline">
                مشاهده خدمات
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
              <span className="flex items-center gap-2 text-[10px] text-muted">
                <b className="text-[13px] font-extrabold text-ink">۴.۹</b>
                <span className="text-amber-400">★★★★★</span>
                از ۱٬۲۰۰ نظر
              </span>
              <span className="text-[10px] text-muted">
                <b className="text-[13px] font-extrabold text-ink">۱۲٬۰۰۰+</b>{" "}
                بیمار درمان‌شده
              </span>
              <span className="text-[10px] text-muted">
                <b className="text-[13px] font-extrabold text-ink">۱۸ سال</b>{" "}
                تجربه بالینی
              </span>
            </div>
          </div>

          <div className="animate-fade fade-2 relative mx-auto w-full max-w-[440px] md:col-span-6 md:max-w-[450px]">
            <div className="rounded-[2rem] border border-white/80 bg-white p-2 shadow-soft">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] bg-sky">
                <Image
                  src="/images/hero-mint-nonose.jpg"
                  alt="کلوزآپ لب و دندان با لب صورتی ملایم، بدون چهره"
                  fill
                  priority
                  sizes="(min-width: 1024px) 430px, 90vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute right-3 top-4 flex items-center gap-2 rounded-xl border border-line bg-white/95 px-3 py-2 shadow-float backdrop-blur sm:right-4 sm:top-5">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-mint-100 text-mint-700">
                <Icon name="calendar" className="h-3.5 w-3.5" />
              </span>
              <span>
                <b className="block text-[10px] font-bold text-ink">
                  نوبت آزاد
                </b>
                <span className="block text-[8px] text-muted">
                  امروز، ساعت ۱۷:۳۰
                </span>
              </span>
            </div>

            <div className="absolute -left-2 bottom-5 rounded-xl border border-line bg-white/95 px-3.5 py-2.5 shadow-float backdrop-blur sm:-left-3 sm:bottom-7">
              <b className="block text-lg font-extrabold leading-none text-ink">
                ۴.۹
              </b>
              <span className="mt-1 block text-amber-400 text-[9px]">
                ★★★★★
              </span>
              <span className="mt-0.5 block text-[8px] text-muted">
                رضایت بیماران
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="container-x relative z-10 -mt-1">
        <div className="grid gap-3 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-card"
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                  feature.tone === "mint"
                    ? "bg-mint-50 text-mint-700"
                    : "bg-brand-50 text-brand-600"
                }`}
              >
                <Icon name={feature.icon} className="h-5 w-5" />
              </span>
              <span>
                <b className="block text-[11px] font-bold text-ink">
                  {feature.title}
                </b>
                <span className="mt-1 block text-[9.5px] leading-5 text-muted">
                  {feature.text}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container-x">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="خدمات"
              title="هر درمان، یک مسیر روشن."
              description="از پیشگیری تا ایمپلنت و طراحی لبخند؛ با معاینه دقیق و پلن شفاف، مناسب شرایط شما."
            />
            <Link href="/services" className="link-underline shrink-0">
              همه خدمات
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-line bg-page-soft">
        <div className="container-x section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="نتایج"
              title="تفاوت را ببین."
              description="یک نمونه واقعی از تغییر رنگ دندان‌ها؛ اسلایدر را بکش و قبل و بعد را مقایسه کن."
            />
            <Link href="/gallery" className="link-underline shrink-0">
              گالری کامل نتایج
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-line bg-white p-2.5 shadow-soft">
            <BeforeAfter
              src="/images/smile.jpg"
              alt="مقایسه قبل و بعد بلیچینگ دندان در کلینیک آرمان"
              className="aspect-[16/9] w-full rounded-[1.25rem]"
              sizes="(min-width: 1280px) 1160px, 100vw"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-3 text-[9px] text-muted">
              <span>بلیچینگ حرفه‌ای · ۱ جلسه · تصویر واقعی با شبیه‌سازی دیجیتال رنگ</span>
              <Link
                href="/gallery"
                className="font-semibold text-brand-600 transition hover:text-brand-700"
              >
                مشاهده نمونه‌ها ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="section">
        <div className="container-x">
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft">
            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[320px] bg-sky md:min-h-[400px]">
                <Image
                  src="/images/doctor.jpg"
                  alt="دکتر آرمان رضایی، بنیان‌گذار کلینیک آرمان"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[50%_20%]"
                />
                <div className="absolute bottom-4 right-4 rounded-xl border border-line bg-white/90 px-3 py-2 text-[9px] backdrop-blur">
                  <b className="block text-[12px] text-ink">۱۸ سال</b>
                  تجربه بالینی
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <span className="eyebrow">تیم درمان</span>
                <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.3rem)] font-extrabold leading-[1.22] tracking-[-0.04em] text-ink">
                  {doctors[0].name}
                </h2>
                <p className="mt-1.5 text-[11px] font-semibold text-brand-600">
                  {doctors[0].role}
                </p>
                <p className="mt-4 max-w-lg text-[12px] leading-7 text-muted">
                  {doctors[0].bio}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {doctors[0].tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 grid gap-2">
                  {[
                    "دکترای دندانپزشکی — دانشگاه علوم پزشکی تهران",
                    "فلوشیپ ایمپلنتولوژی — دانشگاه فرایبورگ آلمان",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[10px] leading-5 text-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link href="/about" className="btn btn-primary btn-sm">
                    درباره دکتر
                    <Icon name="arrowLeft" className="h-3.5 w-3.5" />
                  </Link>
                  <Link href="/appointment" className="link-underline text-xs">
                    رزرو مشاوره
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-line bg-white">
        <div className="container-x section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="تجربه بیماران"
              title="چیزی که بیماران می‌گویند."
            />
            <p className="flex items-center gap-2 text-[10px] text-muted">
              <Icon name="star" className="h-4 w-4 text-amber-400" />
              ۴.۹ از ۵ — بر اساس نظرسنجی داخلی
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading
              eyebrow="سؤالات"
              title="هر چیزی که باید بدانی."
              description="اگر پاسخ سوالت را پیدا نکردی، تیم پذیرش آماده کمک است."
            />
            <Link href="/contact" className="btn btn-outline btn-sm mt-5">
              پرسیدن سؤال
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="md:col-span-8">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBand />
      </div>
    </>
  );
}
