import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-grid mask-fade opacity-60" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-x relative mx-auto max-w-xl text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-gold-400/30 bg-white/5 text-gold-300">
          <Icon name="tooth" className="h-8 w-8" />
        </span>
        <p className="mt-6 text-6xl font-black text-gold-300">۴۰۴</p>
        <h1 className="mt-3 text-2xl sm:text-3xl">این صفحه پیدا نشد</h1>
        <p className="mt-4 text-sm leading-7 text-navy-100">
          ممکن است آدرس تغییر کرده باشد یا صفحه حذف شده باشد. می‌توانید از صفحه
          اصلی شروع کنید یا نوبت خود را رزرو کنید.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-gold">
            صفحه اصلی
            <Icon name="arrowLeft" className="h-4 w-4" />
          </Link>
          <Link href="/appointment" className="btn btn-on-dark">
            رزرو نوبت
          </Link>
        </div>
      </div>
    </section>
  );
}
