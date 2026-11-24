import Link from "next/link";
import { Icon } from "./Icon";
import type { Service } from "@/lib/site";

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  return (
    <article
      id={service.id}
      className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-soft"
    >
      <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-gold-100/0 blur-xl transition duration-500 group-hover:bg-gold-100/80" />

      <div className="relative flex items-center justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-50 text-navy-800 transition duration-300 group-hover:bg-navy-900 group-hover:text-gold-300">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-navy-50 px-3 py-1 text-[11px] font-semibold text-navy-700">
          <Icon name="clock" className="h-3.5 w-3.5 text-gold-600" />
          {service.duration}
        </span>
      </div>

      <h3 className="relative mt-5 text-lg font-extrabold text-navy-900">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm leading-7 text-muted">
        {detailed ? service.description : service.short}
      </p>

      {detailed ? (
        <ul className="relative mt-4 space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs font-medium text-navy-700"
            >
              <Icon
                name="check"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600"
              />
              {feature}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto">
        <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-navy-900/8 pt-4">
          <div>
            <span className="block text-[10px] text-muted">شروع هزینه</span>
            <span className="text-sm font-extrabold text-navy-900">
              {service.price}
            </span>
          </div>
          <Link
            href={detailed ? "/appointment" : `/services#${service.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-navy-700 transition hover:text-gold-600"
          >
            {detailed ? "رزرو نوبت" : "جزئیات خدمت"}
            <Icon name="arrowLeft" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
