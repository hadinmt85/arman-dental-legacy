import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { doctors, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "درباره پزشک",
  description:
    "دکتر آرمان رضایی، بنیان‌گذار کلینیک دندانپزشکی آرمان؛ متخصص ایمپلنت دیجیتال و طراحی لبخند با ۱۸ سال تجربه بالینی.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "۱۳۸۲",
    title: "آغاز مسیر",
    text: "ورود به دانشکده دندانپزشکی دانشگاه علوم پزشکی تهران.",
  },
  {
    year: "۱۳۸۸",
    title: "دکترای دندانپزشکی",
    text: "فارغ‌التحصیلی و آغاز فعالیت بالینی در تهران.",
  },
  {
    year: "۱۳۹۱",
    title: "فلوشیپ ایمپلنتولوژی",
    text: "گذراندن دوره تخصصی ایمپلنت در دانشگاه فرایبورگ آلمان.",
  },
  {
    year: "۱۳۹۴",
    title: "تأسیس کلینیک آرمان",
    text: "راه‌اندازی کلینیک تخصصی در سعادت‌آباد با تمرکز بر درمان‌های زیبایی.",
  },
  {
    year: "۱۴۰۱",
    title: "توسعه بخش دیجیتال",
    text: "افزودن اسکنر سه‌بعدی، نرم‌افزار طراحی لبخند و گاید جراحی.",
  },
  {
    year: "۱۴۰۴",
    title: "امروز",
    text: "بیش از ۳٬۵۰۰ ایمپلنت موفق و ۱۲٬۰۰۰ بیمار درمان‌شده.",
  },
];

const values = [
  {
    icon: "user" as const,
    title: "تصمیم مشارکتی",
    text: "شما در انتخاب روش درمان شریک هستید؛ همه گزینه‌ها با مزایا و محدودیت‌ها توضیح داده می‌شود.",
  },
  {
    icon: "shield" as const,
    title: "کمترین مداخله",
    text: "تا زمانی که درمان محافظه‌کارانه پاسخ دهد، سراغ روش‌های تهاجمی نمی‌رویم.",
  },
  {
    icon: "heart" as const,
    title: "راحتی بیمار",
    text: "کنترل درد، کاهش استرس و احترام به زمان شما، بخشی از پروتکل هر جلسه است.",
  },
  {
    icon: "award" as const,
    title: "پیگیری بلندمدت",
    text: "نتیجه درمان فقط در روز آخر مهم نیست؛ سال‌ها بعد هم باید پایدار بماند.",
  },
];

export default function AboutPage() {
  const doctor = doctors[0];

  return (
    <>
      <PageHero
        crumb="درباره پزشک"
        eyebrow="بنیان‌گذار کلینیک"
        title="دندانپزشکی که جزئیات را جدی می‌گیرد"
        description="دکتر آرمان رضایی با ۱۸ سال تجربه بالینی، تمرکز خود را بر ایمپلنت دیجیتال، طراحی لبخند و درمان‌های کم‌تهاجم گذاشته است."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/appointment" className="btn btn-gold">
            رزرو مشاوره
            <Icon name="arrowLeft" className="h-4 w-4" />
          </Link>
          <a href={`tel:${site.phoneHref}`} className="btn btn-on-dark">
            <Icon name="phone" className="h-4 w-4" />
            تماس با پذیرش
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-4xl bg-navy-900 p-8">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-white/10" />

            <div className="relative flex h-full flex-col">
              <div className="relative mx-auto grid h-32 w-32 place-items-center rounded-full border border-gold-400/40 bg-navy-800/80 text-4xl font-black text-gold-300">
                <span className="absolute inset-2 rounded-full border border-dashed border-gold-400/20" />
                آر
              </div>

              <div className="mt-6 text-center">
                <h2 className="text-xl text-white">{doctor.name}</h2>
                <p className="mt-1.5 text-xs text-gold-300">{doctor.role}</p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {doctor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold text-navy-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-[11px]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-navy-300">سابقه کار</span>
                  <span className="font-bold text-white">۱۸ سال</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-navy-300">ایمپلنت انجام‌شده</span>
                  <span className="font-bold text-white">۳٬۵۰۰+</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-navy-300">عضو انجمن</span>
                  <span className="font-bold text-white">
                    ایمپلنتولوژی ایران
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={`tel:${site.phoneHref}`}
                  className="btn btn-on-dark btn-sm w-full"
                >
                  <Icon name="phone" className="h-3.5 w-3.5" />
                  تماس مستقیم با کلینیک
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-4xl border border-navy-900/8 bg-white p-7 shadow-card sm:p-10">
            <SectionHeading
              align="start"
              eyebrow="داستان حرفه‌ای"
              title="از دانشگاه تهران تا کلینیک آرمان"
            />

            <div className="mt-5 space-y-4 text-sm leading-8 text-navy-800">
              {doctor.longBio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "دکترای دندانپزشکی — دانشگاه علوم پزشکی تهران",
                "فلوشیپ ایمپلنتولوژی — دانشگاه فرایبورگ آلمان",
                "عضو انجمن ایمپلنتولوژی ایران",
                "مدرس دوره‌های طراحی لبخند دیجیتال",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-2xl bg-cream/70 p-3.5 text-[11px] leading-5 text-navy-800"
                >
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-700">
                    <Icon name="check" className="h-2.5 w-2.5" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <blockquote className="mt-6 rounded-2xl border-r-4 border-gold-500 bg-gold-50/60 px-5 py-4 text-sm leading-7 text-gold-700">
              «بهترین درمان، درمانی است که با شرایط زندگی بیمار هماهنگ باشد؛ نه
              فقط بهترین گزینه روی کاغذ.»
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-y border-navy-900/8 bg-white py-10">
        <div className="container-x grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[11px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="مسیر حرفه‌ای"
            title="نقطه‌های مهم در ۱۸ سال تجربه"
            description="از تحصیل تا امروز؛ مسیری که با تمرکز بر دقت، آموزش مستمر و درمان کم‌تهاجم شکل گرفته است."
          />

          <ol className="relative mx-auto mt-10 max-w-3xl space-y-6 border-s border-navy-900/10 ps-6 sm:ps-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -start-[31px] top-1 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-gold-500 bg-cream sm:-start-[39px]" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="rounded-full bg-navy-900 px-2.5 py-0.5 text-[10px] font-bold text-gold-300">
                    {item.year}
                  </span>
                  <h3 className="text-sm font-extrabold text-navy-900">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-xs leading-6 text-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x section">
          <SectionHeading
            eyebrow="اصول کاری"
            title="چهار تصمیمی که همیشه ثابت می‌ماند"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-navy-900/8 bg-cream/60 p-6 transition hover:-translate-y-1 hover:border-gold-400/50 hover:bg-white hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-navy-800 shadow-sm">
                  <Icon name={value.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-extrabold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-muted">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="تیم درمان"
            title="همراهانی که مسیر درمان را کامل می‌کنند"
            description="در آرمان، هر بیمار توسط تیمی هماهنگ از متخصصان و دستیاران همراهی می‌شود."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {doctors.map((member) => (
              <div
                key={member.id}
                className="flex flex-col gap-5 rounded-3xl border border-navy-900/8 bg-white p-6 shadow-card sm:flex-row sm:items-start"
              >
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-navy-900 text-xl font-black text-gold-300">
                  {member.name.replace("دکتر ", "").charAt(0)}
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-navy-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-gold-600">
                    {member.role}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {member.bio}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-navy-50 px-2.5 py-1 text-[10px] font-semibold text-navy-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-24">
        <CtaBand
          title="دوست دارید درباره برنامه درمانی خود بدانید؟"
          text="در یک جلسه مشاوره، وضعیت دهان و دندان شما بررسی و پلن درمانی متناسب با شرایط‌تان ارائه می‌شود."
        />
      </div>
    </>
  );
}
