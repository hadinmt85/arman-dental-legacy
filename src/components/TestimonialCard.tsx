import { Icon } from "./Icon";
import type { testimonials } from "@/lib/site";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-6 shadow-card">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 left-5 text-6xl font-black leading-none text-gold-200"
      >
        ”
      </span>

      <div className="flex items-center gap-1 text-gold-500">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Icon key={index} name="star" className="h-4 w-4" />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-7 text-navy-800">
        «{testimonial.quote}»
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-900/8 pt-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 text-sm font-bold text-gold-300">
          {testimonial.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-bold text-navy-900">
            {testimonial.name}
          </span>
          <span className="block text-[11px] text-muted">
            درمان: {testimonial.service}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
