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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-xl">
      <div className="container-x flex h-[74px] items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-baseline gap-2.5"
          aria-label="کلینیک دندانپزشکی آرمان - صفحه اصلی"
        >
          <span className="text-[23px] font-black tracking-[-0.04em] text-ink">
            آرمان<span className="text-forest-600">.</span>
          </span>
          <span className="hidden text-[10px] font-medium tracking-wide text-muted sm:block">
            کلینیک دندانپزشکی
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
            className="hidden text-[12px] font-medium text-muted transition hover:text-ink xl:block"
          >
            {site.phone}
          </a>

          <Link
            href="/appointment"
            className="btn btn-dark btn-sm hidden sm:inline-flex"
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
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-ink/30 md:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper md:hidden"
        >
          <div className="container-x py-4">
            <nav aria-label="ناوبری موبایل">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between border-b border-line py-4 text-base font-semibold transition ${
                    isActive(item.href) ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                  <Icon
                    name="arrowLeft"
                    className="h-4 w-4 text-muted"
                  />
                </Link>
              ))}
            </nav>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/appointment"
                onClick={() => setMenuOpen(false)}
                className="btn btn-dark w-full"
              >
                رزرو نوبت
                <Icon name="arrowLeft" className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                dir="ltr"
                className="text-center text-sm font-medium text-muted"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
