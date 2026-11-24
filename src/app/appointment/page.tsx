import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "رزرو نوبت آنلاین",
  description:
    "رزرو آنلاین نوبت در کلینیک دندانپزشکی آرمان؛ انتخاب خدمت، روز و ساعت مراجعه در سه مرحله ساده.",
  alternates: { canonical: "/appointment" },
};

const benefits = [
  {
    title: "در کمتر از ۲ دقیقه",
    text: "بدون تماس تلفنی و انتظار در صف؛ زمان مراجعه را خودت انتخاب می‌کنی.",
  },
  {
    title: "ساعت‌های واقعی",
    text: "زمان‌های آزاد کلینیک را می‌بینی و هر کدام که مناسب‌تر است انتخاب می‌کنی.",
  },
  {
    title: "تأیید سریع",
    text: "پس از ثبت، کارشناس پذیرش برای تأیید نهایی با تو تماس می‌گیرد.",
  },
];

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        crumb="رزرو نوبت"
        eyebrow="نوبت‌دهی آنلاین"
        title="زمانت را انتخاب کن."
        description="خدمت، روز و ساعت آزاد را انتخاب کن و اطلاعات تماس را وارد کن. تأیید نهایی توسط پذیرش انجام می‌شود."
      >
        <div className="flex items-center gap-2 text-[11px] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-600" />
          </span>
          رزرو آنلاین ۲۴ ساعته فعال است
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-8 min-[900px]:grid-cols-[1.55fr_1fr] min-[900px]:items-start">
          <AppointmentForm />

          <aside className="space-y-8 min-[900px]:sticky min-[900px]:top-28">
            <div className="border-t border-ink/15 pt-5">
              <h2 className="text-sm font-bold text-ink">چرا آنلاین؟</h2>
              <ul className="mt-5 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.title}>
                    <p className="text-xs font-semibold text-ink">
                      {benefit.title}
                    </p>
                    <p className="mt-1 text-[10px] leading-5 text-muted">
                      {benefit.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-forest-900 p-6 text-white">
              <p className="text-[10px] text-white/55">
                ترجیح می‌دهی تلفنی رزرو کنی؟
              </p>
              <a
                href={`tel:${site.phoneHref}`}
                dir="ltr"
                className="mt-2 block text-lg font-bold tracking-wide text-white transition hover:text-forest-200"
              >
                {site.phone}
              </a>
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-[10px] leading-5 text-white/60">
                <p>شنبه تا چهارشنبه ۹ تا ۲۰ — پنجشنبه ۹ تا ۱۴</p>
                <p>{site.addressShort}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 text-[10px] leading-5 text-muted">
              <span className="flex items-center gap-1.5 font-semibold text-ink">
                <Icon name="info" className="h-3.5 w-3.5 text-forest-600" />
                نسخه نمایشی
              </span>
              نوبت‌ها فقط در مرورگر تو ذخیره می‌شوند. برای رزرو واقعی با کلینیک
              تماس بگیر.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
