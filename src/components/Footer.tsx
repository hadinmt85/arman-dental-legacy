import Link from "next/link";
import { Icon } from "./Icon";
import { services, site } from "@/lib/site";

const quickLinks = [
  { href: "/services", label: "خدمات درمانی" },
  { href: "/about", label: "درباره پزشک" },
  { href: "/gallery", label: "نتایج درمان" },
  { href: "/appointment", label: "رزرو نوبت" },
  { href: "/contact", label: "تماس و آدرس" },
];

const socialLinks = [
  { href: site.instagram, label: "اینستاگرام" },
  { href: site.telegram, label: "تلگرام" },
  { href: site.whatsapp, label: "واتساپ" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-[#f7fbff]">
      <div className="container-x pb-6 pt-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white shadow-[0_12px_22px_-14px_rgba(30,79,216,0.9)]">
                <Icon name="tooth" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-lg font-extrabold leading-tight text-ink">
                  آرمان
                </span>
                <span className="block text-[9px] text-muted">
                  کلینیک دندانپزشکی
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-7 text-muted">
              کلینیک تخصصی دندانپزشکی در سعادت‌آباد تهران؛ درمان دیجیتال، تیم
              متخصص و مسیری شفاف تا لبخند نهایی.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-6 items-center gap-1 text-[11px] font-medium text-muted transition hover:text-brand-600"
                >
                  {social.label}
                  <Icon name="arrowUpLeft" className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] font-semibold tracking-[0.08em] text-muted">
              دسترسی سریع
            </h3>
            <ul className="mt-4 space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-8 items-center text-xs text-ink-soft transition hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[10px] font-semibold tracking-[0.08em] text-muted">
              اطلاعات تماس
            </h3>
            <div className="mt-4 space-y-3 text-xs text-ink-soft">
              <p className="flex items-start gap-2 leading-6">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                {site.address}
              </p>
              <a
                href={`tel:${site.phoneHref}`}
                dir="ltr"
                className="flex w-fit items-center gap-2 transition hover:text-brand-600"
              >
                <Icon name="phone" className="h-4 w-4 text-brand-500" />
                {site.phone}
              </a>
              <p className="flex items-start gap-2 leading-6 text-muted">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                شنبه تا چهارشنبه ۹ تا ۲۰
                <br />
                پنجشنبه ۹ تا ۱۴ — جمعه تعطیل
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              {services.slice(0, 3).map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="inline-flex min-h-6 items-center text-[10px] text-muted transition hover:text-brand-600"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-5 text-[10px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© ۱۴۰۵ کلینیک دندانپزشکی آرمان — تمامی حقوق محفوظ است.</p>
          <a
            href="/appointment"
            className="inline-flex min-h-6 items-center gap-1 font-semibold text-brand-600 transition hover:text-brand-700"
          >
            رزرو نوبت آنلاین
            <Icon name="arrowLeft" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
