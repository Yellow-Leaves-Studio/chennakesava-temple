// The sun page's whole argument is "the sources disagree, and here is the part they all
// agree on". That common stretch is derived from the data, never written down: if a
// source is added or corrected and the overlap shrinks, a typed-in band becomes a lie.

const day = (iso) => Date.parse(`${iso}T00:00:00Z`);

/** Latest start, earliest end. Null when the windows do not all overlap. */
export function intersect(windows) {
  if (!windows.length) return null;
  const from = windows.reduce((a, w) => (day(w.from) > day(a) ? w.from : a), windows[0].from);
  const to = windows.reduce((a, w) => (day(w.to) < day(a) ? w.to : a), windows[0].to);
  return day(from) <= day(to) ? { from, to } : null;
}

/** Where a date sits on the axis, 0 to 100. Clamped, so a stray window cannot escape. */
export function position(iso, axis) {
  const span = day(axis.to) - day(axis.from);
  const at = (day(iso) - day(axis.from)) / span;
  return Math.min(100, Math.max(0, at * 100));
}

/** left/width percentages for a bar, ready for inline style. */
export function band(from, to, axis) {
  const left = position(from, axis);
  return { left, width: position(to, axis) - left };
}

/** "16 Dec" / "4 Jan" */
export function label(iso) {
  const d = new Date(`${iso}T00:00:00Z`);
  return `${d.getUTCDate()} ${d.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' })}`;
}
