# Sri Lakshmi Chennakesava Swami Devastanam, Markapur

An unofficial, devotee-built site for the Chennakesava Swamy temple at Markapuram,
Prakasam District, Andhra Pradesh.

- **[WEBSITE-DESIGN-DOCUMENT.md](WEBSITE-DESIGN-DOCUMENT.md)** — the source of truth.
  Read this before changing anything; it records *why* each decision was made.
- **[mockup.html](mockup.html)** — the approved design direction.
- **`site/`** — the Astro site.

## Running it

```bash
cd site
npm install
npm run dev      # http://localhost:4321/chennakesava-temple/
npm test         # the darshan-hours logic
npm run build
```

## Editing content — no code required

Three files under `site/src/data/`. Edit them on github.com and the site rebuilds itself.

| File | What it holds |
|---|---|
| `timings.json` | Weekly hours, festival-day overrides, daily rituals |
| `festivals.json` | Brahmotsavam day by day, annual observances |
| `sevas.json` | Sevas offered |

**Changing the hours for one day** — a festival, a closure — means adding an entry to
`overrides` in `timings.json`:

```json
{ "date": "2027-04-11", "note": "Rathotsavam — extended darshan",
  "hours": [{ "open": "04:00", "close": "23:00" }] }
```

The open/closed badge picks it up automatically. Dates are `YYYY-MM-DD`, times are
24-hour, and both are read in Markapur's timezone regardless of where the visitor is.

## Three things not to break

1. **The hours published are the *earliest* any source reports.** Sources disagree
   (8:30, 8:50, 9:00 PM). Publishing the earliest means the badge can say "closed" while
   the temple is open, but never the reverse — nobody makes a wasted journey because of
   us. `npm test` enforces this. Don't widen the hours to a later closing time without a
   photograph of the board at the temple.

2. **No seva prices, no bank details, no phone number.** This site has no sanction from
   the temple or the Endowments Department. A placeholder phone number is worse than
   none — someone will dial it. See §13 of the design document.

3. **Festival dates are entered by hand, once a year.** They are lunar and they shift.
   Computing them from a panchangam gets them wrong in ways nobody catches until the page
   is already wrong.

## Deployment

Live at **https://yellow-leaves-studio.github.io/chennakesava-temple/**

Pushing to `main` builds and publishes to GitHub Pages. The workflow runs `npm test`
first and will not deploy if the hours logic fails.

**One-time setup:** in the repo's *Settings → Pages*, set **Source** to
**GitHub Actions**. Without that the workflow builds and then silently deploys nowhere.

The site is a GitHub Pages *project* site, served from a subdirectory, so
`astro.config.mjs` sets `base: '/chennakesava-temple'`. **If the repo is renamed, that
must change to match or every link 404s.**

When the temple's own domain arrives: set `base` to `'/'`, update `site`, add
`site/public/CNAME` containing the domain, and point the DNS at GitHub Pages. Register
it in the temple's name, not a personal one.

## Still open

A phone number · the domain · official sanction · photographs (there are none that are
legally usable, which is why the entire site is drawn in SVG).
