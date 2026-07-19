// Brahmotsavam is a procession, not a list of nineteen unrelated days. The ribbon shows
// the nights that matter as their own nodes and folds the runs between them into one, so
// Garuda and Rathotsavam are not buried among the vahana sevas either side of them.

const PHASE_NOTE = {
  opening: 'Opening ceremonies',
  vahana: 'Vahana sevas',
  closing: 'The festival winds down',
};

/**
 * Fold consecutive days into one entry, but only where they belong to the same phase.
 * Grouping on "not highlighted" alone swept the opening ceremonies in with the vahana
 * cycle and buried Kalyanotsavam in an eight-day run. A highlighted day always stands
 * alone.
 * @returns {Array<{days: object[], highlight: boolean, phase: string}>}
 */
export function groupDays(days) {
  const groups = [];
  for (const day of days) {
    const last = groups[groups.length - 1];
    const canFold = last && !last.highlight && !day.highlight && last.phase === day.phase;
    if (canFold) last.days.push(day);
    else groups.push({ days: [day], highlight: !!day.highlight, phase: day.phase });
  }
  return groups;
}

/** The line under a folded run: what this stretch of the festival is. */
export function groupNote(group) {
  if (group.highlight || group.days.length === 1) return null;
  const note = PHASE_NOTE[group.phase];
  return note ? `${note}, ${group.days.length} nights` : `${group.days.length} nights`;
}

/** "1 Apr" for a single day, "4–8 Apr" for a run. */
export function groupDate(group) {
  const fmt = (iso, withMonth = true) => {
    const d = new Date(`${iso}T00:00:00Z`);
    const day = d.getUTCDate();
    return withMonth
      ? `${day} ${d.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' })}`
      : String(day);
  };
  const first = group.days[0];
  const last = group.days[group.days.length - 1];
  if (first === last) return fmt(first.date);
  const sameMonth = first.date.slice(0, 7) === last.date.slice(0, 7);
  return sameMonth
    ? `${fmt(first.date, false)}–${fmt(last.date)}`
    : `${fmt(first.date)}–${fmt(last.date)}`;
}

/**
 * The names in a run, joined for one line. Trimming "Vahana Seva" and "begins/concludes"
 * can make two entries identical, so duplicates are dropped: Vasantotsavam spans several
 * nights and was otherwise listed twice in a row.
 */
export function groupLabel(group) {
  if (group.days.length === 1) return group.days[0].name;
  const names = group.days.map((d) =>
    d.name.replace(/ Vahana Seva$/, '').replace(/ begins$| concludes$/, ''),
  );
  return [...new Set(names)].join(', ');
}
