import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceRow } from "@/components/ServiceRow";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  doctors,
  faqs,
  services,
  site,
  stats,
  testimonials,
  whyUs,
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

const assurances = [
  "استریلیزاسیون استاندارد",
  "تعرفه شفاف پیش از درمان",
  "پیگیری پس از هر درمان",
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
      <section className="relative overflow-hidden">
        <div className="container-x grid gap-10 pb-14 pt-10 sm:pt-14 md:grid-cols-12 md:items-center md:gap-8 md:pb-20 md:pt-16">
          <div className="animate-fade md:col-span-6">
            <span className="eyebrow">کلینیک دندانپزشکی آرمان — تهران</span>

            <h1 className="mt-6 text-[clamp(2.7rem,6.4vw,4.8rem)] font-black leading-[1.06] tracking-[-0.05em] text-ink">
              لبخندت را
              <br />
              <span className="text-forest-700">جدی بگیر.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-8 text-muted sm:text-[15px]">
              دندانپزشکی تخصصی با آرامش، شفافیت و نتیجه‌ای که می‌ماند. از اولین
              مشاوره تا لبخند نهایی، همه‌چیز روشن و بدون استرس است.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href="/appointment" className="btn btn-dark">
                رزرو نوبت
                <Icon name="arrowLeft" className="h-4 w-4" />
              </Link>
              <Link href="/services" className="link-underline">
                مشاهده خدمات
                <Icon name="chevronLeft" className="h-3.5 w-3.5" />
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-extrabold tracking-tight text-ink">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[10px] leading-5 text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade fade-2 relative mx-auto w-full max-w-xl md:col-span-6 md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src="/images/hero.jpg"
                alt="بیمار با لبخند طبیعی در کلینیک دندانپزشکی آرمان"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 p-4 shadow-float backdrop-blur sm:bottom-6 sm:left-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl font-black leading-none tracking-tight text-ink">
                    ۴.۹
                  </span>
                  <span className="flex gap-0.5 text-forest-600">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Icon key={index} name="star" className="h-3 w-3" />
                    ))}
                  </span>
                </div>
                <p className="mt-1.5 text-[9px] text-muted">
                  از ۱٬۲۰۰ نظر بیماران
                </p>
              </div>
            </div>
            <p className="mt-3 text-[10px] tracking-wide text-muted">
              کلینیک آرمان / سعادت‌آباد، تهران
            </p>
          </div>
        </div>
      </section>

      {/* Assurance strip */}
      <section className="border-y border-line bg-white/45">
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

      {/* Manifesto */}
      <section className="section">
        <div className="container-x grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="eyebrow">درباره آرمان</span>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.18] tracking-[-0.035em] text-ink">
              دندانپزشکی نباید
              <br />
              استرس داشته باشد.
            </h2>
          </div>
          <div className="flex flex-col justify-end md:col-span-5">
            <p className="text-sm leading-8 text-muted">
              در آرمان، درمان از یک گفت‌وگوی ساده شروع می‌شود: چه چیزی برای تو
              مهم است، چه گزینه‌هایی داری و چه نتیجه‌ای واقع‌بینانه است. بعد
              با تجهیزات دیجیتال و تیمی که وقت می‌گذارد، همان مسیر را با هم
              طی می‌کنیم.
            </p>
            <div className="mt-6">
              <Link href="/about" className="link-underline">
                داستان کلینیک
                <Icon name="arrowLeft" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-line bg-white">
        <div className="container-x section">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="خدمات"
              title="هر درمان، یک مسیر روشن."
              description="از پیشگیری تا ایمپلنت و طراحی لبخند؛ با معاینه دقیق، پلن شفاف و پیگیری منظم."
            />
            <Link href="/services" className="link-underline shrink-0">
              همه خدمات
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10">
            {featured.map((service, index) => (
              <ServiceRow
                key={service.id}
                service={service}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic + why */}
      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="چرا آرمان"
              title="دقت دیجیتال، لمس انسانی."
              description="تجهیزات فقط ابزارند؛ چیزی که تجربه را می‌سازد، دقت در تشخیص و احترام به زمان و نگرانی‌های توست."
            />

            <ol className="mt-8 border-t border-line">
              {whyUs.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-4 border-b border-line py-4"
                >
                  <span className="pt-0.5 text-[10px] tabular-nums text-muted">
                    {["۰۱", "۰۲", "۰۳", "۰۴"][index]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-muted">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="md:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src="/images/clinic.jpg"
                alt="فضای درمانی کلینیک دندانپزشکی آرمان"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 max-w-[230px] rounded-2xl bg-white/95 p-4 backdrop-blur">
                <p className="text-xs font-semibold text-ink">کلینیک آرمان</p>
                <p className="mt-1.5 text-[10px] leading-5 text-muted">
                  {site.addressShort}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-line bg-sand-soft">
        <div className="container-x section">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="نتایج"
                title="تفاوت را ببین."
                description="یک نمونه واقعی از تغییر رنگ دندان‌ها؛ اسلایدر را بکش و قبل و بعد را مقایسه کن."
              />
            </div>
            <div className="md:col-span-5 md:text-left">
              <Link href="/gallery" className="link-underline">
                گالری کامل نتایج
                <Icon name="arrowLeft" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem]">
            <BeforeAfter
              src="/images/smile.jpg"
              alt="مقایسه قبل و بعد سفیدسازی دندان در کلینیک آرمان"
              className="aspect-[16/10] w-full sm:aspect-[16/9]"
              sizes="(min-width: 1280px) 1216px, 100vw"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[10px] text-muted">
            <p>بلیچینگ حرفه‌ای · ۱ جلسه · نمونه شبیه‌سازی‌شده</p>
            <p>تصویر واقعی، با شبیه‌سازی دیجیتال رنگ</p>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
          <div className="mx-auto w-full max-w-md md:col-span-5 md:mx-0 md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src="/images/doctor.jpg"
                alt="دکتر آرمان رضایی، بنیان‌گذار کلینیک دندانپزشکی آرمان"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_22%]"
              />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <span className="eyebrow">تیم درمان</span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.2] tracking-[-0.03em] text-ink">
              {doctors[0].name}
            </h2>
            <p className="mt-2 text-sm font-medium text-forest-700">
              {doctors[0].role}
            </p>
            <p className="mt-5 max-w-lg text-sm leading-8 text-muted">
              {doctors[0].bio}
            </p>

            <ul className="mt-7 border-t border-line">
              {[
                ["تحصیلات", "دانشگاه علوم پزشکی تهران"],
                ["تخصص", "ایمپلنتولوژی — فرایبورگ آلمان"],
                ["تجربه", "بیش از ۳٬۵۰۰ ایمپلنت موفق"],
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-4 border-b border-line py-3.5 text-xs"
                >
                  <span className="text-muted">{label}</span>
                  <span className="font-semibold text-ink">{value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <Link href="/about" className="btn btn-dark btn-sm">
                درباره دکتر
                <Icon name="arrowLeft" className="h-3.5 w-3.5" />
              </Link>
              <Link href="/appointment" className="link-underline">
                رزرو مشاوره
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-line bg-white">
        <div className="container-x section">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="تجربه بیماران"
              title="چیزی که بیماران می‌گویند."
            />
            <p className="flex items-center gap-2 text-xs text-muted">
              <Icon name="star" className="h-4 w-4 text-forest-600" />
              ۴.۹ از ۵ — بر اساس نظرسنجی داخلی
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
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
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">سؤالات</span>
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.22] tracking-[-0.03em] text-ink">
              هر چیزی که
              <br />
              باید بدانی.
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-8 text-muted">
              اگر پاسخ سوالت را پیدا نکردی، تیم پذیرش آماده کمک است.
            </p>
            <Link href="/contact" className="link-underline mt-6">
              پرسیدن سؤال
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="md:col-span-8">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
