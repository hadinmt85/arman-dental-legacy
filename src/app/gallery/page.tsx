import type { Metadata } from "next";
import Image from "next/image";
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
  "عکس‌برداری با نور و زاویه یکسان",
  "بدون روتوش گمراه‌کننده",
  "انتشار با رضایت آگاهانه بیمار",
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
        <div className="flex items-center gap-2 text-[11px] text-muted">
          <Icon name="info" className="h-3.5 w-3.5 text-forest-600" />
          نمونه شبیه‌سازی‌شده برای نمایش نتیجه
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="chip">نمونه ۰۱ — بلیچینگ</span>
            <span className="text-[10px] text-muted">
              تصویر واقعی · شبیه‌سازی رنگ
            </span>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <BeforeAfter
              src="/images/smile.jpg"
              alt="مقایسه قبل و بعد بلیچینگ دندان"
              className="aspect-[16/11] w-full sm:aspect-[16/9]"
              sizes="(min-width: 1280px) 1216px, 100vw"
            />
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <h2 className="text-xl font-extrabold tracking-tight text-ink">
                بلیچینگ حرفه‌ای و پاکسازی
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-8 text-muted">
                روشن‌تر شدن رنگ دندان‌ها با ژل بلیچینگ و محافظت کامل از لثه،
                همراه با جرم‌گیری. نتیجه معمولاً در یک جلسه قابل مشاهده است و
                ماندگاری آن به مراقبت خانگی بستگی دارد.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-4 self-start">
              <div className="border-t border-line pt-3">
                <dt className="text-[10px] text-muted">مدت درمان</dt>
                <dd className="mt-1 text-sm font-semibold text-ink">
                  ۶۰ دقیقه
                </dd>
              </div>
              <div className="border-t border-line pt-3">
                <dt className="text-[10px] text-muted">تعداد جلسات</dt>
                <dd className="mt-1 text-sm font-semibold text-ink">۱ جلسه</dd>
              </div>
            </dl>
          </div>

          <p className="mt-8 rounded-2xl border border-forest-200 bg-forest-50 p-4 text-[11px] leading-6 text-forest-800">
            تصویر این صفحه واقعی است، اما برای نمایش نتیجه بلیچینگ، رنگ بخش
            «قبل» به‌صورت دیجیتال تغییر داده شده است. نتیجه هر درمان به شرایط
            اولیه دندان و مراقبت‌های بعدی بستگی دارد.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x section">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="شفافیت"
                title="چرا این نمونه قابل اعتماد است؟"
                description="ما واقعیت را پنهان نمی‌کنیم: هر نتیجه به شرایط اولیه دهان و همکاری بیمار بستگی دارد."
              />

              <ul className="mt-8 border-t border-line">
                {standards.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-line py-3.5 text-xs leading-6 text-ink-soft"
                  >
                    <Icon
                      name="check"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-forest-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sand">
                <Image
                  src="/images/clinic.jpg"
                  alt="فضای درمانی کلینیک آرمان"
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium text-ink backdrop-blur">
                  فضای درمانی
                </span>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sand sm:mt-10">
                <Image
                  src="/images/care.jpg"
                  alt="همراهی تیم درمان با بیمار"
                  fill
                  sizes="(min-width: 1024px) 30vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-medium text-ink backdrop-blur">
                  همراهی تیم
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-[clamp(1.6rem,3.4vw,2.6rem)] font-extrabold leading-[1.3] tracking-[-0.03em] text-ink">
              «نتیجه‌ای که دیدم، دقیقاً همان چیزی بود که در جلسه مشاوره توضیح
              داده شد.»
            </p>
            <p className="mt-4 text-xs text-muted">
              مریم ک. — بیمار درمان بلیچینگ
            </p>
          </div>
          <div className="md:col-span-4 md:text-left">
            <p className="text-xs leading-6 text-muted">
              در جلسه مشاوره، نمونه‌های واقعی متناسب با درمان مورد نظر تو نمایش
              داده می‌شود.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBand
          title="نتیجه‌ای که برای تو ممکن است."
          text="با یک معاینه و عکس‌برداری دیجیتال، پیش‌نمایش نتیجه احتمالی درمان خودت را ببین."
        />
      </div>
    </>
  );
}
