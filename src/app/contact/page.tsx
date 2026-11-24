import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "آدرس، تلفن، ساعات کاری و فرم تماس کلینیک دندانپزشکی آرمان در سعادت‌آباد تهران.",
  alternates: { canonical: "/contact" },
};

const infoCards = [
  {
    icon: "phone" as const,
    label: "تلفن کلینیک",
    value: site.phone,
    extra: site.mobile,
    href: `tel:${site.phoneHref}`,
    ltr: true,
  },
  {
    icon: "pin" as const,
    label: "آدرس",
    value: site.addressShort,
    extra: "مشاهده روی نقشه",
    href: site.mapUrl,
    ltr: false,
  },
  {
    icon: "clock" as const,
    label: "ساعات کاری",
    value: "شنبه تا چهارشنبه ۹ تا ۲۰",
    extra: "پنجشنبه ۹ تا ۱۴",
    ltr: false,
  },
  {
    icon: "mail" as const,
    label: "ایمیل",
    value: site.email,
    extra: "پاسخ در ۲۴ ساعت کاری",
    href: `mailto:${site.email}`,
    ltr: true,
  },
];

const access = [
  "پارکینگ اختصاصی در طبقه منفی یک ساختمان",
  "۵ دقیقه پیاده از ایستگاه مترو میدان دریا",
  "دسترسی آسان با خطوط اتوبوس بلوار دریا",
];

function MapArt() {
  return (
    <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-4xl bg-navy-900">
      <svg
        viewBox="0 0 800 460"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="city-blocks"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <rect width="64" height="64" fill="#0c273c" />
            <rect
              x="6"
              y="6"
              width="50"
              height="50"
              rx="5"
              fill="#11344e"
            />
          </pattern>
        </defs>

        <rect width="800" height="460" fill="url(#city-blocks)" />
        <rect width="800" height="460" fill="#0a2237" opacity="0.35" />

        <g
          stroke="#1c4966"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        >
          <path d="M-30 130 C 150 105 250 190 410 158 S 650 88 830 132" />
          <path d="M90 -30 C 130 120 70 260 128 490" />
          <path d="M690 -30 C 650 120 732 270 668 490" />
          <path d="M-30 360 C 190 300 320 390 470 340 S 690 290 830 330" />
        </g>

        <g stroke="#2b6183" strokeWidth="4" fill="none" opacity="0.7">
          <path d="M-30 130 C 150 105 250 190 410 158 S 650 88 830 132" />
          <path d="M90 -30 C 130 120 70 260 128 490" />
          <path d="M-30 360 C 190 300 320 390 470 340 S 690 290 830 330" />
        </g>

        <path
          d="M-30 250 C 170 230 330 270 560 230 S 740 200 830 215"
          stroke="#c39a3b"
          strokeWidth="3"
          strokeDasharray="10 9"
          fill="none"
          opacity="0.75"
        />

        <circle cx="420" cy="215" r="46" fill="#c39a3b" opacity="0.08" />
        <circle cx="420" cy="215" r="28" fill="#c39a3b" opacity="0.12" />
        <g transform="translate(420 206)">
          <path
            d="M0 -20c-9 0-16 7-16 16 0 12 16 27 16 27s16-15 16-27c0-9-7-16-16-16Z"
            fill="#d5b25d"
          />
          <circle cy="-5" r="5.5" fill="#0a2237" />
        </g>
      </svg>

      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-navy-950/85 p-5 backdrop-blur sm:inset-x-6 sm:bottom-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-navy-300">
              کلینیک دندانپزشکی آرمان
            </p>
            <p className="mt-1.5 max-w-sm text-xs leading-6 text-white">
              {site.address}
            </p>
          </div>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-sm"
          >
            <Icon name="map" className="h-3.5 w-3.5" />
            مسیریابی
          </a>
        </div>
      </div>

      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur sm:right-6 sm:top-6">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
        محدوده سعادت‌آباد
      </span>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="تماس با ما"
        eyebrow="ارتباط با کلینیک"
        title="ما همین‌جا هستیم تا کمکتان کنیم"
        description="برای رزرو نوبت، مشاوره درمانی یا هر سؤالی درباره خدمات، از راه‌های زیر با ما در ارتباط باشید."
      >
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${site.phoneHref}`} className="btn btn-gold">
            <Icon name="phone" className="h-4 w-4" />
            تماس فوری
          </a>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-dark"
          >
            <Icon name="map" className="h-4 w-4" />
            مسیریابی
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="rounded-3xl border border-navy-900/8 bg-white p-5 shadow-card"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-50 text-navy-800">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[11px] text-muted">{card.label}</p>
                <p
                  dir={card.ltr ? "ltr" : undefined}
                  className={`mt-1 text-sm font-bold text-navy-900 ${
                    card.ltr ? "text-right" : ""
                  }`}
                >
                  {card.value}
                </p>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-gold-600 transition hover:text-gold-700"
                  >
                    {card.extra}
                    <Icon name="chevronLeft" className="h-3 w-3" />
                  </a>
                ) : (
                  <p className="mt-2 text-[10px] text-muted">{card.extra}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col gap-4">
              <MapArt />

              <div className="rounded-3xl border border-navy-900/8 bg-white p-5 shadow-card">
                <h2 className="flex items-center gap-2 text-sm font-extrabold text-navy-900">
                  <Icon name="map" className="h-4 w-4 text-gold-600" />
                  راه‌های دسترسی
                </h2>
                <ul className="mt-3 space-y-2">
                  {access.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[11px] leading-6 text-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-navy-900/8 pt-4">
                  <span className="text-[10px] text-muted">شبکه‌های اجتماعی:</span>
                  {[
                    { href: site.instagram, label: "اینستاگرام", icon: "instagram" as const },
                    { href: site.telegram, label: "تلگرام", icon: "telegram" as const },
                    { href: site.whatsapp, label: "واتساپ", icon: "whatsapp" as const },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid h-8 w-8 place-items-center rounded-full border border-navy-900/10 text-navy-700 transition hover:border-gold-400 hover:bg-gold-50 hover:text-gold-600"
                    >
                      <Icon name={social.icon} className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="container-x pt-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <SectionHeading
              align="start"
              eyebrow="پاسخگویی"
              title="قبل از تماس، شاید پاسخ اینجا باشد"
              description="بیشتر سؤالات بیماران درباره نوبت‌دهی، تعرفه‌ها و بیمه است. اگر پاسخ خود را پیدا نکردید، فرم تماس یا تلفن در دسترس است."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: "clock" as const,
                  title: "زمان پاسخگویی تلفنی",
                  text: "در ساعات کاری کلینیک؛ خارج از این بازه پیام بگذارید.",
                },
                {
                  icon: "shield" as const,
                  title: "بیمه تکمیلی",
                  text: "پیش از مراجعه نام بیمه خود را به پذیرش اطلاع دهید.",
                },
                {
                  icon: "calendar" as const,
                  title: "تغییر نوبت",
                  text: "تا ۲۴ ساعت قبل، لغو یا جابه‌جایی رایگان است.",
                },
                {
                  icon: "heart" as const,
                  title: "شرایط اورژانس",
                  text: "درد شدید یا شکستگی دندان؟ تلفنی هماهنگ کنید.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-navy-900/8 bg-cream/60 p-4"
                >
                  <Icon name={item.icon} className="h-4 w-4 text-gold-600" />
                  <p className="mt-2 text-xs font-bold text-navy-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[10px] leading-5 text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-24">
        <CtaBand
          title="آماده‌اید اولین قدم را بردارید؟"
          text="نوبت خود را آنلاین رزرو کنید یا برای مشاوره سریع با پذیرش کلینیک تماس بگیرید."
        />
      </div>
    </>
  );
}
