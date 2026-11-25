import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "نتایج درمان",
  description:
    "نمونه نتایج درمان در کلینیک دندانپزشکی آرمان؛ مقایسه قبل و بعد بلیچینگ و درمان‌های زیبایی با اسلایدر تعاملی.",
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
    icon: "heart" as const,
    title: "رضایت آگاهانه",
    text: "انتشار تصویر هر بیمار فقط با اجازه کتبی و به‌صورت ناشناس انجام می‌شود.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="نتایج"
        eyebrow="گالری نتایج"
        title="نتیجه را ببین، نه ادعا را."
        description="یک نمونه واقعی از تغییر رنگ دندان‌ها. اسلایدر را بکش و تفاوت را مقایسه کن؛ تصویر با شبیه‌سازی دیجیتال رنگ آماده شده است."
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-[10px] font-medium text-brand-700">
          <Icon name="info" className="h-3.5 w-3.5" />
          نمونه شبیه‌سازی‌شده برای نمایش نتیجه
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="chip bg-white">نمونه ۰۱ — بلیچینگ</span>
            <span className="text-[9px] text-muted">
              تصویر واقعی · شبیه‌سازی دیجیتال رنگ
            </span>
          </div>

          <div className="rounded-[1.75rem] border border-line bg-white p-2.5 shadow-soft">
            <BeforeAfter
              src="/images/smile.jpg"
              alt="مقایسه قبل و بعد بلیچینگ دندان"
              className="aspect-[16/10] w-full rounded-[1.25rem] sm:aspect-[16/9]"
              sizes="(min-width: 1280px) 1160px, 100vw"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-3 text-[9px] text-muted">
              <span>بلیچینگ حرفه‌ای · ۱ جلسه · ۶۰ دقیقه</span>
              <span>نتیجه هر درمان به شرایط اولیه دندان بستگی دارد.</span>
            </div>
          </div>

          <div className="mt-7 grid gap-6 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h2 className="text-xl font-extrabold tracking-tight text-ink">
                بلیچینگ حرفه‌ای و پاکسازی
              </h2>
              <p className="mt-2 max-w-2xl text-xs leading-7 text-muted">
                روشن‌تر شدن رنگ دندان‌ها با ژل بلیچینگ و محافظت کامل از لثه،
                همراه با جرم‌گیری. نتیجه معمولاً در یک جلسه قابل مشاهده است و
                ماندگاری آن به مراقبت خانگی بستگی دارد.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-3 self-start">
              <div className="rounded-xl border border-line bg-white p-3.5">
                <dt className="text-[9px] text-muted">مدت درمان</dt>
                <dd className="mt-1 text-[12px] font-bold text-ink">۶۰ دقیقه</dd>
              </div>
              <div className="rounded-xl border border-line bg-white p-3.5">
                <dt className="text-[9px] text-muted">تعداد جلسات</dt>
                <dd className="mt-1 text-[12px] font-bold text-ink">۱ جلسه</dd>
              </div>
            </dl>
          </div>

          <p className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-4 text-[10px] leading-6 text-brand-800">
            تصویر این صفحه واقعی است، اما برای نمایش نتیجه بلیچینگ، رنگ بخش
            «قبل» به‌صورت دیجیتال تغییر داده شده است. نتیجه هر درمان به شرایط
            اولیه دندان و مراقبت‌های بعدی بستگی دارد.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x section">
          <SectionHeading
            eyebrow="شفافیت"
            title="چرا نمونه‌های ما قابل اعتمادند؟"
            description="هر نتیجه درمان به شرایط اولیه دهان، همکاری بیمار و مراقبت‌های بعدی بستگی دارد. ما این واقعیت را پنهان نمی‌کنیم."
          />

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {standards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-sky-soft/60 p-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-3.5 text-[12px] font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[9.5px] leading-5 text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sky">
              <Image
                src="/images/clinic.jpg"
                alt="فضای درمانی کلینیک آرمان"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-medium text-ink backdrop-blur">
                فضای درمانی
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sky">
              <Image
                src="/images/care.jpg"
                alt="همراهی تیم درمان با بیمار"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-medium text-ink backdrop-blur">
                همراهی تیم
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-[1.4] tracking-[-0.035em] text-ink">
                «نتیجه‌ای که دیدم، دقیقاً همان چیزی بود که در جلسه مشاوره توضیح
                داده شد.»
              </p>
              <p className="mt-3 text-[10px] text-muted">
                مریم ک. — بیمار درمان بلیچینگ
              </p>
            </div>
            <div className="md:col-span-4 md:text-left">
              <Link href="/appointment" className="btn btn-primary btn-sm">
                رزرو مشاوره
                <Icon name="arrowLeft" className="h-3.5 w-3.5" />
              </Link>
              <p className="mt-3 text-[9px] leading-5 text-muted">
                در جلسه مشاوره، نمونه‌های واقعی متناسب با درمان مورد نظر تو
                نمایش داده می‌شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBand
          title="نتیجه‌ای که برای تو ممکن است."
          text="با یک معاینه و عکس‌برداری دیجیتال، پیش‌نمایش نتیجه احتمالی درمان خودت را ببین."
        />
      </div>
    </>
  );
}
