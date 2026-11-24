import Link from "next/link";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  text?: string;
  className?: string;
};

export function CtaBand({
  title = "اولین قدم برای لبخند تازه را بردارید",
  text = "در چند دقیقه نوبت خود را آنلاین رزرو کنید؛ کارشناسان ما برای تأیید زمان و راهنمایی پیش از مراجعه با شما تماس می‌گیرند.",
  className = "",
}: CtaBandProps) {
  return (
    <section className={`container-x ${className}`}>
      <div className="relative overflow-hidden rounded-4xl bg-navy-900 px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
        <div className="absolute inset-0 bg-grid mask-fade opacity-70" />
        <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-52 w-52 rounded-full bg-navy-500/30 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="eyebrow eyebrow-light">رزرو نوبت</span>
            <h2 className="mt-4 text-2xl leading-[1.4] text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-navy-100">
              {text}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/appointment" className="btn btn-gold">
              رزرو نوبت آنلاین
              <Icon name="arrowLeft" className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn btn-on-dark">
              <Icon name="phone" className="h-4 w-4" />
              تماس با کلینیک
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
