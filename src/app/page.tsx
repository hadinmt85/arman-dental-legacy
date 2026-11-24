import Link from "next/link";
import type { Metadata } from "next";
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
  galleryCases,
  processSteps,
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

export default function HomePage() {
  const featuredServices = services.filter((service) => service.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-grid mask-fade opacity-60" />
        <div className="absolute -right-40 -top-24 h-[460px] w-[460px] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-navy-500/40 blur-3xl" />

        <div className="container-x relative grid gap-12 pb-24 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32 lg:pt-20">
          <div>
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold text-navy-100 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              نوبت‌دهی آنلاین، ۲۴ ساعته
            </span>

            <h1 className="animate-rise rise-1 mt-6 text-[2rem] leading-[1.35] sm:text-4xl lg:text-[3.05rem] lg:leading-[1.28]">
              لبخندی که به آن{" "}
              <span className="text-gradient-gold">افتخار</span> می‌کنید
            </h1>

            <p className="animate-rise rise-2 mt-5 max-w-xl text-sm leading-8 text-navy-100 sm:text-base">
              در کلینیک تخصصی آرمان، درمان‌های دندانپزشکی و زیبایی با تجهیزات
              دیجیتال و تیمی از متخصصان انجام می‌شود؛ مسیری شفاف از مشاوره تا
              لبخند نهایی.
            </p>

            <div className="animate-rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/appointment" className="btn btn-gold">
                رزرو نوبت آنلاین
                <Icon name="arrowLeft" className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn btn-on-dark">
                مشاهده خدمات
                <Icon name="chevronLeft" className="h-4 w-4" />
              </Link>
            </div>

            <dl className="animate-rise rise-4 mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl font-extrabold text-white">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[11px] text-navy-200">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-rise rise-2 relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.4rem] bg-gold-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/12 bg-white/5 p-3 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] bg-cream">
                <BeforeAfter
                  initial={54}
                  className="aspect-[4/3] w-full"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
                <div>
                  <p className="text-xs font-bold text-white">
                    طراحی لبخند با لمینت سرامیکی
                  </p>
                  <p className="mt-0.5 text-[10px] text-navy-200">
                    تصویر شبیه‌سازی‌شده از نتیجه درمان
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gold-500/15 px-2.5 py-1 text-[10px] font-bold text-gold-300">
                  <Icon name="sparkles" className="h-3.5 w-3.5" />
                  نمونه
                </span>
              </div>
            </div>

            <div className="float-slow absolute -right-2 -top-4 hidden rounded-2xl bg-white px-4 py-3 shadow-soft lg:block">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold-50 text-gold-600">
                  <Icon name="calendar" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] text-muted">رزرو آنلاین</p>
                  <p className="text-xs font-extrabold text-navy-900">
                    در ۳ مرحله ساده
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft sm:flex">
              <span className="flex text-gold-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon key={index} name="star" className="h-3 w-3" />
                ))}
              </span>
              <div>
                <p className="text-xs font-extrabold text-navy-900">۴.۹ از ۵</p>
                <p className="text-[10px] text-muted">رضایت بیماران</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="relative z-10 -mt-12 lg:-mt-14">
        <div className="container-x">
          <div className="grid overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-soft sm:grid-cols-3">
            {[
              {
                icon: "pin" as const,
                label: "آدرس کلینیک",
                value: site.addressShort,
                extra: "مشاهده روی نقشه",
                href: site.mapUrl,
              },
              {
                icon: "clock" as const,
                label: "ساعات کاری",
                value: "شنبه تا چهارشنبه ۹ تا ۲۰",
                extra: "پنجشنبه ۹ تا ۱۴",
              },
              {
                icon: "phone" as const,
                label: "رزرو و مشاوره",
                value: site.phone,
                extra: "تماس مستقیم با پذیرش",
                href: `tel:${site.phoneHref}`,
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`flex items-start gap-4 p-6 ${
                  index > 0 ? "border-t border-navy-900/8 sm:border-s sm:border-t-0" : ""
                }`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy-50 text-navy-800">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] text-muted">{item.label}</p>
                  <p className="mt-1 truncate text-sm font-bold text-navy-900">
                    {item.value}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-gold-600 transition hover:text-gold-700"
                    >
                      {item.extra}
                      <Icon name="chevronLeft" className="h-3 w-3" />
                    </a>
                  ) : (
                    <p className="mt-1 text-[11px] text-muted">{item.extra}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              align="start"
              eyebrow="خدمات تخصصی"
              title="درمانی برای هر مرحله از سلامت دهان"
              description="از پیشگیری و جرم‌گیری تا ایمپلنت و طراحی لبخند؛ همه خدمات زیر یک سقف و با تیمی هماهنگ."
            />
            <Link
              href="/services"
              className="btn btn-outline btn-sm shrink-0 self-start md:self-auto"
            >
              همه خدمات
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us / process */}
      <section className="bg-white">
        <div className="container-x section grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="start"
              eyebrow="چرا کلینیک آرمان"
              title="استانداردی که در هر جلسه حس می‌کنید"
              description="تجهیزات به‌روز فقط بخشی از ماجراست؛ آنچه تجربه درمان را متفاوت می‌کند، دقت، شفافیت و احترام به زمان شماست."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-navy-900/8 bg-cream/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-gold-400/50 hover:bg-white hover:shadow-card"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-navy-800 shadow-sm transition group-hover:bg-navy-900 group-hover:text-gold-300">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl bg-navy-900 p-7 sm:p-9">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-gold-500/15 blur-3xl" />

            <div className="relative">
              <span className="eyebrow eyebrow-light">مسیر درمان</span>
              <h3 className="mt-4 text-xl text-white sm:text-2xl">
                از اولین مشاوره تا پیگیری نهایی
              </h3>

              <ol className="mt-7 space-y-5">
                {processSteps.map((step, index) => (
                  <li key={step.step} className="relative flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold-400/30 bg-white/5 text-[11px] font-bold text-gold-300">
                        {step.step}
                      </span>
                      {index < processSteps.length - 1 ? (
                        <span className="mt-1 h-full w-px bg-white/10" />
                      ) : null}
                    </div>
                    <div className="pb-1">
                      <p className="text-sm font-bold text-white">{step.title}</p>
                      <p className="mt-1 text-xs leading-6 text-navy-200">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-[10px] text-navy-200">
                    میانگین رضایت بیماران
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-white">۹۶٪</p>
                </div>
                <div className="text-left">
                  <span className="flex justify-end text-gold-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Icon key={index} name="star" className="h-3.5 w-3.5" />
                    ))}
                  </span>
                  <p className="mt-2 text-[10px] text-navy-200">
                    بر اساس نظرسنجی داخلی
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden rounded-4xl bg-navy-900 p-8 text-center">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/15 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full border border-white/10" />

              <div className="relative">
                <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full border border-gold-400/40 bg-navy-800/80 text-3xl font-black text-gold-300">
                  <span className="absolute inset-2 rounded-full border border-dashed border-gold-400/20" />
                  آر
                </div>
                <p className="mt-5 text-lg font-extrabold text-white">
                  {doctors[0].name}
                </p>
                <p className="mt-1 text-xs text-gold-300">{doctors[0].role}</p>

                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {doctors[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-navy-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-xl font-extrabold text-white">۳٬۵۰۰+</p>
                    <p className="mt-1 text-[10px] text-navy-200">
                      ایمپلنت موفق
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-white">۱۸ سال</p>
                    <p className="mt-1 text-[10px] text-navy-200">
                      تجربه بالینی
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-4xl border border-navy-900/8 bg-white p-8 shadow-card sm:p-10">
              <SectionHeading
                align="start"
                eyebrow="درباره بنیان‌گذار"
                title="درمانی که با دقت و ظرافت طراحی می‌شود"
                description={doctors[0].bio}
              />

              <ul className="mt-6 space-y-3">
                {[
                  "دکترای دندانپزشکی از دانشگاه علوم پزشکی تهران",
                  "دوره تخصصی ایمپلنتولوژی از دانشگاه فرایبورگ آلمان",
                  "عضو انجمن ایمپلنتولوژی ایران",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-navy-800"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-50 text-gold-600">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-primary">
                  پروفایل کامل پزشک
                  <Icon name="arrowLeft" className="h-4 w-4" />
                </Link>
                <Link href="/appointment" className="btn btn-outline">
                  رزرو مشاوره
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-white">
        <div className="container-x section grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="rounded-4xl border border-navy-900/8 bg-cream p-2.5 shadow-card">
            <BeforeAfter
              initial={48}
              className="aspect-[4/3] w-full rounded-[1.6rem]"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
              <div>
                <p className="text-sm font-extrabold text-navy-900">
                  {galleryCases[0].title}
                </p>
                <p className="mt-1 text-[11px] text-muted">
                  {galleryCases[0].service} · {galleryCases[0].sessions}
                </p>
              </div>
              <span className="chip">
                <Icon name="sparkles" className="h-3.5 w-3.5 text-gold-600" />
                {galleryCases[0].period}
              </span>
            </div>
          </div>

          <div>
            <SectionHeading
              align="start"
              eyebrow="نتایج درمان"
              title="تفاوت را ببینید، نه فقط بشنوید"
              description="چند نمونه از نتایج درمان در کلینیک آرمان؛ اسلایدر را بکشید و تغییر را مقایسه کنید."
            />

            <ul className="mt-6 divide-y divide-navy-900/8 overflow-hidden rounded-2xl border border-navy-900/8 bg-cream/60">
              {galleryCases.map((item) => (
                <li key={item.id}>
                  <Link
                    href="/gallery"
                    className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-white"
                  >
                    <span>
                      <span className="block text-sm font-bold text-navy-900">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-[11px] text-muted">
                        {item.service}
                      </span>
                    </span>
                    <Icon
                      name="chevronLeft"
                      className="h-4 w-4 shrink-0 text-gold-600"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/gallery" className="btn btn-primary">
                مشاهده گالری کامل
                <Icon name="arrowLeft" className="h-4 w-4" />
              </Link>
              <p className="text-[10px] leading-5 text-muted">
                تصاویر نمونه شبیه‌سازی‌شده‌اند و نتیجه هر درمان
                <br className="hidden sm:block" />
                بسته به شرایط دهان متفاوت است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="تجربه بیماران"
            title="اعتماد شما، مهم‌ترین دستاورد ما"
            description="نظراتی از بیمارانی که مسیر درمان خود را با آرمان طی کرده‌اند."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <Icon name="shield" className="h-4 w-4 text-gold-600" />
              رضایت ۹۶٪ بیماران
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="award" className="h-4 w-4 text-gold-600" />
              ۱۲٬۰۰۰+ بیمار درمان‌شده
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="star" className="h-4 w-4 text-gold-500" />
              میانگین امتیاز ۴.۹ از ۵
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 sm:pb-24">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="start"
              eyebrow="سؤالات متداول"
              title="پاسخ پرسش‌های رایج شما"
              description="اگر پاسخ سؤال خود را پیدا نکردید، تیم پذیرش آماده پاسخگویی است."
            />

            <div className="mt-7 rounded-3xl border border-navy-900/8 bg-white p-6 shadow-card">
              <p className="text-sm font-bold text-navy-900">
                هنوز سؤالی دارید؟
              </p>
              <p className="mt-2 text-xs leading-6 text-muted">
                برای مشاوره سریع با پذیرش تماس بگیرید یا از فرم تماس پیام
                بگذارید.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="btn btn-primary btn-sm"
                >
                  <Icon name="phone" className="h-3.5 w-3.5" />
                  تماس با پذیرش
                </a>
                <Link href="/contact" className="btn btn-outline btn-sm">
                  فرم تماس
                </Link>
              </div>
            </div>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <div className="pb-20 sm:pb-24">
        <CtaBand />
      </div>
    </>
  );
}
