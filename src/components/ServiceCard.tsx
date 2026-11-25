import Link from "next/link";
import { Icon } from "./Icon";
import { faDigits } from "@/lib/format";
import type { Service } from "@/lib/site";

type ServiceCardProps = {
  service: Service;
  index: number;
  detailed?: boolean;
};

export function ServiceCard({
  service,
  index,
  detailed = false,
}: ServiceCardProps) {
  const href = detailed ? "/appointment" : `/services#${service.id}`;

  return (
    <Link
      href={href}
      id={service.id}
      className="group flex h-full scroll-mt-28 flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <span className="text-[10px] tabular-nums tracking-widest text-muted">
          {faDigits(String(index).padStart(2, "0"))}
        </span>
      </div>

      <h3 className="mt-4 text-[15px] font-extrabold text-ink">
        {service.title}
      </h3>
      <p className="mt-1.5 text-[11px] leading-6 text-muted">
        {detailed ? service.description : service.short}
      </p>

      {detailed ? (
        <ul className="mt-3 space-y-1.5 border-t border-line pt-3">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-1.5 text-[10px] leading-5 text-ink-soft"
            >
              <Icon
                name="check"
                className="mt-0.5 h-3 w-3 shrink-0 text-mint-600"
              />
              {feature}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between gap-3 border-t border-line pt-3">
          <div>
            <span className="block text-[9px] text-muted">شروع هزینه</span>
            <span className="mt-0.5 block text-[11px] font-bold text-ink">
              {service.price}
            </span>
          </div>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
            <Icon name="arrowLeft" className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
