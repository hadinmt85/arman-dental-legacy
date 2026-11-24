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
    label: "تلفن",
    value: site.phone,
    extra: site.mobile,
    href: `tel:${site.phoneHref}`,
    ltr: true,
  },
  {
    label: "آدرس",
    value: site.addressShort,
    extra: "مسیریابی روی نقشه",
    href: site.mapUrl,
    ltr: false,
  },
  {
    label: "ساعات کاری",
    value: "شنبه تا چهارشنبه ۹ تا ۲۰",
    extra: "پنجشنبه ۹ تا ۱۴ — جمعه تعطیل",
    ltr: false,
  },
  {
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
    <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-3xl border border-line bg-[#eef1ea]">
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
            <rect width="58" height="58" fill="#eef1ea" />
            <rect
              x="6"
              y="6"
              width="46"
              height="46"
              rx="5"
              fill="#e5e9e1"
            />
          </pattern>
        </defs>

        <rect width="800" height="460" fill="url(#light-blocks)" />
        <rect x="560" y="40" width="170" height="120" rx="16" fill="#dfe8de" />
        <rect x="70" y="300" width="140" height="110" rx="16" fill="#dfe8de" />

        <g
          stroke="#fafaf7"
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
          stroke="#d3dad2"
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
          stroke="#2f6a56"
          strokeWidth="2.5"
          strokeDasharray="9 8"
          fill="none"
          opacity="0.65"
        />

        <circle cx="420" cy="214" r="44" fill="#2f6a56" opacity="0.08" />
        <circle cx="420" cy="214" r="24" fill="#2f6a56" opacity="0.12" />
        <g transform="translate(420 206)">
          <path
            d="M0 -18c-8 0-14 6-14 14 0 11 14 24 14 24s14-13 14-24c0-8-6-14-14-14Z"
            fill="#2f6a56"
          />
          <circle cy="-4" r="4.5" fill="#f7f6f2" />
        </g>
      </svg>

      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-line bg-white/95 p-5 backdrop-blur sm:inset-x-6 sm:bottom-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-muted">کلینیک دندانپزشکی آرمان</p>
            <p className="mt-1.5 max-w-sm text-xs leading-6 text-ink">
              {site.address}
            </p>
          </div>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm"
          >
            <Icon name="map" className="h-3.5 w-3.5" />
            مسیریابی
          </a>
        </div>
      </div>

      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/90 px-3 py-1.5 text-[10px] font-medium text-ink backdrop-blur sm:right-6 sm:top-6">
        <span className="h-1.5 w-1.5 rounded-full bg-forest-600" />
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
        <div className="flex flex-wrap gap-4">
          <a href={`tel:${site.phoneHref}`} className="btn btn-dark btn-sm">
            <Icon name="phone" className="h-3.5 w-3.5" />
            تماس فوری
          </a>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs"
          >
            مسیریابی
            <Icon name="arrowUpLeft" className="h-3.5 w-3.5" />
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-8 border-t border-ink/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card) => (
              <div key={card.label}>
                <p className="text-[10px] tracking-wide text-muted">
                  {card.label}
                </p>
                <p
                  dir={card.ltr ? "ltr" : undefined}
                  className={`mt-2 text-sm font-semibold text-ink ${
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
                    className="mt-2 inline-flex items-center gap-1 text-[10px] text-muted transition hover:text-forest-700"
                  >
                    {card.extra}
                    <Icon name="arrowUpLeft" className="h-3 w-3" />
                  </a>
                ) : (
                  <p className="mt-2 text-[10px] text-muted">{card.extra}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col gap-6">
              <MapArt />

              <div className="rounded-3xl border border-line bg-white p-6">
                <h2 className="text-sm font-bold text-ink">راه‌های دسترسی</h2>
                <ul className="mt-4 border-t border-line">
                  {access.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 border-b border-line py-3 text-[11px] leading-6 text-muted last:border-0"
                    >
                      <Icon
                        name="check"
                        className="mt-1 h-3 w-3 shrink-0 text-forest-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
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
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted transition hover:text-ink"
                    >
                      {social.label}
                      <Icon name="arrowUpLeft" className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBand
          title="آماده‌ای اولین قدم را برداری؟"
          text="نوبتت را آنلاین رزرو کن یا برای مشاوره سریع با پذیرش کلینیک تماس بگیر."
        />
      </div>
    </>
  );
}
