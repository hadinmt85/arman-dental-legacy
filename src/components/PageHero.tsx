import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-grid mask-fade opacity-60" />
      <div className="absolute -right-28 -top-24 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-navy-500/35 blur-3xl" />

      <div className="container-x relative py-12 sm:py-16 lg:py-20">
        <nav
          aria-label="مسیر صفحه"
          className="flex items-center gap-2 text-[11px] text-navy-300"
        >
          <Link href="/" className="transition hover:text-gold-300">
            خانه
          </Link>
          <Icon name="chevronLeft" className="h-3 w-3" />
          <span className="text-gold-300">{crumb}</span>
        </nav>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow-light">{eyebrow}</span>
            <h1 className="mt-4 text-3xl leading-[1.35] sm:text-4xl lg:text-[2.85rem]">
              {title}
            </h1>
            <p className="mt-4 text-sm leading-8 text-navy-100 sm:text-base">
              {description}
            </p>
          </div>
          {children ? <div className="shrink-0">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
