import Link from "next/link";
import { Icon } from "./Icon";
import { faDigits } from "@/lib/format";
import type { Service } from "@/lib/site";

type ServiceRowProps = {
  service: Service;
  index: number;
  detailed?: boolean;
};

export function ServiceRow({ service, index, detailed = false }: ServiceRowProps) {
  const href = detailed ? "/appointment" : `/services#${service.id}`;

  return (
    <article
      id={service.id}
      className="group relative scroll-mt-24 border-b border-line"
    >
      <Link
        href={href}
        aria-label={`${service.title} — ${detailed ? "رزرو نوبت" : "جزئیات خدمت"}`}
        className="absolute inset-0 z-10"
      />

      <div className="grid gap-3 py-7 sm:grid-cols-[36px_1fr_auto] sm:gap-6">
        <span className="text-[11px] font-medium tabular-nums text-muted">
          {faDigits(String(index).padStart(2, "0"))}
        </span>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-lg font-bold tracking-tight text-ink transition group-hover:text-forest-700 sm:text-xl">
              {service.title}
            </h3>
            <span className="text-[11px] text-muted">{service.duration}</span>
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
            {detailed ? service.description : service.short}
          </p>

          {detailed ? (
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-1.5 text-[11px] text-ink-soft"
                >
                  <Icon name="check" className="h-3 w-3 text-forest-600" />
                  {feature}
                </li>
              ))}
            </ul>
          ) : (
            <span className="mt-3 block text-xs font-semibold text-ink sm:hidden">
              {service.price}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:gap-4">
          <span
            className={`text-xs font-semibold text-ink ${
              detailed ? "" : "hidden sm:block"
            }`}
          >
            {service.price}
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition duration-200 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
            <Icon name="arrowUpLeft" className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
