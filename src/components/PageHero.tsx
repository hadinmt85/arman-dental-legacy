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
    <section className="relative overflow-hidden border-b border-line bg-page-soft">
      <div className="pointer-events-none absolute -left-24 top-6 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-mint-200/30 blur-3xl" />

      <div className="container-x relative pb-12 pt-7 sm:pb-16 sm:pt-9">
        <nav
          aria-label="مسیر صفحه"
          className="flex items-center gap-2 text-[10px] text-muted"
        >
          <Link href="/" className="transition hover:text-brand-600">
            خانه
          </Link>
          <Icon name="chevronLeft" className="h-3 w-3 text-line-strong" />
          <span className="text-ink-soft">{crumb}</span>
        </nav>

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-4 text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.05em] text-ink">
              {title}
            </h1>
          </div>

          <div className="md:col-span-4">
            <p className="max-w-md text-xs leading-7 text-muted sm:text-[13px]">
              {description}
            </p>
            {children ? <div className="mt-5">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
