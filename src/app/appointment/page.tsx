import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { appointmentNotes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "رزرو نوبت آنلاین",
  description:
    "رزرو آنلاین نوبت در کلینیک دندانپزشکی آرمان؛ انتخاب خدمت، روز و ساعت مراجعه در سه مرحله ساده.",
  alternates: { canonical: "/appointment" },
};

const benefits = [
  {
    icon: "clock" as const,
    title: "در کمتر از ۲ دقیقه",
    text: "بدون تماس تلفنی و انتظار در صف، زمان مراجعه را خودتان انتخاب کنید.",
  },
  {
    icon: "calendar" as const,
    title: "انتخاب زمان آزاد",
    text: "ساعت‌های واقعی و به‌روز کلینیک را ببینید و هر زمان که مناسب‌تان است رزرو کنید.",
  },
  {
    icon: "shield" as const,
    title: "تأیید سریع",
    text: "پس از ثبت، کارشناس پذیرش برای تأیید نهایی با شما تماس می‌گیرد.",
  },
];

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        crumb="رزرو نوبت"
        eyebrow="نوبت‌دهی آنلاین"
        title="زمان مراجعه‌تان را خودتان انتخاب کنید"
        description="خدمت مورد نظر، روز و ساعت آزاد را انتخاب کنید و اطلاعات تماس خود را وارد کنید. تأیید نهایی توسط پذیرش انجام می‌شود."
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[11px] text-navy-100">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            رزرو آنلاین ۲۴ ساعته فعال است
          </span>
          <span className="mt-1.5 block text-[10px] text-navy-300">
            جمعه‌ها کلینیک تعطیل است.
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-[1.55fr_0.85fr] lg:items-start">
          <AppointmentForm />

          <aside className="space-y-4 lg:sticky lg:top-28">
            <div className="card p-6">
              <h2 className="text-sm font-extrabold text-navy-900">
                چرا رزرو آنلاین؟
              </h2>
              <ul className="mt-4 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-600">
                      <Icon name={benefit.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-navy-900">
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

            <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-6 text-white">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gold-500/15 blur-2xl" />

              <div className="relative">
                <p className="text-[11px] text-navy-100">
                  ترجیح می‌دهید تلفنی رزرو کنید؟
                </p>
                <a
                  href={`tel:${site.phoneHref}`}
                  dir="ltr"
                  className="mt-2 block text-lg font-extrabold tracking-wide text-white transition hover:text-gold-300"
                >
                  {site.phone}
                </a>
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-[10px] leading-5 text-navy-200">
                  <p className="flex items-start gap-2">
                    <Icon
                      name="clock"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400"
                    />
                    شنبه تا چهارشنبه ۹ تا ۲۰ — پنجشنبه ۹ تا ۱۴
                  </p>
                  <p className="flex items-start gap-2">
                    <Icon
                      name="pin"
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400"
                    />
                    {site.addressShort}
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="text-sm font-extrabold text-navy-900">
                پیش از رزرو بخوانید
              </h2>
              <ul className="mt-4 space-y-2.5">
                {appointmentNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-2 text-[10px] leading-5 text-muted"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-3 w-3 shrink-0 text-gold-600"
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-dashed border-navy-900/15 bg-cream/60 p-4 text-[10px] leading-5 text-muted">
              <span className="flex items-center gap-1.5 font-bold text-navy-800">
                <Icon name="info" className="h-3.5 w-3.5 text-gold-600" />
                نسخه نمایشی
              </span>
              این صفحه برای نمایش نمونه ساخته شده است؛ نوبت‌ها فقط در مرورگر شما
              ذخیره می‌شوند. برای رزرو واقعی با کلینیک تماس بگیرید.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
