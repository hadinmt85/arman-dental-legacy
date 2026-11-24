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
      <div className="rounded-3xl border border-line bg-white p-6 sm:p-10">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest-100 text-forest-700">
          <Icon name="checkCircle" className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-extrabold tracking-tight text-ink">
          نوبتت ثبت شد.
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-7 text-muted">
          کارشناسان پذیرش برای تأیید نهایی و راهنمایی پیش از مراجعه با تو تماس
          می‌گیرند.
        </p>

        <div className="mx-auto mt-7 max-w-md rounded-2xl border border-line bg-paper p-5 text-center">
          <p className="text-[10px] text-muted">کد پیگیری نوبت</p>
          <p
            dir="ltr"
            className="mt-1 text-lg font-extrabold tracking-[0.18em] text-ink"
          >
            {booking.id}
          </p>
        </div>

        <dl className="mx-auto mt-7 max-w-md">
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
              className="flex items-center justify-between gap-4 border-b border-line py-3 last:border-0"
            >
              <dt className="text-[11px] text-muted">{label}</dt>
              <dd className="text-left text-[11px] font-semibold text-ink">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={resetForm} className="btn btn-dark btn-sm">
            رزرو نوبت دیگر
          </button>
          <Link href="/" className="btn btn-outline btn-sm">
            بازگشت به خانه
          </Link>
        </div>

        <p className="mt-6 text-center text-[10px] leading-5 text-muted">
          این نسخه نمایشی است؛ نوبت‌ها فقط در مرورگر تو ذخیره می‌شوند و پیامکی
          ارسال نمی‌شود.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
        <ol className="flex items-center gap-3">
          {stepTitles.map((title, index) => {
            const number = index + 1;
            const isDone = step > number;
            const isCurrent = step === number;

            return (
              <li key={title} className="flex flex-1 items-center gap-2.5">
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[10px] font-bold transition ${
                    isDone
                      ? "border-forest-600 bg-forest-600 text-white"
                      : isCurrent
                        ? "border-ink bg-ink text-white"
                        : "border-line bg-white text-muted"
                  }`}
                >
                  {isDone ? (
                    <Icon name="check" className="h-3 w-3" />
                  ) : (
                    faDigits(number)
                  )}
                </span>
                <span
                  className={`hidden text-[11px] font-medium sm:block ${
                    isCurrent ? "text-ink" : "text-muted"
                  }`}
                >
                  {title}
                </span>
                {index < stepTitles.length - 1 ? (
                  <span
                    className={`hidden h-px flex-1 sm:block ${
                      isDone ? "bg-forest-300" : "bg-line"
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
          className="mt-8"
        >
          {step === 1 ? (
            <div className="animate-fade">
              <h2 className="text-base font-bold tracking-tight text-ink">
                چه خدمتی نیاز داری؟
              </h2>
              <p className="mt-1.5 text-[11px] leading-6 text-muted">
                اگر مطمئن نیستی، «مشاوره عمومی» را انتخاب کن یا با پذیرش تماس
                بگیر.
              </p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {services.map((service) => {
                  const selected = serviceId === service.id;

                  return (
                    <label
                      key={service.id}
                      className={`relative flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-forest-600/40 ${
                        selected
                          ? "border-ink bg-forest-50"
                          : "border-line bg-white hover:border-line-strong"
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
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                          selected
                            ? "bg-forest-600 text-white"
                            : "bg-paper text-forest-700"
                        }`}
                      >
                        <Icon name={service.icon} className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-ink">
                          {service.title}
                        </span>
                        <span className="mt-0.5 block text-[10px] text-muted">
                          {service.price}
                        </span>
                      </span>
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                          selected
                            ? "border-ink bg-ink text-white"
                            : "border-line text-transparent"
                        }`}
                      >
                        <Icon name="check" className="h-2.5 w-2.5" />
                      </span>
                    </label>
                  );
                })}
              </div>
              {errors.service ? (
                <p className="mt-3 text-[11px] font-semibold text-red-600">
                  {errors.service}
                </p>
              ) : null}

              <h3 className="mt-8 text-sm font-bold text-ink">
                پزشک معالج
              </h3>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {doctors.map((doctor) => {
                  const selected = doctorId === doctor.id;

                  return (
                    <label
                      key={doctor.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-forest-600/40 ${
                        selected
                          ? "border-ink bg-forest-50"
                          : "border-line bg-white hover:border-line-strong"
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
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest-100 text-[11px] font-bold text-forest-800">
                        {doctor.name.replace("دکتر ", "").charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">
                          {doctor.name}
                        </span>
                        <span className="mt-1 block text-[10px] leading-5 text-muted">
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
            <div className="animate-fade">
              <h2 className="text-base font-bold tracking-tight text-ink">
                روز و ساعت مراجعه
              </h2>
              <p className="mt-1.5 text-[11px] leading-6 text-muted">
                جمعه‌ها کلینیک تعطیل است. ساعت‌های کم‌رنگ قابل انتخاب نیستند.
              </p>

              <div className="mt-5 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {!ready
                  ? Array.from({ length: 7 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-[82px] min-w-[74px] animate-pulse rounded-xl bg-paper"
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
                          className={`min-w-[74px] rounded-xl border px-3 py-3 text-center transition ${
                            selected
                              ? "border-ink bg-ink text-white"
                              : "border-line bg-white text-ink hover:border-ink/30"
                          }`}
                        >
                          <span
                            className={`block text-[10px] ${
                              selected ? "text-white/60" : "text-muted"
                            }`}
                          >
                            {day.relative || day.weekday}
                          </span>
                          <span className="mt-1 block text-lg font-bold">
                            {day.day}
                          </span>
                          <span
                            className={`mt-0.5 block text-[9px] ${
                              selected ? "text-white/55" : "text-muted"
                            }`}
                          >
                            {day.month}
                          </span>
                        </button>
                      );
                    })}
              </div>

              {errors.date ? (
                <p className="mt-2 text-[11px] font-semibold text-red-600">
                  {errors.date}
                </p>
              ) : null}

              <div className="mt-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-ink">ساعت‌های آزاد</h3>
                  {selectedDay ? (
                    <span className="text-[10px] text-muted">
                      {formatDayLong(selectedDay)}
                    </span>
                  ) : null}
                </div>

                {!ready ? (
                  <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-11 animate-pulse rounded-lg bg-paper"
                      />
                    ))}
                  </div>
                ) : !dateISO ? (
                  <div className="mt-3 rounded-xl border border-dashed border-line-strong px-4 py-6 text-center text-[11px] text-muted">
                    برای دیدن ساعت‌های آزاد، ابتدا یک روز را انتخاب کن.
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
                          className={`rounded-lg border px-2 py-2.5 text-xs font-semibold transition ${
                            selected
                              ? "border-ink bg-ink text-white"
                              : disabled
                                ? "cursor-not-allowed border-line bg-paper text-muted/40 line-through"
                                : "border-line bg-white text-ink hover:border-ink/40"
                          }`}
                        >
                          {faDigits(slot)}
                          <span className="mt-0.5 block text-[9px] font-normal">
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
                  <p className="mt-2 text-[11px] font-semibold text-red-600">
                    {errors.time}
                  </p>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 rounded-xl bg-paper px-4 py-3 text-[10px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-ink" />
                  انتخاب‌شده
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full border border-line-strong bg-white" />
                  آزاد
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-line" />
                  غیرقابل انتخاب
                </span>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="animate-fade">
              <h2 className="text-base font-bold tracking-tight text-ink">
                اطلاعات بیمار
              </h2>
              <p className="mt-1.5 text-[11px] leading-6 text-muted">
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
                      className="mt-1.5 text-[10px] font-semibold text-red-600"
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
                      className="mt-1.5 text-[10px] font-semibold text-red-600"
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
                      className="mt-1.5 text-[10px] font-semibold text-red-600"
                    >
                      {errors.phone}
                    </p>
                  ) : (
                    <p id="phone-help" className="mt-1.5 text-[10px] text-muted">
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

              <div className="mt-5 rounded-xl border border-line bg-paper p-4">
                <p className="text-[10px] font-semibold text-ink">خلاصه نوبت</p>
                <div className="mt-3 grid gap-2 text-[10px] text-muted sm:grid-cols-2">
                  <span>
                    خدمت:{" "}
                    <strong className="font-semibold text-ink">
                      {selectedService.title}
                    </strong>
                  </span>
                  <span>
                    پزشک:{" "}
                    <strong className="font-semibold text-ink">
                      {selectedDoctor.name}
                    </strong>
                  </span>
                  <span>
                    تاریخ:{" "}
                    <strong className="font-semibold text-ink">
                      {selectedDay ? formatDayLong(selectedDay) : "—"}
                    </strong>
                  </span>
                  <span>
                    ساعت:{" "}
                    <strong className="font-semibold text-ink">
                      {time ? faDigits(time) : "—"}
                    </strong>
                  </span>
                </div>
              </div>

              <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-[10px] leading-5 text-muted">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-line-strong accent-forest-600"
                />
                <span>
                  قوانین کلینیک را می‌پذیرم و تأیید می‌کنم اطلاعات واردشده صحیح
                  است. لغو نوبت تا ۲۴ ساعت قبل رایگان است.
                </span>
              </label>
              {errors.consent ? (
                <p className="mt-1.5 text-[10px] font-semibold text-red-600">
                  {errors.consent}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="mt-7 flex items-center justify-between gap-3 border-t border-line pt-5">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 1}
              className="btn btn-outline btn-sm"
            >
              <Icon name="chevronRight" className="h-3.5 w-3.5" />
              مرحله قبل
            </button>

            <button type="submit" className="btn btn-dark btn-sm">
              {step === 3 ? "ثبت نوبت" : "مرحله بعد"}
              <Icon
                name={step === 3 ? "check" : "arrowLeft"}
                className="h-3.5 w-3.5"
              />
            </button>
          </div>
        </form>
      </div>

      {ready && appointments.length > 0 ? (
        <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-bold text-ink">نوبت‌های من</h2>
            <span className="chip">{faDigits(appointments.length)} نوبت</span>
          </div>

          <ul className="mt-4">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="border-b border-line py-4 last:border-0"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold text-ink">
                      {appointment.serviceTitle}
                    </p>
                    <p className="mt-1 text-[10px] text-muted">
                      {formatStoredDate(appointment.dateISO)} · ساعت{" "}
                      {faDigits(appointment.time)} · {appointment.doctorName}
                    </p>
                    <p
                      dir="ltr"
                      className="mt-1 text-left text-[9px] tracking-wider text-muted"
                    >
                      {appointment.id}
                    </p>
                  </div>

                  {cancelId === appointment.id ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => cancelAppointment(appointment.id)}
                        className="rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-semibold text-red-600 transition hover:bg-red-100"
                      >
                        تأیید لغو
                      </button>
                      <button
                        type="button"
                        onClick={() => setCancelId(null)}
                        className="rounded-full border border-line px-3 py-1.5 text-[10px] font-semibold text-ink-soft transition hover:bg-paper"
                      >
                        انصراف
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setCancelId(appointment.id)}
                      className="rounded-full border border-line px-3 py-1.5 text-[10px] font-semibold text-ink-soft transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      لغو نوبت
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-[10px] leading-5 text-muted">
            نوبت‌ها در همین مرورگر ذخیره شده‌اند. برای ثبت واقعی، با پذیرش
            کلینیک هماهنگ کن.
          </p>
        </div>
      ) : null}

      <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <Icon name="info" className="h-4 w-4 text-forest-600" />
          <h2 className="text-sm font-bold text-ink">
            نکات مهم پیش از مراجعه
          </h2>
        </div>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {appointmentNotes.map((note) => (
            <li
              key={note}
              className="flex items-start gap-2 text-[10px] leading-5 text-muted"
            >
              <Icon
                name="check"
                className="mt-0.5 h-3 w-3 shrink-0 text-forest-600"
              />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
