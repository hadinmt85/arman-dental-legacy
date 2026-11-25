import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
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
    extra: "مسیریابی روی نقشه",
    href: site.mapUrl,
    ltr: false,
  },
  {
    icon: "clock" as const,
    label: "ساعات کاری",
    value: "شنبه تا چهارشنبه ۹ تا ۲۰",
    extra: "پنجشنبه ۹ تا ۱۴ — جمعه تعطیل",
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
  "پارکینگ اختصاصی در طبقه منفی یک",
  "۵ دقیقه پیاده از مترو میدان دریا",
  "دسترسی با خطوط اتوبوس بلوار دریا",
];

function MapArt() {
  return (
    <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-2xl border border-line bg-[#eef5fc]">
      <svg
        viewBox="0 0 800 460"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="light-blocks"
            width="58"
            height="58"
            patternUnits="userSpaceOnUse"
          >
            <rect width="58" height="58" fill="#eef5fc" />
            <rect
              x="6"
              y="6"
              width="46"
              height="46"
              rx="5"
              fill="#e2edf9"
            />
          </pattern>
        </defs>

        <rect width="800" height="460" fill="url(#light-blocks)" />
        <rect x="560" y="40" width="170" height="120" rx="16" fill="#dff3ea" />
        <rect x="70" y="300" width="140" height="110" rx="16" fill="#dff3ea" />

        <g
          stroke="#fbfdff"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M-30 130 C 150 105 250 190 410 158 S 650 88 830 132" />
          <path d="M90 -30 C 130 120 70 260 128 490" />
          <path d="M690 -30 C 650 120 732 270 668 490" />
          <path d="M-30 360 C 190 300 320 390 470 340 S 690 290 830 330" />
        </g>

        <g
          stroke="#cfdded"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M-30 130 C 150 105 250 190 410 158 S 650 88 830 132" />
          <path d="M90 -30 C 130 120 70 260 128 490" />
          <path d="M-30 360 C 190 300 320 390 470 340 S 690 290 830 330" />
        </g>

        <path
          d="M-30 250 C 170 230 330 270 560 230 S 740 200 830 215"
          stroke="#1e4fd8"
          strokeWidth="2.5"
          strokeDasharray="9 8"
          fill="none"
          opacity="0.55"
        />

        <circle cx="420" cy="214" r="44" fill="#1e4fd8" opacity="0.08" />
        <circle cx="420" cy="214" r="24" fill="#1e4fd8" opacity="0.12" />
        <g transform="translate(420 206)">
          <path
            d="M0 -18c-8 0-14 6-14 14 0 11 14 24 14 24s14-13 14-24c0-8-6-14-14-14Z"
            fill="#1e4fd8"
          />
          <circle cy="-4" r="4.5" fill="#ffffff" />
        </g>
      </svg>

      <div className="absolute inset-x-3 bottom-3 rounded-xl border border-line bg-white/95 p-4 backdrop-blur sm:inset-x-4 sm:bottom-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[9px] text-muted">کلینیک دندانپزشکی آرمان</p>
            <p className="mt-1 max-w-[280px] text-[10px] leading-5 text-ink">
              {site.address}
            </p>
          </div>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <Icon name="map" className="h-3.5 w-3.5" />
            مسیریابی
          </a>
        </div>
      </div>

      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/90 px-2.5 py-1.5 text-[9px] font-medium text-ink backdrop-blur sm:right-4 sm:top-4">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
        سعادت‌آباد
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
        title="راه ارتباطی با ما."
        description="برای رزرو نوبت، مشاوره درمانی یا هر سؤالی درباره خدمات، از راه‌های زیر با ما در ارتباط باش."
      >
        <div className="flex flex-wrap gap-2.5">
          <a href={`tel:${site.phoneHref}`} className="btn btn-primary btn-sm">
            <Icon name="phone" className="h-3.5 w-3.5" />
            تماس فوری
          </a>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            مسیریابی
            <Icon name="arrowUpLeft" className="h-3.5 w-3.5" />
          </a>
        </div>
      </PageHero>

      <section className="container-x pb-16 pt-8 sm:pb-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-line bg-white p-4 shadow-card"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={card.icon} className="h-4 w-4" />
              </span>
              <p className="mt-3 text-[9px] text-muted">{card.label}</p>
              <p
                dir={card.ltr ? "ltr" : undefined}
                className={`mt-1 text-[12px] font-bold text-ink ${
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
                  className="mt-2 inline-flex min-h-6 items-center gap-1 text-[9px] font-medium text-brand-600 transition hover:text-brand-700"
                >
                  {card.extra}
                  <Icon name="arrowUpLeft" className="h-2.5 w-2.5" />
                </a>
              ) : (
                <p className="mt-2 text-[9px] text-muted">{card.extra}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 min-[900px]:grid-cols-2 min-[900px]:items-stretch">
          <div className="flex flex-col gap-4">
            <MapArt />

            <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h2 className="text-[12px] font-bold text-ink">
                راه‌های دسترسی
              </h2>
              <ul className="mt-3 space-y-2">
                {access.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[9.5px] leading-5 text-muted"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-3 w-3 shrink-0 text-mint-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-3">
                {[
                  { href: site.instagram, label: "اینستاگرام" },
                  { href: site.telegram, label: "تلگرام" },
                  { href: site.whatsapp, label: "واتساپ" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-6 items-center gap-1 text-[10px] font-medium text-muted transition hover:text-brand-600"
                  >
                    {social.label}
                    <Icon name="arrowUpLeft" className="h-2.5 w-2.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBand
          title="آماده‌ای اولین قدم را برداری؟"
          text="نوبتت را آنلاین رزرو کن یا برای مشاوره سریع با پذیرش کلینیک تماس بگیر."
        />
      </div>
    </>
  );
}
