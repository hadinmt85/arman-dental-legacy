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
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-[10px] font-medium text-brand-700">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-500" />
          </span>
          رزرو آنلاین ۲۴ ساعته فعال است
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-8 min-[900px]:grid-cols-[1.55fr_1fr] min-[900px]:items-start">
          <AppointmentForm />

          <aside className="space-y-8 min-[900px]:sticky min-[900px]:top-28">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h2 className="text-sm font-bold text-ink">چرا آنلاین؟</h2>
              <ul className="mt-4 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-2.5">
                    <Icon
                      name="checkCircle"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-600"
                    />
                    <div>
                      <p className="text-xs font-semibold text-ink">
                        {benefit.title}
                      </p>
                      <p className="mt-1 text-[10px] leading-5 text-muted">
                        {benefit.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 p-6 text-white">
              <div className="pointer-events-none absolute -left-10 -top-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <p className="relative text-[10px] text-white/65">
                ترجیح می‌دهی تلفنی رزرو کنی؟
              </p>
              <a
                href={`tel:${site.phoneHref}`}
                dir="ltr"
                className="relative mt-2 block text-lg font-bold tracking-wide text-white transition hover:text-brand-200"
              >
                {site.phone}
              </a>
              <div className="relative mt-4 space-y-2 border-t border-white/15 pt-4 text-[10px] leading-5 text-white/65">
                <p>شنبه تا چهارشنبه ۹ تا ۲۰ — پنجشنبه ۹ تا ۱۴</p>
                <p>{site.addressShort}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 text-[10px] leading-5 text-muted">
              <span className="flex items-center gap-1.5 font-semibold text-ink">
                <Icon name="info" className="h-3.5 w-3.5 text-brand-600" />
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
