import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-xl border-t border-ink/15 pt-10 text-center">
          <span className="text-[11px] font-medium tracking-[0.2em] text-muted">
            ۴۰۴
          </span>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-[1.15] tracking-[-0.04em] text-ink">
            این صفحه پیدا نشد.
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-8 text-muted">
            ممکن است آدرس تغییر کرده باشد یا صفحه حذف شده باشد. از صفحه اصلی شروع
            کن یا نوبتت را رزرو کن.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn btn-dark btn-sm">
              صفحه اصلی
              <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            </Link>
            <Link href="/appointment" className="btn btn-outline btn-sm">
              رزرو نوبت
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
