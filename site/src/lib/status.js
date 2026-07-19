// Is the temple open right now?
//
// Two things this must get right:
//  1. Always answer in temple-local time. A devotee in New Jersey checking at midnight
//     wants Markapur's clock, not their own.
//  2. Fail toward "closed". Published hours are the intersection of every source (the
//     earliest closing anyone reports), so this can say "closed" while the temple is
//     open, but never the reverse. Nobody drives to a shut temple because of us.

const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/** Wall-clock weekday, date and minute-of-day in the given zone, for any instant. */
export function zonedParts(instant, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', {
      timeZone,
      weekday: 'long',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hour12: false,
    })
      .formatToParts(instant)
      .map((p) => [p.type, p.value]),
  );
  // some engines render midnight as hour "24"
  const hour = Number(parts.hour) % 24;
  return {
    weekday: parts.weekday.toLowerCase(),
    date: `${parts.year}-${parts.month}-${parts.day}`,
    minutes: hour * 60 + Number(parts.minute),
  };
}

/** Next calendar date, as YYYY-MM-DD. Pure string arithmetic in UTC, so no zone drift. */
export function nextDate(isoDate) {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

/** Hours that apply on a given date: an override if one exists, else the weekly schedule. */
function hoursFor(timings, date, weekday) {
  const override = (timings.overrides || []).find((o) => o.date === date);
  return override
    ? { hours: override.hours, note: override.note || null }
    : { hours: timings.regular[weekday] || [], note: null };
}

/**
 * @returns {{open: boolean, until: string|null, note: string|null, nextDay: boolean}}
 *   `until` is when it closes (if open) or next opens (if closed); null if never.
 */
export function status(timings, instant = new Date()) {
  const { weekday, date, minutes } = zonedParts(instant, timings.timezone);
  const { hours, note } = hoursFor(timings, date, weekday);

  for (const slot of hours) {
    if (minutes >= toMinutes(slot.open) && minutes < toMinutes(slot.close)) {
      return { open: true, until: slot.close, note, nextDay: false };
    }
  }

  const laterToday = hours.map((s) => s.open).find((t) => toMinutes(t) > minutes);
  if (laterToday) return { open: false, until: laterToday, note, nextDay: false };

  // nothing left today, so take the first opening tomorrow, honouring tomorrow's override
  const tomorrow = nextDate(date);
  const tomorrowWeekday = DAYS[(DAYS.indexOf(weekday) + 1) % 7];
  const next = hoursFor(timings, tomorrow, tomorrowWeekday).hours[0];
  return { open: false, until: next ? next.open : null, note, nextDay: true };
}

/** "6:00 AM" from "06:00". Devotees read 12-hour time here. */
export function display(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h < 12 ? 'AM' : 'PM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, '0')} ${suffix}`;
}
