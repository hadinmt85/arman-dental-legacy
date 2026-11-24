import type { Metadata } from "next";
import Image from "next/image";
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
    text: "دوره تخصصی ایمپلنت در دانشگاه فرایبورگ آلمان.",
  },
  {
    year: "۱۳۹۴",
    title: "تأسیس کلینیک آرمان",
    text: "راه‌اندازی کلینیک تخصصی در سعادت‌آباد با تمرکز بر درمان زیبایی.",
  },
  {
    year: "۱۴۰۱",
    title: "بخش دیجیتال",
    text: "افزودن اسکن سه‌بعدی، طراحی لبخند و گاید جراحی.",
  },
  {
    year: "۱۴۰۴",
    title: "امروز",
    text: "بیش از ۳٬۵۰۰ ایمپلنت موفق و ۱۲٬۰۰۰ بیمار درمان‌شده.",
  },
];

const values = [
  {
    title: "تصمیم مشارکتی",
    text: "همه گزینه‌ها با مزایا و محدودیت‌هایشان توضیح داده می‌شود؛ انتخاب نهایی با توست.",
  },
  {
    title: "کمترین مداخله",
    text: "تا وقتی درمان محافظه‌کارانه جواب می‌دهد، سراغ روش‌های تهاجمی نمی‌رویم.",
  },
  {
    title: "راحتی بیمار",
    text: "کنترل درد، کاهش استرس و احترام به زمان تو بخشی از هر جلسه است.",
  },
  {
    title: "نتیجه پایدار",
    text: "درمان فقط برای روز آخر نیست؛ باید سال‌ها بعد هم درست کار کند.",
  },
];

export default function AboutPage() {
  const doctor = doctors[0];

  return (
    <>
      <PageHero
        crumb="درباره پزشک"
        eyebrow="بنیان‌گذار کلینیک"
        title="دندانپزشکی که جزئیات را جدی می‌گیرد."
        description="دکتر آرمان رضایی با ۱۸ سال تجربه بالینی، تمرکز خود را بر ایمپلنت دیجیتال، طراحی لبخند و درمان‌های کم‌تهاجم گذاشته است."
      >
        <Link href="/appointment" className="btn btn-dark">
          رزرو مشاوره
          <Icon name="arrowLeft" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
              <Image
                src="/images/doctor.jpg"
                alt="پرتره دکتر آرمان رضایی"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_20%]"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="border-t border-line pt-4">
                <p className="text-2xl font-extrabold tracking-tight text-ink">
                  ۱۸ سال
                </p>
                <p className="mt-1 text-[10px] text-muted">تجربه بالینی</p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="text-2xl font-extrabold tracking-tight text-ink">
                  ۳٬۵۰۰+
                </p>
                <p className="mt-1 text-[10px] text-muted">ایمپلنت موفق</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <span className="eyebrow">داستان حرفه‌ای</span>
            <h2 className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.22] tracking-[-0.03em] text-ink">
              از دانشگاه تهران
              <br />
              تا کلینیک آرمان.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-8 text-ink-soft">
              {doctor.longBio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="mt-8 border-r-2 border-forest-600 pr-5 text-sm leading-8 text-forest-800">
              «بهترین درمان، درمانی است که با شرایط زندگی بیمار هماهنگ باشد؛ نه
              فقط بهترین گزینه روی کاغذ.»
            </blockquote>

            <ul className="mt-8 border-t border-line">
              {[
                ["تحصیلات", "دکترای دندانپزشکی — دانشگاه تهران"],
                ["تخصص", "فلوشیپ ایمپلنتولوژی — فرایبورگ"],
                ["عضویت", "انجمن ایمپلنتولوژی ایران"],
                ["آموزش", "مدرس دوره‌های طراحی لبخند"],
              ].map(([label, value]) => (
                <li
                  key={label}
                  className="flex items-start justify-between gap-4 border-b border-line py-3.5 text-xs"
                >
                  <span className="text-muted">{label}</span>
                  <span className="text-left font-semibold text-ink">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[10px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="مسیر حرفه‌ای"
            title="نقطه‌های مهم در ۱۸ سال."
            description="از تحصیل تا امروز؛ مسیری که با دقت، آموزش مستمر و درمان کم‌تهاجم شکل گرفته است."
          />

          <ol className="mt-10 border-t border-line">
            {timeline.map((item) => (
              <li
                key={item.year}
                className="grid gap-2 border-b border-line py-5 sm:grid-cols-[90px_1fr_1fr] sm:gap-6"
              >
                <span className="text-xs font-semibold tabular-nums text-forest-700">
                  {item.year}
                </span>
                <span className="text-sm font-semibold text-ink">
                  {item.title}
                </span>
                <span className="text-xs leading-6 text-muted">
                  {item.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-line bg-sand-soft">
        <div className="container-x section">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand">
                <Image
                  src="/images/care.jpg"
                  alt="گفت‌وگوی تیم درمان با بیمار"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <SectionHeading
                eyebrow="اصول کاری"
                title="چهار تصمیمی که همیشه ثابت می‌ماند."
              />
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="border-t border-ink/15 pt-4">
                    <h3 className="text-sm font-bold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-muted">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="تیم درمان"
            title="همراهانی که مسیر را کامل می‌کنند."
          />

          <div className="mt-10 border-t border-line">
            {doctors.map((member) => (
              <div
                key={member.id}
                className="grid gap-4 border-b border-line py-7 sm:grid-cols-[1fr_1.4fr_auto] sm:items-center"
              >
                <div>
                  <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                  <p className="mt-1 text-xs text-forest-700">{member.role}</p>
                </div>
                <p className="max-w-md text-xs leading-6 text-muted">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:justify-end">
                  {member.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/appointment" className="btn btn-dark btn-sm">
              رزرو نوبت
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
            <a href={`tel:${site.phoneHref}`} className="link-underline">
              تماس با پذیرش
            </a>
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBand />
      </div>
    </>
  );
}
