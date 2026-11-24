"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/about", label: "درباره پزشک" },
  { href: "/gallery", label: "قبل و بعد" },
  { href: "/contact", label: "تماس با ما" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-950 text-navy-100 md:block">
        <div className="container-x flex h-9 items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Icon name="pin" className="h-3.5 w-3.5 text-gold-400" />
              {site.addressShort}
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Icon name="clock" className="h-3.5 w-3.5 text-gold-400" />
              {site.hoursShort}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-1.5 transition hover:text-gold-300"
            >
              <Icon name="phone" className="h-3.5 w-3.5 text-gold-400" />
              <span dir="ltr" className="font-semibold tracking-wide">
                {site.phone}
              </span>
            </a>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <span className="hidden items-center gap-1.5 sm:flex">
              <Icon name="calendar" className="h-3.5 w-3.5 text-gold-400" />
              نوبت‌دهی آنلاین ۲۴ ساعته
            </span>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-navy-900/8 bg-cream/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_14px_34px_-30px_rgba(10,34,55,0.9)]" : ""
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
            aria-label="کلینیک دندانپزشکی آرمان - صفحه اصلی"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-900 text-gold-300 ring-1 ring-gold-500/35 transition group-hover:bg-navy-800">
              <Icon name="tooth" className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold text-navy-900">
                آرمان
              </span>
              <span className="block text-[10px] font-medium tracking-wide text-muted">
                کلینیک دندانپزشکی
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 md:flex lg:gap-8"
            aria-label="ناوبری اصلی"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={isActive(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneHref}`}
              className="hidden items-center gap-2 rounded-full border border-navy-900/10 px-4 py-2.5 text-xs font-bold text-navy-900 transition hover:border-navy-900/25 hover:bg-white xl:flex"
            >
              <Icon name="phone" className="h-4 w-4 text-gold-600" />
              تماس فوری
            </a>

            <Link
              href="/appointment"
              className="btn btn-gold btn-sm hidden sm:inline-flex"
            >
              <Icon name="calendar" className="h-4 w-4" />
              رزرو نوبت
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "بستن منوی موبایل" : "باز کردن منوی موبایل"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-navy-900/10 bg-white text-navy-900 transition hover:bg-navy-50 md:hidden"
            >
              <Icon
                name={menuOpen ? "close" : "menu"}
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div id="mobile-nav" className="md:hidden">
            <div className="container-x pb-5">
              <nav
                className="animate-rise rounded-2xl border border-navy-900/8 bg-white p-2 shadow-soft"
                aria-label="ناوبری موبایل"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive(item.href)
                        ? "bg-navy-50 text-navy-900"
                        : "text-navy-700 hover:bg-navy-50/70"
                    }`}
                  >
                    {item.label}
                    <Icon
                      name="chevronLeft"
                      className="h-4 w-4 text-gold-600"
                    />
                  </Link>
                ))}

                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-navy-900/8 p-2 pt-3">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="btn btn-outline btn-sm w-full"
                  >
                    <Icon name="phone" className="h-4 w-4" />
                    تماس
                  </a>
                  <Link
                    href="/appointment"
                    onClick={() => setMenuOpen(false)}
                    className="btn btn-gold btn-sm w-full"
                  >
                    <Icon name="calendar" className="h-4 w-4" />
                    رزرو نوبت
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
