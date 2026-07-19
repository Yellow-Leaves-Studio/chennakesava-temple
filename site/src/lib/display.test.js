// Run: npm test
// Covers the two derived things the pages assert as fact: the stretch every source for
// the sun alignment agrees on, and how the festival days collapse.

import assert from 'node:assert/strict';
import { intersect, position, band, label } from './overlap.js';
import { groupDays, groupDate, groupLabel } from './festivals.js';
import sun from '../data/sun.json' with { type: 'json' };
import festivals from '../data/festivals.json' with { type: 'json' };

let run = 0;
const check = (name, fn) => { fn(); run++; console.log(`  ok  ${name}`); };

console.log('\noverlap()\n');

check('finds the stretch every published window covers', () => {
  const common = intersect(sun.windows);
  // latest start is 23 Dec, earliest end is 3 Jan
  assert.equal(common.from, '2000-12-23');
  assert.equal(common.to, '2001-01-03');
});

check('the overlap sits inside every single window', () => {
  const c = intersect(sun.windows);
  for (const w of sun.windows) {
    assert.ok(Date.parse(c.from) >= Date.parse(w.from), `${w.source} starts after the overlap`);
    assert.ok(Date.parse(c.to) <= Date.parse(w.to), `${w.source} ends before the overlap`);
  }
});

check('returns null when windows do not all meet', () => {
  assert.equal(intersect([
    { from: '2000-12-01', to: '2000-12-05' },
    { from: '2000-12-10', to: '2000-12-20' },
  ]), null);
});

check('positions stay on the axis', () => {
  const axis = sun.axis;
  assert.equal(position(axis.from, axis), 0);
  assert.equal(position(axis.to, axis), 100);
  assert.equal(position('1999-01-01', axis), 0);   // clamped
  assert.equal(position('2099-01-01', axis), 100); // clamped
});

check('bars have positive width and stay within the axis', () => {
  for (const w of sun.windows) {
    const b = band(w.from, w.to, sun.axis);
    assert.ok(b.width > 0, `${w.source} has no width`);
    assert.ok(b.left >= 0 && b.left + b.width <= 100.001, `${w.source} runs off the axis`);
  }
});

check('formats dates the way the page shows them', () => {
  assert.equal(label('2000-12-16'), '16 Dec');
  assert.equal(label('2001-01-04'), '4 Jan');
});

console.log('\nfestival grouping\n');

const groups = groupDays(festivals.brahmotsavam.days);

check('keeps every day, loses none', () => {
  const kept = groups.reduce((n, g) => n + g.days.length, 0);
  assert.equal(kept, festivals.brahmotsavam.days.length);
});

check('the two nights that matter get their own node', () => {
  const solo = groups.filter((g) => g.highlight);
  assert.equal(solo.length, 2);
  assert.equal(solo.every((g) => g.days.length === 1), true);
  assert.match(solo[0].days[0].name, /Garuda/);
  assert.match(solo[1].days[0].name, /Rathotsavam/);
});

check('runs between them are folded up', () => {
  assert.ok(groups.length < festivals.brahmotsavam.days.length, 'nothing was collapsed');
  assert.ok(groups.some((g) => g.days.length > 1), 'no run was folded');
});

check('a highlight is never swallowed into a run', () => {
  for (const g of groups) {
    if (g.days.length > 1) assert.equal(g.days.some((d) => d.highlight), false);
  }
});

check('a run never mixes two phases', () => {
  for (const g of groups) {
    assert.equal(new Set(g.days.map((d) => d.phase)).size, 1, 'run spans phases');
  }
});

check('the opening ceremonies are not swept in with the vahana cycle', () => {
  const opening = groups.find((g) => g.phase === 'opening');
  assert.equal(opening.days.length, 3);
  assert.match(groupLabel(opening), /Kalyanotsavam/);
});

check('a repeated name is listed once, not twice', () => {
  const label = groupLabel({ days: [
    { name: 'Vasantotsavam begins' }, { name: 'Vasantotsavam concludes' },
  ] });
  assert.equal(label, 'Vasantotsavam');
});

check('date ranges read correctly', () => {
  assert.equal(groupDate({ days: [{ date: '2026-04-01' }] }), '1 Apr');
  assert.equal(groupDate({ days: [{ date: '2026-04-04' }, { date: '2026-04-08' }] }), '4–8 Apr');
  assert.equal(groupDate({ days: [{ date: '2026-03-30' }, { date: '2026-04-02' }] }), '30 Mar–2 Apr');
});

check('a folded run lists its names', () => {
  const label = groupLabel({ days: [{ name: 'Simha Vahana Seva' }, { name: 'Sesha Vahana Seva' }] });
  assert.equal(label, 'Simha, Sesha');
});

console.log(`\n${run} checks passed\n`);
