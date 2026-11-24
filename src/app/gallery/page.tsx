import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { GalleryExplorer } from "@/components/GalleryExplorer";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "گالری قبل و بعد",
  description:
    "نمونه نتایج درمان در کلینیک دندانپزشکی آرمان؛ مقایسه قبل و بعد لمینت، بلیچینگ و ایمپلنت با اسلایدر تعاملی.",
  alternates: { canonical: "/gallery" },
};

const standards = [
  {
    icon: "scan" as const,
    title: "عکس‌برداری استاندارد",
    text: "نور، زاویه و فاصله دوربین در جلسات قبل و بعد یکسان گرفته می‌شود.",
  },
  {
    icon: "shield" as const,
    title: "بدون روتوش گمراه‌کننده",
    text: "در نمونه‌های واقعی، رنگ و بافت دندان‌ها دست‌کاری نمی‌شود.",
  },
  {
    icon: "user" as const,
    title: "رضایت آگاهانه",
    text: "انتشار تصویر هر بیمار فقط با اجازه کتبی و به‌صورت ناشناس انجام می‌شود.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="قبل و بعد"
        eyebrow="گالری نتایج"
        title="نتیجه درمان را با چشم خودتان مقایسه کنید"
        description="در هر نمونه، اسلایدر را بکشید و تغییر ایجادشده را ببینید. تصاویر این صفحه نمونه‌های شبیه‌سازی‌شده برای نمایش نوع نتیجه هستند."
      >
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[11px] text-navy-100">
          <Icon name="sparkles" className="h-4 w-4 text-gold-300" />
          ۳ نمونه از درمان‌های پرطرفدار
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <GalleryExplorer />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x section">
          <SectionHeading
            eyebrow="شفافیت در ارائه نتیجه"
            title="چرا نمونه‌های ما قابل اعتمادند؟"
            description="هر نتیجه درمان به شرایط اولیه دهان، همکاری بیمار و مراقبت‌های بعدی بستگی دارد. ما این واقعیت را پنهان نمی‌کنیم."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {standards.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-navy-900/8 bg-cream/60 p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-navy-800 shadow-sm">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-extrabold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-gold-500/30 bg-gold-50/60 p-5">
            <Icon
              name="info"
              className="mt-0.5 h-5 w-5 shrink-0 text-gold-600"
            />
            <p className="text-[11px] leading-6 text-gold-700">
              تصاویر قبل و بعد این صفحه، شبیه‌سازی گرافیکی برای نمایش نمونه
              هستند و تصویر واقعی بیمار نیستند. در جلسه مشاوره، نمونه‌های
              واقعی متناسب با درمان مورد نظر شما نمایش داده می‌شود.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-20 pt-20 sm:pb-24 sm:pt-24">
        <CtaBand
          title="نتیجه‌ای که برای شما ممکن است"
          text="در مشاوره حضوری، با اسکن و عکس‌برداری دیجیتال، پیش‌نمایش نتیجه احتمالی درمان خود را ببینید."
        />
      </div>
    </>
  );
}
