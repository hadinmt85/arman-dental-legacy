import Link from "next/link";
import type { ReactNode } from "react";

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
    <section className="border-b border-line">
      <div className="container-x pb-14 pt-8 sm:pb-20 sm:pt-10">
        <nav
          aria-label="مسیر صفحه"
          className="flex items-center gap-2 text-[11px] text-muted"
        >
          <Link href="/" className="transition hover:text-ink">
            خانه
          </Link>
          <span className="text-line-strong">/</span>
          <span className="text-ink-soft">{crumb}</span>
        </nav>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 text-[clamp(2.5rem,5.2vw,4.4rem)] font-black leading-[1.1] tracking-[-0.04em] text-ink">
              {title}
            </h1>
          </div>

          <div className="md:col-span-4">
            <p className="max-w-md text-sm leading-8 text-muted">
              {description}
            </p>
            {children ? <div className="mt-6">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
