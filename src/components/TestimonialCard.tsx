import { Icon } from "./Icon";
import type { testimonials } from "@/lib/site";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card">
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Icon key={index} name="star" className="h-3.5 w-3.5" />
        ))}
      </div>

      <blockquote className="mt-3 flex-1 text-xs leading-7 text-ink-soft">
        «{testimonial.quote}»
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-2.5 border-t border-line pt-4">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-700">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block text-[11px] font-semibold text-ink">
            {testimonial.name}
          </span>
          <span className="mt-0.5 block text-[9px] text-muted">
            {testimonial.service}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
