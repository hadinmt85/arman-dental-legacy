export type StoredAppointment = {
  id: string;
  serviceId: string;
  serviceTitle: string;
  doctorId: string;
  doctorName: string;
  dateISO: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  notes: string;
  createdAt: string;
};

export type DayOption = {
  iso: string;
  weekday: string;
  day: string;
  month: string;
  relative: string;
};

export const APPOINTMENTS_KEY = "arman-appointments-v1";

export const SLOT_TIMES = [
  "09:00",
  "10:30",
  "12:00",
  "14:00",
  "15:30",
  "17:00",
  "18:30",
] as const;

const weekdayFormatter = new Intl.DateTimeFormat("fa-IR", { weekday: "long" });
const dayFormatter = new Intl.DateTimeFormat("fa-IR", { day: "numeric" });
const monthFormatter = new Intl.DateTimeFormat("fa-IR", { month: "long" });

export function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Next bookable days, skipping Fridays (the clinic's weekly day off). */
export function buildDays(count = 12): DayOption[] {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const days: DayOption[] = [];

  for (let offset = 0; days.length < count && offset < 40; offset += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + offset);

    if (date.getDay() === 5) continue;

    days.push({
      iso: toISODate(date),
      weekday: weekdayFormatter.format(date),
      day: dayFormatter.format(date),
      month: monthFormatter.format(date),
      relative: offset === 0 ? "امروز" : offset === 1 ? "فردا" : "",
    });
  }

  return days;
}

export function formatDayLong(day: DayOption): string {
  return `${day.weekday} ${day.day} ${day.month}`;
}

export function slotIsPast(dateISO: string, time: string): boolean {
  const slot = new Date(`${dateISO}T${time}:00`);
  return slot.getTime() <= Date.now();
}

/** Deterministic pseudo-availability so the demo schedule feels realistic. */
export function slotIsDemoBusy(dateISO: string, time: string): boolean {
  const key = `${dateISO}-${time}`;
  let hash = 7;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) % 997;
  }
  return hash % 6 === 0;
}

export function slotIsBooked(
  appointments: StoredAppointment[],
  dateISO: string,
  time: string,
): boolean {
  return appointments.some(
    (appointment) =>
      appointment.dateISO === dateISO && appointment.time === time,
  );
}

export function readAppointments(): StoredAppointment[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(APPOINTMENTS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is StoredAppointment =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as StoredAppointment).id === "string" &&
        typeof (item as StoredAppointment).dateISO === "string" &&
        typeof (item as StoredAppointment).time === "string",
    );
  } catch {
    return [];
  }
}

export function saveAppointments(appointments: StoredAppointment[]): void {
  try {
    window.localStorage.setItem(
      APPOINTMENTS_KEY,
      JSON.stringify(appointments),
    );
  } catch {
    // Storage can be unavailable in private modes; the demo still works in memory.
  }
}

export function createTrackingCode(): string {
  const number = Math.floor(100000 + Math.random() * 900000);
  return `ARN-${number}`;
}
