import Link from "next/link";
import { Icon } from "./Icon";
import { services, site } from "@/lib/site";

const quickLinks = [
  { href: "/services", label: "خدمات درمانی" },
  { href: "/about", label: "درباره دکتر رضایی" },
  { href: "/gallery", label: "گالری قبل و بعد" },
  { href: "/appointment", label: "رزرو نوبت آنلاین" },
  { href: "/contact", label: "تماس و آدرس" },
];

const socialLinks = [
  { href: site.instagram, label: "اینستاگرام", icon: "instagram" as const },
  { href: site.telegram, label: "تلگرام", icon: "telegram" as const },
  { href: site.whatsapp, label: "واتساپ", icon: "whatsapp" as const },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-950 text-navy-200">
      <div className="h-px bg-gradient-to-l from-transparent via-gold-500/50 to-transparent" />

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 text-gold-300 ring-1 ring-gold-500/35">
              <Icon name="tooth" className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold text-white">
                آرمان
              </span>
              <span className="block text-[10px] tracking-wide text-navy-300">
                کلینیک دندانپزشکی
              </span>
            </span>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-7 text-navy-300">
            کلینیک تخصصی دندانپزشکی آرمان در سعادت‌آباد تهران؛ ترکیبی از
            تجهیزات دیجیتال، تیم متخصص و درمان‌های کم‌تهاجم برای لبخندی سالم و
            طبیعی.
          </p>

          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-navy-200 transition hover:border-gold-500/40 hover:bg-white/5 hover:text-gold-300"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold text-white">دسترسی سریع</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-navy-300 transition hover:text-gold-300"
                >
                  <span className="h-1 w-1 rounded-full bg-gold-500/70" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold text-white">خدمات کلینیک</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-navy-300 transition hover:text-gold-300"
                >
                  <span className="h-1 w-1 rounded-full bg-gold-500/70" />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-bold text-white">اطلاعات تماس</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon
                name="pin"
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
              />
              <span className="leading-6 text-navy-300">{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Icon
                name="phone"
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
              />
              <span className="leading-6">
                <a
                  href={`tel:${site.phoneHref}`}
                  dir="ltr"
                  className="block text-navy-200 transition hover:text-gold-300"
                >
                  {site.phone}
                </a>
                <a
                  href={`tel:${site.mobileHref}`}
                  dir="ltr"
                  className="block text-navy-300 transition hover:text-gold-300"
                >
                  {site.mobile}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon
                name="clock"
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
              />
              <span className="leading-6 text-navy-300">
                شنبه تا چهارشنبه ۹ تا ۲۰
                <br />
                پنجشنبه ۹ تا ۱۴ — جمعه تعطیل
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-x flex flex-col gap-2 py-5 text-[11px] text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© ۱۴۰۵ کلینیک دندانپزشکی آرمان — تمامی حقوق محفوظ است.</p>
          <p>ساخته‌شده با تمرکز بر سلامت دهان و دندان</p>
        </div>
      </div>
    </footer>
  );
}
