"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/about", label: "درباره پزشک" },
  { href: "/gallery", label: "نتایج" },
  { href: "/contact", label: "تماس با ما" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-brand-900 text-white/70 md:block">
        <div className="container-x flex h-9 items-center justify-between gap-4 text-[10px]">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 font-medium text-white/80">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              پذیرش آنلاین فعال است
            </span>
            <span className="hidden items-center gap-2 lg:flex">
              <Icon name="clock" className="h-3.5 w-3.5 text-brand-300" />
              شنبه تا چهارشنبه ۹ تا ۲۰ — پنجشنبه ۹ تا ۱۴
            </span>
          </div>

          <a
            href={`tel:${site.phoneHref}`}
            dir="ltr"
            className="inline-flex items-center gap-2 font-semibold tracking-wide text-white transition hover:text-brand-200"
          >
            <Icon name="phone" className="h-3.5 w-3.5 text-brand-300" />
            {site.phone}
          </a>
        </div>
      </div>

      <div className="border-b border-line/80 bg-white/90 backdrop-blur-xl">
        <div className="container-x flex h-[76px] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white shadow-[0_12px_22px_-12px_rgba(30,79,216,0.8)]">
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

          <nav
            className="hidden items-center gap-7 md:flex"
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

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              dir="ltr"
              className="hidden text-[11px] font-semibold text-ink transition hover:text-brand-600 xl:block"
            >
              {site.phone}
            </a>

            <Link
              href="/appointment"
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              رزرو نوبت
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white text-ink transition hover:border-brand-200 hover:bg-brand-50 md:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div id="mobile-nav" className="border-t border-line bg-white md:hidden">
            <div className="container-x py-4">
              <nav aria-label="ناوبری موبایل">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-semibold transition ${
                      isActive(item.href)
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink-soft hover:bg-sky-soft"
                    }`}
                  >
                    {item.label}
                    <Icon
                      name="chevronLeft"
                      className="h-4 w-4 text-brand-500"
                    />
                  </Link>
                ))}
              </nav>

              <div className="mt-4 flex flex-col gap-2.5">
                <Link
                  href="/appointment"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full"
                >
                  رزرو نوبت
                  <Icon name="arrowLeft" className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${site.phoneHref}`}
                  dir="ltr"
                  className="text-center text-sm font-semibold text-muted"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
