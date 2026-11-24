"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { toEnglishDigits } from "@/lib/format";

const subjects = [
  "مشاوره درمان",
  "سؤال درباره هزینه",
  "هماهنگی نوبت",
  "شکایت یا پیشنهاد",
  "همکاری و استخدام",
  "سایر موارد",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const reset = () => {
    setName("");
    setPhone("");
    setSubject(subjects[0]);
    setMessage("");
    setErrors({});
    setSent(false);
  };

  const submit = () => {
    const nextErrors: Record<string, string> = {};

    if (name.trim().length < 2) {
      nextErrors.name = "نام باید حداقل ۲ حرف باشد.";
    }
    if (!/^09\d{9}$/.test(phone)) {
      nextErrors.phone = "شماره موبایل را به‌صورت ۰۹xxxxxxxxx وارد کنید.";
    }
    if (message.trim().length < 10) {
      nextErrors.message = "متن پیام باید حداقل ۱۰ حرف باشد.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-4xl border border-navy-900/8 bg-white p-8 text-center shadow-card sm:p-12">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
          <Icon name="checkCircle" className="h-9 w-9" />
        </span>
        <h2 className="mt-5 text-xl text-navy-900">پیام شما ثبت شد</h2>
        <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
          همکاران ما در ساعات کاری کلینیک پیام شما را بررسی می‌کنند و در صورت
          نیاز با شماره {phone ? phone : " ثبت‌شده"} تماس می‌گیرند.
        </p>
        <p className="mt-4 rounded-2xl bg-cream px-4 py-2 text-[10px] text-muted">
          این فرم نمایشی است و پیامی به کلینیک ارسال نمی‌شود.
        </p>
        <button type="button" onClick={reset} className="btn btn-primary mt-6">
          ارسال پیام جدید
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
      className="rounded-4xl border border-navy-900/8 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-50 text-navy-800">
          <Icon name="mail" className="h-4 w-4" />
        </span>
        <div>
          <h2 className="text-base font-extrabold text-navy-900">
            برای ما پیام بگذارید
          </h2>
          <p className="text-[11px] text-muted">
            در اولین فرصت پاسخ می‌دهیم
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="label">
            نام و نام خانوادگی <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="مثلاً سارا محمدی"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`field ${errors.name ? "field-error" : ""}`}
          />
          {errors.name ? (
            <p
              id="contact-name-error"
              className="mt-1.5 text-[11px] font-semibold text-red-600"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-phone" className="label">
            شماره موبایل <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            dir="ltr"
            autoComplete="tel"
            value={phone}
            onChange={(event) =>
              setPhone(
                toEnglishDigits(event.target.value).replace(/\D/g, "").slice(0, 11),
              )
            }
            placeholder="09123456789"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={`field text-left tracking-wide ${
              errors.phone ? "field-error" : ""
            }`}
          />
          {errors.phone ? (
            <p
              id="contact-phone-error"
              className="mt-1.5 text-[11px] font-semibold text-red-600"
            >
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-subject" className="label">
            موضوع پیام
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="field appearance-none bg-[length:16px] bg-[position:left_1rem_center] bg-no-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235d6b78' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            {subjects.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="label">
            متن پیام <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            maxLength={700}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="سؤال یا توضیح خود را بنویسید..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`field resize-none ${errors.message ? "field-error" : ""}`}
          />
          {errors.message ? (
            <p
              id="contact-message-error"
              className="mt-1.5 text-[11px] font-semibold text-red-600"
            >
              {errors.message}
            </p>
          ) : (
            <p className="mt-1.5 text-[10px] text-muted">
              {message.length} از ۷۰۰ حرف
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="flex items-center gap-1.5 text-[10px] text-muted">
          <Icon name="lock" className="h-3.5 w-3.5 text-gold-600" />
          اطلاعات شما محرمانه باقی می‌ماند.
        </p>
        <button type="submit" className="btn btn-gold btn-sm sm:px-6">
          ارسال پیام
          <Icon name="arrowLeft" className="h-3.5 w-3.5" />
        </button>
      </div>

      <p className="mt-4 text-[10px] leading-5 text-muted">
        این فرم نمونه است؛ برای ارتباط واقعی از شماره تماس کلینیک استفاده کنید.
      </p>
    </form>
  );
}
