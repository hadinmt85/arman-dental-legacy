"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import { faDigits, toEnglishDigits } from "@/lib/format";
import {
  SLOT_TIMES,
  buildDays,
  createTrackingCode,
  formatDayLong,
  readAppointments,
  saveAppointments,
  slotIsBooked,
  slotIsDemoBusy,
  slotIsPast,
  type DayOption,
  type StoredAppointment,
} from "@/lib/booking";
import { appointmentNotes, doctors, services } from "@/lib/site";

type Errors = Record<string, string>;

const stepTitles = ["انتخاب خدمت", "انتخاب زمان", "اطلاعات بیمار"];

function formatStoredDate(iso: string): string {
  const date = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

export function AppointmentForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceId, setServiceId] = useState(services[0].id);
  const [doctorId, setDoctorId] = useState(doctors[0].id);
  const [dateISO, setDateISO] = useState("");
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [days, setDays] = useState<DayOption[]>([]);
  const [appointments, setAppointments] = useState<StoredAppointment[]>([]);
  const [ready, setReady] = useState(false);
  const [booking, setBooking] = useState<StoredAppointment | null>(null);
  const [cancelId, setCancelId] = useState<string | null>(null);

  useEffect(() => {
    // Hydration-safe mount: the calendar and saved appointments only exist in
    // the browser, so they are loaded once after the first client render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDays(buildDays(12));
    setAppointments(readAppointments());
    setReady(true);
  }, []);

  const selectedService = useMemo(
    () => services.find((service) => service.id === serviceId) ?? services[0],
    [serviceId],
  );

  const selectedDoctor = useMemo(
    () => doctors.find((doctor) => doctor.id === doctorId) ?? doctors[0],
    [doctorId],
  );

  const selectedDay = useMemo(
    () => days.find((day) => day.iso === dateISO),
    [days, dateISO],
  );

  const resetForm = () => {
    setStep(1);
    setDateISO("");
    setTime("");
    setFirstName("");
    setLastName("");
    setPhone("");
    setNotes("");
    setConsent(false);
    setErrors({});
    setBooking(null);
  };

  const goNext = () => {
    if (step === 1) {
      if (!serviceId) {
        setErrors({ service: "لطفاً یک خدمت را انتخاب کنید." });
        return;
      }
      setErrors({});
      setStep(2);
      return;
    }

    if (step === 2) {
      const nextErrors: Errors = {};
      if (!dateISO) nextErrors.date = "لطفاً روز مراجعه را انتخاب کنید.";
      if (!time) nextErrors.time = "لطفاً یکی از ساعت‌های آزاد را انتخاب کنید.";
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length === 0) setStep(3);
    }
  };

  const goBack = () => {
    setErrors({});
    setStep((current) => (current > 1 ? ((current - 1) as 1 | 2 | 3) : current));
  };

  const submit = () => {
    const nextErrors: Errors = {};

    if (!dateISO || !time) {
      setStep(2);
      setErrors({ time: "زمان نوبت را دوباره انتخاب کنید." });
      return;
    }

    if (firstName.trim().length < 2) {
      nextErrors.firstName = "نام باید حداقل ۲ حرف باشد.";
    }
    if (lastName.trim().length < 2) {
      nextErrors.lastName = "نام خانوادگی باید حداقل ۲ حرف باشد.";
    }
    if (!/^09\d{9}$/.test(phone)) {
      nextErrors.phone = "شماره موبایل را به‌صورت ۰۹xxxxxxxxx وارد کنید.";
    }
    if (!consent) {
      nextErrors.consent = "برای ثبت نوبت، تأیید قوانین الزامی است.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const latest = readAppointments();

    if (
      slotIsBooked(latest, dateISO, time) ||
      slotIsDemoBusy(dateISO, time) ||
      slotIsPast(dateISO, time)
    ) {
      setStep(2);
      setTime("");
      setErrors({
        time: "این ساعت هم‌اکنون در دسترس نیست. لطفاً زمان دیگری انتخاب کنید.",
      });
      return;
    }

    const appointment: StoredAppointment = {
      id: createTrackingCode(),
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      dateISO,
      time,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone,
      notes: notes.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = [...latest, appointment];
    saveAppointments(updated);
    setAppointments(updated);
    setBooking(appointment);
    setErrors({});
  };

  const cancelAppointment = (id: string) => {
    const updated = appointments.filter((appointment) => appointment.id !== id);
    saveAppointments(updated);
    setAppointments(updated);
    setCancelId(null);
  };

  if (booking) {
    return (
      <div className="card overflow-hidden">
        <div className="bg-navy-900 px-6 py-10 text-center sm:px-10">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30">
            <Icon name="checkCircle" className="h-9 w-9" />
          </span>
          <h2 className="mt-5 text-2xl text-white">نوبت شما ثبت شد</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-navy-100">
            کارشناسان پذیرش برای تأیید نهایی و راهنمایی پیش از مراجعه با شما تماس
            می‌گیرند.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mx-auto max-w-md rounded-2xl border border-gold-500/30 bg-gold-50/60 p-5 text-center">
            <p className="text-[11px] text-muted">کد پیگیری نوبت</p>
            <p
              dir="ltr"
              className="mt-1 text-lg font-extrabold tracking-widest text-navy-900"
            >
              {booking.id}
            </p>
          </div>

          <dl className="mx-auto mt-6 max-w-md space-y-3 text-sm">
            {[
              ["خدمت", booking.serviceTitle],
              ["پزشک", booking.doctorName],
              ["تاریخ", formatStoredDate(booking.dateISO)],
              ["ساعت", faDigits(booking.time)],
              ["نام بیمار", `${booking.firstName} ${booking.lastName}`],
              ["موبایل", faDigits(booking.phone)],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 border-b border-dashed border-navy-900/10 pb-3 last:border-0"
              >
                <dt className="text-xs text-muted">{label}</dt>
                <dd className="text-left text-xs font-bold text-navy-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={resetForm}
              className="btn btn-primary"
            >
              رزرو نوبت دیگر
            </button>
            <Link href="/" className="btn btn-outline">
              بازگشت به صفحه اصلی
            </Link>
          </div>

          <p className="mt-6 text-center text-[10px] leading-5 text-muted">
            این نسخه نمایشی است؛ نوبت‌ها فقط در مرورگر شما ذخیره می‌شوند و پیامکی
            ارسال نمی‌شود.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="card p-6 sm:p-8">
        {/* Stepper */}
        <ol className="flex items-center gap-2">
          {stepTitles.map((title, index) => {
            const number = index + 1;
            const isDone = step > number;
            const isCurrent = step === number;

            return (
              <li key={title} className="flex flex-1 items-center gap-2">
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-[11px] font-bold transition ${
                    isDone
                      ? "border-emerald-400/40 bg-emerald-50 text-emerald-600"
                      : isCurrent
                        ? "border-gold-500 bg-gold-500 text-navy-950"
                        : "border-navy-900/10 bg-white text-muted"
                  }`}
                >
                  {isDone ? (
                    <Icon name="check" className="h-4 w-4" />
                  ) : (
                    faDigits(number)
                  )}
                </span>
                <span
                  className={`hidden text-[11px] font-bold sm:block ${
                    isCurrent ? "text-navy-900" : "text-muted"
                  }`}
                >
                  {title}
                </span>
                {index < stepTitles.length - 1 ? (
                  <span
                    className={`me-1 h-px flex-1 ${
                      isDone ? "bg-emerald-300" : "bg-navy-900/10"
                    }`}
                  />
                ) : null}
              </li>
            );
          })}
        </ol>

        <form
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            if (step < 3) goNext();
            else submit();
          }}
          className="mt-7"
        >
          {step === 1 ? (
            <div className="animate-rise">
              <h2 className="text-base font-extrabold text-navy-900">
                چه خدمتی نیاز دارید؟
              </h2>
              <p className="mt-1 text-xs text-muted">
                اگر مطمئن نیستید، گزینه «مشاوره عمومی» را انتخاب کنید یا با
                پذیرش تماس بگیرید.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const selected = serviceId === service.id;

                  return (
                    <label
                      key={service.id}
                      className={`relative flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-500/50 ${
                        selected
                          ? "border-gold-500 bg-gold-50/60 ring-2 ring-gold-500/15"
                          : "border-navy-900/10 hover:border-navy-900/25 hover:bg-navy-50/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selected}
                        onChange={() => setServiceId(service.id)}
                        className="sr-only"
                      />
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                          selected
                            ? "bg-navy-900 text-gold-300"
                            : "bg-navy-50 text-navy-700"
                        }`}
                      >
                        <Icon name={service.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-navy-900">
                          {service.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-muted">
                          {service.price}
                        </span>
                      </span>
                      <span
                        className={`ms-auto grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                          selected
                            ? "border-gold-500 bg-gold-500 text-navy-950"
                            : "border-navy-900/20 text-transparent"
                        }`}
                      >
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                    </label>
                  );
                })}
              </div>
              {errors.service ? (
                <p className="mt-3 text-xs font-semibold text-red-600">
                  {errors.service}
                </p>
              ) : null}

              <h3 className="mt-7 text-base font-extrabold text-navy-900">
                پزشک معالج
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {doctors.map((doctor) => {
                  const selected = doctorId === doctor.id;

                  return (
                    <label
                      key={doctor.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-500/50 ${
                        selected
                          ? "border-navy-900/60 bg-navy-50/70"
                          : "border-navy-900/10 hover:border-navy-900/25"
                      }`}
                    >
                      <input
                        type="radio"
                        name="doctor"
                        value={doctor.id}
                        checked={selected}
                        onChange={() => setDoctorId(doctor.id)}
                        className="sr-only"
                      />
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-900 text-xs font-bold text-gold-300">
                        {doctor.name.replace("دکتر ", "").charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-navy-900">
                          {doctor.name}
                        </span>
                        <span className="mt-1 block text-[11px] leading-5 text-muted">
                          {doctor.role}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="animate-rise">
              <h2 className="text-base font-extrabold text-navy-900">
                روز و ساعت مراجعه
              </h2>
              <p className="mt-1 text-xs text-muted">
                روزهای جمعه تعطیل هستند. ساعت‌های خاکستری قابل انتخاب نیستند.
              </p>

              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {!ready
                  ? Array.from({ length: 7 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-[86px] min-w-[78px] animate-pulse rounded-2xl bg-navy-50"
                      />
                    ))
                  : days.map((day) => {
                      const selected = dateISO === day.iso;

                      return (
                        <button
                          key={day.iso}
                          type="button"
                          onClick={() => {
                            setDateISO(day.iso);
                            setTime("");
                            setErrors({});
                          }}
                          aria-pressed={selected}
                          className={`min-w-[78px] rounded-2xl border px-3 py-3 text-center transition ${
                            selected
                              ? "border-gold-500 bg-navy-900 text-white shadow-card"
                              : "border-navy-900/10 bg-white text-navy-900 hover:border-gold-400 hover:bg-gold-50/40"
                          }`}
                        >
                          <span
                            className={`block text-[10px] ${
                              selected ? "text-gold-300" : "text-muted"
                            }`}
                          >
                            {day.relative || day.weekday}
                          </span>
                          <span className="mt-1 block text-xl font-extrabold">
                            {day.day}
                          </span>
                          <span
                            className={`mt-0.5 block text-[10px] ${
                              selected ? "text-navy-100" : "text-muted"
                            }`}
                          >
                            {day.month}
                          </span>
                        </button>
                      );
                    })}
              </div>

              {errors.date ? (
                <p className="mt-2 text-xs font-semibold text-red-600">
                  {errors.date}
                </p>
              ) : null}

              <div className="mt-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-navy-900">
                    ساعت‌های آزاد
                  </h3>
                  {selectedDay ? (
                    <span className="text-[11px] text-muted">
                      {formatDayLong(selectedDay)}
                    </span>
                  ) : null}
                </div>

                {!ready ? (
                  <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-12 animate-pulse rounded-xl bg-navy-50"
                      />
                    ))}
                  </div>
                ) : !dateISO ? (
                  <div className="mt-3 rounded-2xl border border-dashed border-navy-900/15 bg-cream/60 px-4 py-6 text-center text-xs text-muted">
                    برای دیدن ساعت‌های آزاد، ابتدا یک روز را انتخاب کنید.
                  </div>
                ) : (
                  <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {SLOT_TIMES.map((slot) => {
                      const isBooked = slotIsBooked(appointments, dateISO, slot);
                      const isPast = slotIsPast(dateISO, slot);
                      const isBusy = slotIsDemoBusy(dateISO, slot);
                      const disabled = isBooked || isPast || isBusy;
                      const selected = time === slot;

                      return (
                        <button
                          key={slot}
                          type="button"
                          disabled={disabled}
                          onClick={() => {
                            setTime(slot);
                            setErrors({});
                          }}
                          aria-pressed={selected}
                          className={`rounded-xl border px-2 py-3 text-sm font-bold transition ${
                            selected
                              ? "border-gold-500 bg-gold-500 text-navy-950 shadow-sm"
                              : disabled
                                ? "cursor-not-allowed border-navy-900/5 bg-navy-50/60 text-navy-300 line-through"
                                : "border-navy-900/10 bg-white text-navy-800 hover:border-gold-500 hover:text-navy-900"
                          }`}
                        >
                          {faDigits(slot)}
                          <span className="mt-0.5 block text-[9px] font-medium">
                            {isBooked
                              ? "رزرو شده"
                              : isPast
                                ? "گذشته"
                                : isBusy
                                  ? "تکمیل"
                                  : "آزاد"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {errors.time ? (
                  <p className="mt-2 text-xs font-semibold text-red-600">
                    {errors.time}
                  </p>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 rounded-2xl bg-cream/80 px-4 py-3 text-[10px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-gold-500" />
                  انتخاب‌شده
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full border border-navy-900/20 bg-white" />
                  آزاد
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-navy-200" />
                  غیرقابل انتخاب
                </span>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="animate-rise">
              <h2 className="text-base font-extrabold text-navy-900">
                اطلاعات بیمار
              </h2>
              <p className="mt-1 text-xs text-muted">
                این اطلاعات فقط برای هماهنگی نوبت استفاده می‌شود.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="label">
                    نام <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="مثلاً سارا"
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                    className={`field ${errors.firstName ? "field-error" : ""}`}
                  />
                  {errors.firstName ? (
                    <p
                      id="firstName-error"
                      className="mt-1.5 text-[11px] font-semibold text-red-600"
                    >
                      {errors.firstName}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lastName" className="label">
                    نام خانوادگی <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="مثلاً محمدی"
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={
                      errors.lastName ? "lastName-error" : undefined
                    }
                    className={`field ${errors.lastName ? "field-error" : ""}`}
                  />
                  {errors.lastName ? (
                    <p
                      id="lastName-error"
                      className="mt-1.5 text-[11px] font-semibold text-red-600"
                    >
                      {errors.lastName}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="label">
                    شماره موبایل <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    dir="ltr"
                    autoComplete="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(
                        toEnglishDigits(event.target.value)
                          .replace(/\D/g, "")
                          .slice(0, 11),
                      )
                    }
                    placeholder="09123456789"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : "phone-help"}
                    className={`field text-left tracking-wide ${
                      errors.phone ? "field-error" : ""
                    }`}
                  />
                  {errors.phone ? (
                    <p
                      id="phone-error"
                      className="mt-1.5 text-[11px] font-semibold text-red-600"
                    >
                      {errors.phone}
                    </p>
                  ) : (
                    <p id="phone-help" className="mt-1.5 text-[11px] text-muted">
                      برای تأیید نوبت با همین شماره تماس می‌گیریم.
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="notes" className="label">
                    توضیحات (اختیاری)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    maxLength={300}
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="مثلاً درد دندان عقب سمت راست یا حساسیت به داروی خاص"
                    className="field resize-none"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-navy-900/8 bg-cream/70 p-4">
                <p className="text-[11px] font-bold text-navy-900">
                  خلاصه نوبت
                </p>
                <div className="mt-3 grid gap-2 text-[11px] text-muted sm:grid-cols-2">
                  <span>
                    خدمت:{" "}
                    <strong className="font-bold text-navy-800">
                      {selectedService.title}
                    </strong>
                  </span>
                  <span>
                    پزشک:{" "}
                    <strong className="font-bold text-navy-800">
                      {selectedDoctor.name}
                    </strong>
                  </span>
                  <span>
                    تاریخ:{" "}
                    <strong className="font-bold text-navy-800">
                      {selectedDay ? formatDayLong(selectedDay) : "—"}
                    </strong>
                  </span>
                  <span>
                    ساعت:{" "}
                    <strong className="font-bold text-navy-800">
                      {time ? faDigits(time) : "—"}
                    </strong>
                  </span>
                </div>
              </div>

              <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-[11px] leading-6 text-muted">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-navy-900/20 accent-gold-600"
                />
                <span>
                  قوانین کلینیک را می‌پذیرم و تأیید می‌کنم که اطلاعات واردشده
                  صحیح است. لغو نوبت تا ۲۴ ساعت قبل رایگان است.
                </span>
              </label>
              {errors.consent ? (
                <p className="mt-1.5 text-[11px] font-semibold text-red-600">
                  {errors.consent}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="mt-7 flex items-center justify-between gap-3 border-t border-navy-900/8 pt-5">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 1}
              className="btn btn-outline btn-sm"
            >
              <Icon name="chevronRight" className="h-3.5 w-3.5" />
              مرحله قبل
            </button>

            <button
              type="submit"
              className={`btn btn-sm sm:px-6 sm:py-3 ${
                step === 3 ? "btn-gold" : "btn-primary"
              }`}
            >
              {step === 3 ? "تأیید و ثبت نوبت" : "مرحله بعد"}
              <Icon
                name={step === 3 ? "check" : "arrowLeft"}
                className="h-4 w-4"
              />
            </button>
          </div>
        </form>
      </div>

      {ready && appointments.length > 0 ? (
        <div className="card p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-extrabold text-navy-900">
              نوبت‌های من
            </h2>
            <span className="chip">{faDigits(appointments.length)} نوبت</span>
          </div>

          <ul className="mt-4 space-y-3">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="rounded-2xl border border-navy-900/8 bg-cream/50 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-navy-900">
                      {appointment.serviceTitle}
                    </p>
                    <p className="mt-1 text-[11px] text-muted">
                      {formatStoredDate(appointment.dateISO)} · ساعت{" "}
                      {faDigits(appointment.time)} · {appointment.doctorName}
                    </p>
                    <p
                      dir="ltr"
                      className="mt-1 text-left text-[10px] tracking-wider text-muted"
                    >
                      {appointment.id}
                    </p>
                  </div>

                  {cancelId === appointment.id ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => cancelAppointment(appointment.id)}
                        className="rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-bold text-red-600 transition hover:bg-red-100"
                      >
                        تأیید لغو
                      </button>
                      <button
                        type="button"
                        onClick={() => setCancelId(null)}
                        className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-navy-700 ring-1 ring-navy-900/10 transition hover:bg-navy-50"
                      >
                        انصراف
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setCancelId(appointment.id)}
                      className="rounded-full border border-navy-900/10 px-3 py-1.5 text-[10px] font-bold text-navy-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      لغو نوبت
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-[10px] leading-5 text-muted">
            نوبت‌ها در همین مرورگر ذخیره شده‌اند. برای ثبت واقعی، با پذیرش کلینیک
            هماهنگ کنید.
          </p>
        </div>
      ) : null}

      <div className="card p-6 sm:p-8">
        <div className="flex items-center gap-2 text-navy-900">
          <Icon name="info" className="h-4 w-4 text-gold-600" />
          <h2 className="text-sm font-extrabold">نکات مهم پیش از مراجعه</h2>
        </div>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {appointmentNotes.map((note) => (
            <li
              key={note}
              className="flex items-start gap-2 text-[11px] leading-6 text-muted"
            >
              <Icon
                name="check"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600"
              />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
