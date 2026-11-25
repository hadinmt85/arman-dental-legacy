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
        <Link href="/appointment" className="btn btn-primary btn-sm">
          رزرو مشاوره
          <Icon name="arrowLeft" className="h-3.5 w-3.5" />
        </Link>
      </PageHero>

      <section className="container-x pt-8">
        <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft">
          <div className="grid md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[340px] bg-sky md:min-h-[520px]">
              <Image
                src="/images/doctor.jpg"
                alt="پرتره دکتر آرمان رضایی"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_20%]"
              />
              <div className="absolute bottom-4 right-4 rounded-xl border border-line bg-white/90 px-3 py-2 text-[9px] backdrop-blur">
                <b className="block text-[12px] text-ink">۱۸ سال</b>
                تجربه بالینی
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <span className="eyebrow">داستان حرفه‌ای</span>
              <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.22] tracking-[-0.045em] text-ink">
                از دانشگاه تهران
                <br />
                تا کلینیک آرمان.
              </h2>
              <p className="mt-1.5 text-[11px] font-semibold text-brand-600">
                {doctor.role}
              </p>

              <div className="mt-4 space-y-3 text-[11.5px] leading-7 text-ink-soft">
                {doctor.longBio.slice(0, 2).map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-5 rounded-xl border-r-2 border-brand-600 bg-brand-50/70 px-4 py-3 text-[11px] leading-6 text-brand-800">
                «بهترین درمان، درمانی است که با شرایط زندگی بیمار هماهنگ باشد؛
                نه فقط بهترین گزینه روی کاغذ.»
              </blockquote>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {doctor.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="mt-4 grid gap-2">
                {[
                  "دکترای دندانپزشکی — دانشگاه علوم پزشکی تهران",
                  "فلوشیپ ایمپلنتولوژی — دانشگاه فرایبورگ آلمان",
                  "عضو انجمن ایمپلنتولوژی ایران",
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
                <Link href="/appointment" className="btn btn-primary btn-sm">
                  رزرو مشاوره
                  <Icon name="arrowLeft" className="h-3.5 w-3.5" />
                </Link>
                <a href={`tel:${site.phoneHref}`} className="link-underline text-xs">
                  تماس با پذیرش
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line bg-white p-5 text-center shadow-card"
              >
                <p className="text-2xl font-extrabold tracking-tight text-brand-600 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[10px] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionHeading
                eyebrow="مسیر حرفه‌ای"
                title="نقطه‌های مهم در ۱۸ سال."
                description="از تحصیل تا امروز؛ مسیری که با دقت، آموزش مستمر و درمان کم‌تهاجم شکل گرفته است."
              />
            </div>

            <div className="md:col-span-8">
              <ol className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                {timeline.map((item) => (
                  <li
                    key={item.year}
                    className="grid gap-1.5 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[76px_1fr_1.2fr] sm:items-baseline sm:gap-4"
                  >
                    <span className="text-[11px] font-bold text-brand-600">
                      {item.year}
                    </span>
                    <span className="text-[12px] font-bold text-ink">
                      {item.title}
                    </span>
                    <span className="text-[10px] leading-5 text-muted">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x section">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sky">
                <Image
                  src="/images/care.jpg"
                  alt="گفت‌وگوی تیم درمان با بیمار"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="اصول کاری"
                title="چهار تصمیمی که همیشه ثابت می‌ماند."
              />
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-xl border border-line bg-sky-soft/60 p-4"
                  >
                    <h3 className="flex items-center gap-2 text-[11px] font-bold text-ink">
                      <Icon
                        name="checkCircle"
                        className="h-3.5 w-3.5 text-mint-600"
                      />
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-[9.5px] leading-5 text-muted">
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
            description="در آرمان، هر بیمار توسط تیمی هماهنگ از متخصصان و دستیاران همراهی می‌شود."
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {doctors.map((member) => (
              <div
                key={member.id}
                className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-card sm:flex-row sm:items-start"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-lg font-extrabold text-brand-700">
                  {member.name.replace("دکتر ", "").charAt(0)}
                </span>
                <div>
                  <h3 className="text-[13px] font-bold text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-semibold text-brand-600">
                    {member.role}
                  </p>
                  <p className="mt-2 text-[10px] leading-6 text-muted">
                    {member.bio}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {member.tags.map((tag) => (
                      <span key={tag} className="chip">
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

      <div className="pb-16 sm:pb-20">
        <CtaBand
          title="دوست داری درباره برنامه درمانی خودت بدانی؟"
          text="در یک جلسه مشاوره، وضعیت دهان و دندان بررسی و پلن درمانی متناسب با شرایط شما ارائه می‌شود."
        />
      </div>
    </>
  );
}
