import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="bg-page-soft section">
      <div className="container-x">
        <div className="mx-auto max-w-lg rounded-2xl border border-line bg-white p-8 text-center shadow-card sm:p-10">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
            <Icon name="tooth" className="h-7 w-7" />
          </span>
          <span className="mt-4 inline-flex items-center rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-white">
            ۴۰۴
          </span>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            این صفحه پیدا نشد.
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-muted">
            ممکن است آدرس تغییر کرده باشد یا صفحه حذف شده باشد. از صفحه اصلی شروع
            کن یا نوبتت را رزرو کن.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <Link href="/" className="btn btn-primary btn-sm">
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
