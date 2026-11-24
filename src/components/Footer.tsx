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
    <footer className="border-t border-line bg-paper">
      <div className="container-x pb-8 pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-2xl font-black tracking-[-0.04em] text-ink"
            >
              آرمان<span className="text-forest-600">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-8 text-muted">
              کلینیک دندانپزشکی آرمان در سعادت‌آباد تهران؛ درمان تخصصی، تجهیزات
              دیجیتال و مسیری شفاف از مشاوره تا لبخند نهایی.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((social) => (
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

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold tracking-[0.14em] text-muted">
              دسترسی سریع
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition hover:text-forest-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[11px] font-semibold tracking-[0.14em] text-muted">
              اطلاعات تماس
            </h3>
            <div className="mt-5 space-y-4 text-sm text-ink-soft">
              <p className="leading-7">{site.address}</p>
              <div className="flex flex-col gap-1">
                <a
                  href={`tel:${site.phoneHref}`}
                  dir="ltr"
                  className="w-fit transition hover:text-forest-700"
                >
                  {site.phone}
                </a>
                <a
                  href={`tel:${site.mobileHref}`}
                  dir="ltr"
                  className="w-fit text-muted transition hover:text-forest-700"
                >
                  {site.mobile}
                </a>
              </div>
              <p className="text-xs leading-6 text-muted">
                شنبه تا چهارشنبه ۹ تا ۲۰
                <br />
                پنجشنبه ۹ تا ۱۴ — جمعه تعطیل
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {services.slice(0, 3).map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="inline-flex min-h-6 items-center text-[11px] text-muted transition hover:text-forest-700"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© ۱۴۰۵ کلینیک دندانپزشکی آرمان</p>
          <p>تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
