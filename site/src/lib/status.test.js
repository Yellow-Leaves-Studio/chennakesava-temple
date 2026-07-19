// Run: npm test
// No framework on purpose. If this file passes, the badge is telling the truth.
//
// Every instant below is given in UTC, then asserted against Markapur's clock. That is
// the whole point. 2026-07-18 is a Saturday, 2026-07-19 a Sunday.

import assert from 'node:assert/strict';
import { status, display, zonedParts, nextDate } from './status.js';
import timings from '../data/timings.json' with { type: 'json' };

const at = (utc) => status(timings, new Date(utc));
let run = 0;
const check = (name, fn) => { fn(); run++; console.log(`  ok  ${name}`); };

console.log('\nstatus()\n');

check('Sunday morning: open until evening', () => {
  const s = at('2026-07-19T01:30:00Z'); // 07:00 IST
  assert.equal(s.open, true);
  assert.equal(s.until, '20:30');
});

check('Sunday night: closed, opens next morning', () => {
  const s = at('2026-07-19T15:30:00Z'); // 21:00 IST
  assert.equal(s.open, false);
  assert.equal(s.until, '06:00');
  assert.equal(s.nextDay, true);
});

check('Saturday morning: open, but only until the midday break', () => {
  const s = at('2026-07-18T04:30:00Z'); // 10:00 IST Sat
  assert.equal(s.open, true);
  assert.equal(s.until, '12:00'); // not 20:30, Saturday closes at noon
});

check('Saturday midday break: closed, reopens at 5pm the same day', () => {
  const s = at('2026-07-18T07:30:00Z'); // 13:00 IST Sat
  assert.equal(s.open, false);
  assert.equal(s.until, '17:00');
  assert.equal(s.nextDay, false);
});

check('Saturday evening: open again after the break', () => {
  const s = at('2026-07-18T12:00:00Z'); // 17:30 IST Sat
  assert.equal(s.open, true);
  assert.equal(s.until, '20:30');
});

check('festival override wins over the weekly schedule', () => {
  // 23:30 UTC on the 10th is 05:00 IST on the 11th. If the override were matched
  // against the UTC date it would be missed entirely, and this would read "closed".
  const s = at('2027-04-10T23:30:00Z');
  assert.equal(s.open, true, 'override day should be open at 5am');
  assert.equal(s.until, '23:00');
  assert.match(s.note, /Rathotsavam/);
});

check('never claims open when every source says shut', () => {
  // 05:00 IST on an ordinary day, before the 06:00 opening
  const s = at('2026-07-18T23:30:00Z');
  assert.equal(s.open, false);
});

console.log('\nzonedParts()\n');

check('reads Markapur wall-clock from a UTC instant', () => {
  const p = zonedParts(new Date('2026-07-18T20:00:00Z'), 'Asia/Kolkata');
  assert.equal(p.date, '2026-07-19'); // +5:30 rolls past midnight
  assert.equal(p.weekday, 'sunday');
  assert.equal(p.minutes, 1 * 60 + 30); // 01:30 IST
});

check('midnight does not become minute 1440', () => {
  const p = zonedParts(new Date('2026-07-18T18:30:00Z'), 'Asia/Kolkata'); // 00:00 IST
  assert.equal(p.minutes, 0);
});

console.log('\nnextDate()\n');

check('rolls month and year boundaries', () => {
  assert.equal(nextDate('2026-07-19'), '2026-07-20');
  assert.equal(nextDate('2026-07-31'), '2026-08-01');
  assert.equal(nextDate('2026-12-31'), '2027-01-01');
  assert.equal(nextDate('2028-02-28'), '2028-02-29'); // leap
});

console.log('\ndisplay()\n');

check('formats 12-hour time', () => {
  assert.equal(display('06:00'), '6:00 AM');
  assert.equal(display('20:30'), '8:30 PM');
  assert.equal(display('12:00'), '12:00 PM');
  assert.equal(display('00:00'), '12:00 AM');
});

console.log(`\n${run} checks passed\n`);
