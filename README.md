# Sri Lakshmi Chennakesava Swami Devastanam, Markapur

An unofficial, devotee-built site for the Chennakesava Swamy temple at Markapuram,
Prakasam District, Andhra Pradesh.

- **[WEBSITE-DESIGN-DOCUMENT.md](WEBSITE-DESIGN-DOCUMENT.md)**: the source of truth.
  Read this before changing anything; it records *why* each decision was made.
- **[mockup.html](mockup.html)**: the approved design direction.
- **`site/`**: the Astro site.

## Running it

```bash
cd site
npm install
npm run dev      # http://localhost:4321/chennakesava-temple/
npm test         # the darshan-hours logic
npm run build
```

## Editing content, no code required

Three files under `site/src/data/`. Edit them on github.com and the site rebuilds itself.

| File | What it holds |
|---|---|
| `timings.json` | Weekly hours, festival-day overrides, daily rituals |
| `festivals.json` | Brahmotsavam day by day, annual observances |
| `sevas.json` | Sevas offered |

**Changing the hours for one day**, a festival or a closure, means adding an entry to
`overrides` in `timings.json`:

```json
{ "date": "2027-04-11", "note": "Rathotsavam, extended darshan",
  "hours": [{ "open": "04:00", "close": "23:00" }] }
```

The open/closed badge picks it up automatically. Dates are `YYYY-MM-DD`, times are
24-hour, and both are read in Markapur's timezone regardless of where the visitor is.

## Three things not to break

1. **The hours published are the *earliest* any source reports.** Sources disagree
   (8:30, 8:50, 9:00 PM). Publishing the earliest means the badge can say "closed" while
   the temple is open, but never the reverse. Nobody makes a wasted journey because of
   us. `npm test` enforces this. Don't widen the hours to a later closing time without a
   photograph of the board at the temple.

2. **No seva prices, no bank details, no phone number.** This site has no sanction from
   the temple or the Endowments Department. A placeholder phone number is worse than
   none, because someone will dial it. See §13 of the design document.

3. **Festival dates are entered by hand, once a year.** They are lunar and they shift.
   Computing them from a panchangam gets them wrong in ways nobody catches until the page
   is already wrong.

## Deployment

Once live: **https://yellow-leaves-studio.github.io/chennakesava-temple/**

Pushing to `main` builds and publishes. The workflow runs `npm test` first and will not
deploy if the darshan-hours logic fails.

### First-time setup, step by step

Do this once. Steps 1 and 3 are on github.com and cannot be done from the command line.

**1. Commit and push everything to `main`.**

```bash
git add .
git commit -m "Phase 1: static site"
git push origin main
```

The push alone will not publish anything yet. Step 2 is what switches Pages on.

**2. Turn on Pages, and set the source to Actions.**

Repo → **Settings** → **Pages** → under *Build and deployment*, set
**Source** to **GitHub Actions**.

> This is the step everyone misses. Leave it on the default *Deploy from a branch* and
> the workflow will run, go green, and publish nothing. There is no error to tell you.

**3. Watch the first run.**

Repo → **Actions** tab → *Deploy to GitHub Pages*. Two jobs, `build` then `deploy`.
The first run takes two or three minutes. If `build` fails on `npm test`, the hours
logic is broken and it is correct that nothing shipped.

If no run appears at all, the workflow only triggers on `main`. Check which branch you
pushed, or use **Run workflow** on that page to fire it by hand.

**4. Open the site.**

`https://yellow-leaves-studio.github.io/chennakesava-temple/`

Give it a minute after the deploy job goes green; the first publish can lag.

**5. Check it on a real phone**, not a desktop window made narrow. That is the device
85% of visitors will use, and it is the only way to know the fonts and tap targets are
right in the hand.

### If something is wrong

| Symptom | Cause |
|---|---|
| 404 on every page | Source not set to **GitHub Actions** (step 2), or the deploy job has not run |
| Page loads, all links 404, no styles | `base` in `astro.config.mjs` does not match the repo name |
| Workflow never runs | Pushed to a branch other than `main` |
| `build` fails | Read the `npm test` output. A failing test here means the site would have published wrong opening hours |

### Two things that will break it later

**Renaming the repo.** The site is a Pages *project* site served from a subdirectory, so
`astro.config.mjs` sets `base: '/chennakesava-temple'`. Rename the repo and that must
change to match, or every link 404s.

**Adding the temple's own domain.** Set `base` to `'/'`, update `site` to the new domain,
add `site/public/CNAME` containing just the domain, then point the DNS at GitHub Pages
and tick *Enforce HTTPS* in Settings → Pages. Register the domain in the temple's name,
not a personal one, or the site dies when someone moves on.

## Still open

A phone number, the domain, official sanction, and photographs. There are none that are
legally usable, which is why the entire site is drawn in SVG.
