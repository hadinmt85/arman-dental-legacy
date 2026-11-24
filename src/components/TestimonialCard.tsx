import { Icon } from "./Icon";
import type { testimonials } from "@/lib/site";

type Testimonial = (typeof testimonials)[number];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="border-t border-ink/15 pt-6">
      <div className="flex items-center gap-0.5 text-forest-600">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Icon key={index} name="star" className="h-3.5 w-3.5" />
        ))}
      </div>

      <blockquote className="mt-4 text-[15px] leading-8 text-ink-soft">
        «{testimonial.quote}»
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-100 text-[11px] font-bold text-forest-800">
          {testimonial.name.charAt(0)}
        </span>
        <span className="text-xs">
          <span className="block font-semibold text-ink">
            {testimonial.name}
          </span>
          <span className="mt-0.5 block text-muted">{testimonial.service}</span>
        </span>
      </figcaption>
    </figure>
  );
}
