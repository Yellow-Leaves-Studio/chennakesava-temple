# Website Design Document
## Sri Lakshmi Chennakesava Swami Devastanam, Markapur

**Status:** v4 — Phase 1 built and verified locally, awaiting push.
**Last updated:** 2026-07-19

> **This document leads the code.** Any change to palette, hosting, content policy or
> scope is recorded here *first*, then implemented. If the two ever disagree, this file
> is right and the code is a bug.

Legend: `[NEED]` = asset/content required · `[VERIFY]` = web-sourced, unconfirmed by the temple

---

## 0. Locked decisions

| # | Decision | Consequence |
|---|---|---|
| 1 | **Family/personal connection**, no formal standing | Content is hard to get; authority must be earned |
| 2 | **Build first, then seek sanction** | Phase 1 ships as a clearly-labelled devotee site: no seva prices, no bank details, disclaimer in footer |
| 3 | **Web-sourced content only** for Phase 1 | No on-site visit before launch. All facts marked `[VERIFY]` |
| 4 | **No photographs** — none are legally usable | Design is typographic + SVG. No gallery in Phase 1. No image pipeline |
| 5 | **English only, Telugu terms inline** | No `/te/` mirror. Halves every future edit |
| 6 | **Conservative timings + live badge + date overrides** | Safe-by-construction: the badge can err toward "closed", never toward "open" |
| 7 | **Markapur slate palette**, not the warm cream first proposed | `--surface` is the page, `--ground` is recessed. Kumkum the only accent; gold for ornament and the sun (§8) |
| 8 | **Light and dark, device-following, with a manual override** | Sunlight legibility outside the temple beats respecting the OS setting (§8) |
| 9 | **No webfonts at all** | A silent fallback on a Telugu glyph is worse than none. System faces throughout (§8) |

**What the site optimizes for, in priority order:** accuracy (the utility) → the story
(the differentiator) → craft (throughout) → official-readiness (a constraint: build
nothing that makes the EO conversation harder later).

---

## 1. Purpose

What does a visitor need in the first 15 seconds?

1. Is the temple open right now, and when does it close?
2. Where is it and how do I get there?
3. What's happening soon?
4. Everything else — history, architecture, the sun phenomenon

Items 1–3 visible without scrolling on a phone.

**Why this site deserves to exist.** Every existing page about this temple —
ttdseva.in, gotirupati.com, assorted blogs — is an ad-funded aggregator carrying
contradictory timings and no phone number. None treats the sthala purana, the 18
inscriptions, the musical pillars, or the sun phenomenon with any depth. The win is
being the correct, fast, ad-free, well-told one, and ranking for
*"markapur temple timings"*.

**Non-goals:** accounts, blog, live streaming, multi-temple structure, mobile app.

## 2. Audience

- **~85% mobile**, mid-range Android, patchy 4G
- **Local devotees** — timings, festivals
- **Diaspora** — history, the story, eventually photos
- **Pilgrims planning a trip** — location, transport, timings

**Traffic is extremely spiky.** Rathotsavam reportedly draws over a lakh devotees.
Festival-week traffic could be 50–100× baseline. Static hosting on a CDN absorbs this
for free. This alone settles §7.

---

## 3. Research findings — the temple

Public sources only. **Every line is `[VERIFY]`** — sources contradict each other and
none is official.

### Identity & legend
- Deity: Sri Maha Vishnu as **Chennakesava Swamy** (చెన్నకేశవ స్వామి) with consort
  **Sri Mahalakshmi**. *Chennakesava* = "beautifully adorned" — Vishnu as
  *Alankara Priya*, fond of adornment.
- **Sthala purana:** the demon **Kesi** harassed ascetics meditating along the
  **Gundlakamma** river. Rishi **Markandeya** sought Vishnu's protection. Kesi could
  only be slain by a serpent, so Vishnu sent **Adisesha**, who killed him with poisonous
  fumes. Markandeya asked Vishnu to remain here as Chennakesava with Mahalakshmi.
- **Town name:** a milkmaid, **Marika**, worshipped Vishnu with milk and was blessed
  with a son. She built a temple in gratitude; the settlement became *Marikapuram* →
  *Markapur*.
- Markapur was in Kurnool district until 1971, then Prakasam.

### Architecture
- Vijayanagara period, **1405–1459 AD**. Walls c. **1425–1452 AD**.
- **Galigopuram: 135 feet** — reportedly the **second tallest gopuram in the Telugu
  states**. First storey attributed to Krishnadeva Raya's reign; upper storeys **1837**.
- **18 inscriptions** on the walls, documenting life and culture of the era.
- **40-pillared mandapam** — Krishna, Anjaneya, Garuda, Lakshmi, Vigneshwara with vahanas.
- **6 musical pillars** in the Kalyana Mandapam producing the sapta swaras in correct
  arohana and avarohana when tapped.
- **Sun phenomenon:** dawn light enters through placed windows and illuminates the
  deity's feet for ~20 minutes. **Dates conflict** — Dec 16–Jan 4, Dec 23–Jan 3, or
  Dec 16–Jan 14. Gets its own page; it is the temple's most distinctive feature.

### Timings — sources conflict

| Source | Reported |
|---|---|
| ttdseva.in | 6:00 AM – 8:50 PM; Sat 6 AM–12 PM, 5–9 PM |
| gotirupati.com | 6:00 AM – 8:30 PM |
| others | 6:00 AM – 9:00 PM |

Pooja schedule reported as: Abhishekam 6:00–7:30 AM, Sahasra Namarchana 8:00–8:30 AM.

**Published window = the intersection: 6:00 AM – 8:30 PM, including the Saturday
12–5 PM break.** See §6.

### Brahmotsavam — 2026 schedule (19 days, Apr 1–19)
Ankurarpana (1) · Dwajarohana, Rayabaram, Edurukolu, Suryaprabha Vahana (2) ·
Kalyanotsavam 4 AM, Chandraprabha Vahana (3) · Simha, Sesha, Vyali, Ponna, Hanuman,
**Garuda (9)**, Gaja vahanas (4–10) · **Rathotsavam (11)** · Aswa, Hamsa (12–13) ·
Vasantotsavam (14–17) · Unjal Seva (18) · conclusion (19).

Also: Moolavirat Panchamrutha Abhishekam, Maha Mangala Harathi, Mahasivaratri, Sankranthi.

Dates are lunar and shift yearly — see §7.

### Location & access
- Markapuram (town), Prakasam District, Andhra Pradesh **523316**
- On the **Gundlakamma** river; walkable from Markapur bus stand; autos available
- Rail: **Markapur Road** station, walkable. Guntakal–Vijayawada line.
- Road: Amaravati–Anantapur Express Highway. Ongole ~94 km.
- Air: Vijayawada ~227 km, Hyderabad ~272 km
- **No phone number published anywhere.** A 2017 request went unanswered. `[NEED]` —
  the single most valuable thing this site could add.

### Governance
Appears **AP Endowments Department managed** — press names an Executive Officer.

1. **Authority.** Resolved by decision #2: devotee-labelled now, sanction sought later.
2. **The state portal has a page for this temple, and it is empty.** Confirmed
   2026-07-19 at
   [aptemples.org/en-in/temples/SLCKSTemple](https://www.aptemples.org/en-in/temples/SLCKSTemple/history).
   The temple is listed; the content is not populated — no history, no timings, no sevas,
   no booking, no donation. **This closes the "link out and build nothing" option: there
   is nothing to link to.** It also sharpens why this site should exist. The official
   channel exists and is blank; that is a concrete, non-hypothetical gap, and it is the
   strongest single argument to put in front of the EO later.

**Sources:** [Substack – Ratnakar Sadasyula](https://sadashree.substack.com/p/markapur-chennakesava-swamy-temple) ·
[TTD Seva](https://ttdseva.in/sri-lakshmi-chennakesava-swamy-temple-markapur-timings-info/) ·
[GoTirupati](https://gotirupati.com/chennakesava-temple-markapur/) ·
[Brahmotsavam 2026](https://www.sanatanavibes.in/2026/04/sri-lakshmi-chennakesava-swamy-temple.html) ·
[Cosmo View](https://cosmoview.in/index.php/en/temples/temples-of-south-india/andhra-pradesh/chennakesava-swamy-temple-markapuram) ·
[AP Temples](https://aptemples.ap.gov.in/) ·
[Hans India – Rathotsavam](https://www.thehansindia.com/andhra-pradesh/markapuram-over-a-lakh-devotees-witness-chennakesava-rathotsavam-793010)

---

## 4. Research findings — temple website features

Surveyed TTD, AP Endowments, Annavaram, Srikalahasti. Scored on value here vs cost.

| Feature | Value | Cost | Verdict |
|---|---|---|---|
| Timings + open/closed now | Very high | Trivial | **Phase 1** |
| Location, map, directions | Very high | Trivial | **Phase 1** |
| History & sthala purana | High | Low | **Phase 1** |
| Festival calendar | High | Low | **Phase 1** |
| Sun-phenomenon page | High (unique) | Low | **Phase 1** |
| Seva list, informational | High | Low | **Phase 1** (no prices — decision #2) |
| Dress code, what to bring | Medium | Trivial | **Phase 1** |
| SEO / structured data | High | Low | **Phase 1** |
| Contact / phone | Very high | Trivial | Blocked — `[NEED]` a number |
| Photo gallery | High | Low | **Phase 2** — blocked on photos |
| CMS for staff | High | Low | **Phase 2** — only matters after sanction |
| Announcements / notices | Medium | Low | **Phase 2** |
| Brahmotsavam day-by-day | High in season | Medium | **Phase 2** |
| Donation via UPI/QR | Medium | Trivial | **Phase 2**, pending §10 |
| Video gallery | Low | Low | Phase 3 |
| Inscriptions archive | Medium (scholarly) | Medium | Phase 3 |
| Online seva booking | High | **Very high** | **Link to state portal** |
| Online donation gateway | High | **Very high** | **Link to state portal** |
| Paroksha seva, e-hundi | Medium | Very high | **Link to state portal** |
| Accommodation booking | Low | Very high | Skip |
| Live streaming | Medium | High + ongoing | Skip — YouTube Live is free |
| Mobile app | Low | Very high | **Never.** The site is the app. |
| Login, prasadam shop, donor wall | Low | High | Skip |

**The load-bearing insight:** everything expensive here — booking, payments,
accommodation, e-hundi — already exists, built and operated by the state. Rebuilding it
means owning KYC, PCI compliance, reconciliation, refunds, and support calls forever,
to duplicate a working system. We link out. This site's job is to be the best *front
door* to this temple, not a payments company.

---

## 5. Phase plan

### Phase 0 — Design ✅ *complete*
This document · mockups mobile + desktop · palette, type and ornament approved.
**Exit met:** mockups signed off 2026-07-19.

### Phase 1 — Static site ✅ *built, not yet pushed*
Astro, static, English with Telugu inline. Content as JSON in the repo. Lives in `site/`.

**Six pages:** Home · The temple · Darshan · Festivals · The sun · Getting there

- Open/closed badge, computed from conservative timings + date overrides (§6)
- Light/dark, following the device with a manual override (§8)
- Festival calendar and sevas from data files
- Typographic + SVG design, no images, no image pipeline
- SEO: per-page metadata, `PlaceOfWorship` structured data
- Footer disclaimer: unofficial devotee-built site, timings unverified

**Measured:** 8.2 KB gzipped per page · 168 KB total · zero external requests · no JS
bundle (the one script inlines) · WCAG AA in both themes · 11 passing checks on the
hours logic.

- **Exit:** live on GitHub Pages, verified on a real mid-range Android over 4G.
  *Outstanding:* push, enable Pages, and test on an actual phone rather than an emulated
  viewport.

### Phase 2 — Photos, editability, seasonal content
- Photo gallery, once you've had someone shoot the temple
- **Sveltia CMS** — git-backed, free, browser-based. For *temple staff*, post-sanction.
  You don't need it; GitHub's web editor already covers you.
- Announcements banner for closures and special events
- Brahmotsavam day-by-day microsite
- Donations: link to the state portal, or UPI + QR — pending §10
- **Exit:** a non-technical person updates timings unassisted

### Phase 3 — Only if demand proves it
Video gallery · WhatsApp/SMS festival broadcast · archive of the 18 inscriptions ·
YouTube Live embed during Brahmotsavam

### Phase 4 — Backend, if and only if justified
The dynamic CMS with a real server. **Trigger conditions:** the git-backed CMS is
measurably insufficient **and** someone is committed to operating a server long-term.
Until both hold, this is cost without benefit. Static sites don't get hacked, don't go
down at Rathotsavam, and don't send a monthly bill.

---

## 6. Timings model

**Published window is the intersection of all sources: 6:00 AM – 8:30 PM, with the
Saturday 12:00–5:00 PM break included.**

The asymmetry is deliberate. A false "open" sends someone on a wasted trip; a false
"closed" mildly annoys someone who checks anyway. The conservative window can only ever
err toward "closed" — **safe by construction**, which is what makes the live badge
publishable on unverified data.

**Data shape** — regular schedule plus date-specific overrides:

```json
{
  "regular": {
    "default":  [{ "open": "06:00", "close": "20:30" }],
    "saturday": [{ "open": "06:00", "close": "12:00" },
                 { "open": "17:00", "close": "20:30" }]
  },
  "overrides": [
    { "date": "2027-04-11", "open": "04:00", "close": "23:00",
      "note": "Rathotsavam — extended darshan" }
  ]
}
```

Badge logic: check `overrides` for today first, else `regular`. Overrides carry a note
shown alongside the badge.

**Updating in Phase 1:** edit this one JSON file in GitHub's web editor — works from a
phone, no build step, no CMS. Sveltia arrives in Phase 2 for temple staff, not for you.

**Festival dates are lunar and shift yearly.** Panchangam computation is a trap —
regional variation makes it wrong in ways nobody catches until a festival page is wrong.
Entered by hand, once a year. One recurring human task, deliberately.

## 7. Sitemap

```
/                  Home
/about             History, sthala purana, deity, architecture
/darshan           Timings, sevas, dress code, what to bring
/festivals         Annual calendar
/visit             Address, map, directions, how to reach
/sun-phenomenon    The December–January alignment
```

Six pages. Gallery joins in Phase 2 when photos exist.

**Language:** English throughout, with Telugu script inline for the temple name, deity
names, festivals, and sevas — *Rathotsavam (రథోత్సవం)*, *Garuda Vahana Seva*,
*Kalyanotsavam*. Not translated to "chariot festival"; the Telugu term is the real name.
Font: **the platform's own Telugu face**, no webfont. Self-hosting Noto Sans Telugu was
the original plan; it was dropped because a silent fallback on a Telugu glyph is worse
than no webfont at all, and every device that reads Telugu already ships a face for it.
See §8.

## 8. Visual design

**Direction:** dignified and calm. Comparable temple sites default to saturated
gradients, animated glitter, marquee text, and autoplay audio. Deliberately the
opposite. With no photography, the design is carried by **typography, color, and SVG
motifs drawn from the temple's own geometry** — the gopuram's tiered silhouette,
inscription-inspired rule work, the sapta-swara motif for the musical pillars.

This is a constraint that pays: no image pipeline, no lightbox, negligible page weight,
instant on 4G. When real photos arrive they slot in without a redesign.

### Palette — approved at mockup, and in the build

The warm-cream direction originally proposed here was **rejected at the mockup stage**.
Cream ground, serif display and terracotta accent is where nearly every temple site — and
nearly every generated design — lands. Markapur has manufactured **slate** for
generations, so the neutral is that: a cool grey-green stone. Kumkum is the only accent.
Gold is reserved for sacred ornament and the sun, and appears nowhere else.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--surface` | `#F8F9F7` | `#1F2523` | **The page.** Paper. Body, masthead, main |
| `--ground` | `#EEF0EE` | `#171B1A` | **Recessed only.** Nav strip, cards |
| `--line` | `#D3D8D4` | `#343C39` | Rules and borders |
| `--ink` | `#232A27` | `#E7EBE8` | Body text |
| `--ink-soft` | `#5D6A63` | `#95A099` | Secondary text |
| `--kumkum` | `#96222A` | `#DE8087` | The single accent. Links, active nav, live badge |
| `--kumkum-soft` | `#F2E0DF` | `#2E1D1C` | Open-now badge ground |
| `--gold` | `#A8781A` | `#D6A63F` | Ornament and the sun. Never a large fill |

> **`--surface` is the page; `--ground` is recessed.** Getting this backwards was a real
> bug in the first build — `mockup.html` uses `--ground` for the *document backdrop the
> phone frames sit on*, and `.site{--surface}` for the temple site itself. Porting the
> backdrop colour onto `body` produced a grey page under a near-white header. It also
> silently broke the gopuram, which punches its doorway and tier niches with
> `var(--surface)` and only reads as a cut-out when the page behind it matches.

Dark values are **hand-tuned, not inverted** — kumkum lightens to a rose and gold
brightens, because the light-mode versions go muddy on a dark ground.

**Measured contrast** (WCAG AA needs 4.5:1 for body text):

| | Light | Dark |
|---|---|---|
| Body text | 13.89:1 | 12.95:1 |
| Secondary text | 5.36:1 | 5.76:1 |
| Links | 7.77:1 | 5.60:1 |
| Nav | 4.95:1 | 6.43:1 |

### Light and dark

Both are designed. The site follows the device by default **and carries a manual
control**, because the two can conflict here in a way they don't on most sites: a devotee
whose phone lives in dark mode has no other way to get a readable page while standing in
the sun outside the gopuram. Bright-sunlight legibility is a stated constraint (§2), so
the override earns its keep.

- The control shows **both options — "Light | Dark"** with the active one marked, not a
  single icon toggle. Working out whether a half-moon means *current state* or *what
  you'll get* is not a puzzle to hand an older visitor in direct sunlight.
- **A blocking inline script in `<head>` sets `data-theme` before first paint.** Without
  it, anyone who has chosen light gets a dark flash on every page load. It must stay
  inline and must not be deferred or bundled.
- The CSS override wins in **both** directions via
  `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { … } }`, which
  also means the light palette is written once rather than duplicated.
- Choice persists in `localStorage`; clearing it returns to following the device.

**Type** — all system-resolved. No webfont is loaded at all: the CSP-free win is real,
but the deciding reason is that a silent fallback on a Telugu glyph is worse than having
no webfont. Telugu renders in the platform's own face, which is present on every device
that reads Telugu.
- Body: `system-ui` at **18px on mobile** — many visitors are older, reading outdoors
- Headings: a system serif (Iowan Old Style / Palatino / Georgia)
- Times and data: system monospace, `tabular-nums` so digits align in columns

**Ornament** — drawn as geometry, never imported as images. Chakra (Vishnu's discus, and
already a radial mandala), padma, muggu, padma-patti, tirunamam, lotus, bud, and the
gopuram itself. See `site/src/components/Ornaments.astro`; each is defined once and
referenced with `<use>`.

### Rules the ornament has to follow

**Dividers tile. They never stretch.** The muggu and padma-patti rules were first drawn
with `preserveAspectRatio="none"` and stretched to the container width. At 46rem that
pulls each loop into a long flat lens and the motif stops reading as a kolam at all. They
are now SVG `<pattern>` fills, so the unit repeats at its drawn proportions no matter how
wide the column gets. Any future ornament used as a rule follows the same rule: tile it,
do not scale it.

**Ornament has to survive the light theme.** Gold at low opacity is legible against a
dark ground and close to invisible against paper. `--gold-line` is therefore set
separately per theme rather than shared, and the light value is the stronger of the two
(0.62 against 0.40). Check ornament in light mode before calling it done, since dark
flatters it.

**Inside a `<pattern>`, use `var(--token)` and never `currentColor`.** Pattern content
inherits from where it is *defined*, not from the element referencing it. `currentColor`
in a shared `<defs>` therefore resolves to the body text colour, and the rules silently
rendered in `--ink` instead of gold, flipping grey in light mode and cream in dark. A
custom property resolves from `:root` anywhere in the document and reaches inside.
`<use>` does not have this problem, which is why the chakra, lotus and namam stayed gold
while only the dividers lost it.

> **Verify the paint, not the token.** The bug above survived a check that confirmed
> `--gold-line` held the right value on `:root` and that the rule element carried the
> right `color`. Both were true; the pixels were still grey. When a colour matters, read
> the resolved `stroke`/`fill` off the element that actually draws, and look at it.

**The chakra watermark is capped by the text sitting on it, not by taste.** The crest
sits directly over the masthead chakra, so the watermark's strength is bounded by the
contrast of the weakest text above it, which is the 10px uppercase place line. At the
original `--ink-soft` that ceiling was 0.13, already where it stood, so there was no
headroom at all.

Raising the ornament therefore meant darkening that line first. `--ink-place` (`#4C574F`
light, `#A6B0A9` dark) is a dedicated token for it, still visibly lighter than the name
so the hierarchy holds. That bought a chakra at **0.24 light / 0.20 dark**, roughly
double, with the crest measured over the *blended* background rather than the flat page:

| | Worst-case bg behind crest | Name | Place line |
|---|---|---|---|
| Light | `#E5DAC2` | 10.57:1 | 5.44:1 |
| Dark | `#443F29` | 8.77:1 | 4.73:1 |

Alpha lives in `--gold-veil` rather than a CSS `opacity`, so the two themes can carry
different strengths. **If the watermark is ever strengthened again, re-measure the crest
against the blend, not against `--surface`.**

**Punctuation: no em dashes**, in copy or in code comments. Use a comma, a colon,
parentheses, or start a new sentence. En dashes stay where they are correct, which is
numeric and time ranges such as `06:00 – 20:30`.

**Favicon:** the tirunamam, at `site/public/favicon.svg`. It is a real file rather than
an inline data URI, because a data URI carrying raw `<`, `>` and spaces fails to parse in
some browsers, which is exactly how the first attempt broke. The mark is gold with the
kumkum srichurnam, and it reads at 16px because it is two flat shapes with no fine
detail. Remember the base path when linking it.

**Layout**
- Single column, max **46rem** for reading measure
- Generous spacing, clear section breaks
- **No carousels, autoplay, parallax, scroll animation, or background music.** Each
  appears on comparable temple sites; each makes them worse.

## 9. Content status

| Item | Status |
|---|---|
| History, sthala purana, architecture | **Have** (web, `[VERIFY]`) |
| Brahmotsavam schedule | **Have** (2026, `[VERIFY]`) |
| Timings | **Have**, conservative window (§6) |
| Location & transport | **Have** |
| Phone number | **Missing everywhere** — Phase 1 states this plainly, see §13 |
| Seva prices | Deferred — decision #2 |
| Photos | Missing — Phase 2 |
| Sun phenomenon exact dates | **Conflicting** — three ranges published |
| Sub-shrines, accessibility, official dress code | Missing |
| Is the temple on aptemples.ap.gov.in? | **Resolved** — listed, but the page is empty |

Phase 1 is **not blocked** on any of these. That's the point of decisions #2–#4.

## 10. Deferred: donations

**The link-out option is dead** — the temple's state-portal page is empty (§3). So the
choice narrows to two: publish the temple's official UPI ID with a QR code, or carry no
donation section at all.

UPI/QR costs nothing, integrates nothing, and carries no liability — but it requires
the temple's official UPI ID, which needs the same sanction we're deferring. So
donations and authority resolve together or not at all. **Phase 1 ships with neither**,
per decision #2. A payment gateway remains the last resort, never the first.

## 11. Technical approach

**Astro, static, GitHub Pages.** No server, no database, no monthly bill, and it
survives a lakh of devotees on Rathotsavam day without anyone being paged. The repo is
public, which is all GitHub Pages needs on the free plan.

### Why GitHub Pages, and the one thing to get right

**You are not limited to one site.** One *user* site per account
(`<username>.github.io`), but an unlimited number of *project* sites — one per
repository, served at `<username>.github.io/<repo>`. This temple site is a project
site, and it costs you nothing you'd want to spend elsewhere.

**Limits** ([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)):
1 GB site size · 100 GB/month soft bandwidth · 10 builds/hour soft. "Soft" means they
email before disabling.

**Bandwidth is a non-issue in Phase 1** precisely because we have no photographs. A page
is HTML, CSS and inline SVG — call it 60 KB. A lakh of devotees viewing two pages each
is ~12 GB, comfortably inside 100 GB.

> **Phase 2 warning.** The gallery is what could break this, not the traffic. Twenty
> photos at 200 KB, viewed by festival-week crowds, runs to terabytes and blows the cap
> outright. When photos arrive, either serve them from a proper image host or move
> hosting to Cloudflare Pages (unlimited bandwidth). **Re-check this before shipping the
> gallery.**

**The gotcha: the base path.** A project site is served from a subdirectory, so Astro
needs `base: '/<repo>'` in `astro.config.mjs`, and every internal link and asset must
respect it. Get it wrong and the site builds clean, deploys clean, and every link 404s.
When the custom domain arrives it moves to the root and `base` goes back to `/`.

Handled by setting it correctly from the first commit and keeping internal links
relative to it — the domain switch is then a one-line config change plus a `CNAME`
file. Custom domains on Pages are free and include HTTPS.

*(Cloudflare Pages remains the fallback: unlimited bandwidth and it always serves at the
root, so no base path at all. Worth switching to only if the gallery forces it.)*

- Content as Markdown/JSON in the repo — timings, sevas, festivals as **data**, never
  hardcoded. Phase 2's CMS depends on getting this right from day one.
- No JS framework. The open/closed badge is a few lines of vanilla JS.
- Target: full load under 2s on 4G. Easy without images.
- Git repo required (Phase 2's CMS is git-backed). Not yet created.

**Domain** — deferred until the committee conversation. Phase 1 deploys to a free
`*.pages.dev` subdomain, which is enough to build, test on a phone, and demo. See §13.
**Ownership** — when sanction comes, domain and hosting are registered in the temple's
name, not a personal one, or the site dies when someone moves on.

## 11a. What was built — file map

Repo: **[Yellow-Leaves-Studio/chennakesava-temple](https://github.com/Yellow-Leaves-Studio/chennakesava-temple)**
(the org, not a personal account — which is why Pages serves from
`yellow-leaves-studio.github.io`, and why `astro.config.mjs` sets `site` to that host).

```
site/
  astro.config.mjs        base: '/chennakesava-temple' — must match the repo name
  src/
    data/                 THE EDITABLE LAYER — see README
      timings.json        weekly hours, festival overrides, daily rituals
      festivals.json      Brahmotsavam day by day, annual observances
      sevas.json          sevas offered, deliberately without prices
    lib/
      status.js           open/shut logic — the only non-trivial code here
      status.test.js      11 checks; the deploy refuses to publish if these fail
    layouts/Base.astro    design tokens, theming, badge, nav, footer
    components/Ornaments.astro   every SVG motif, defined once
    pages/                six .astro files, one per page
.github/workflows/deploy.yml     test → build → Pages
```

**Why `status.js` is separated out and tested.** It is the one place the site can cause
real harm: a badge that wrongly says "open" sends someone on a wasted journey. Two things
it must get right, both covered by tests — it answers in **Markapur's** time regardless of
where the visitor is, and a festival override resolves against the temple's date, not
UTC. (A visitor at 05:00 IST on 11 April is at 23:30 UTC on the 10th; match the override
on the UTC date and it silently vanishes.)

**One-time setup before the site goes live:** repo *Settings → Pages → Source =
GitHub Actions*. Without it the workflow builds and deploys nowhere, with no error.

## 12. Out of scope for v1

Seva booking · live streaming · accommodation · 80G automation · devotee login ·
prasadam e-commerce · mobile app · donor wall · languages beyond English +
inline Telugu · blog · Telugu mirror site.

---

## 13. Phone number and domain — resolved for Phase 1

**Phone number: none exists, and Phase 1 ships without one.**

The mockup carries `+91 00000 00000` so the layout shows how a number will sit. It is
rendered with a hatched background and a dashed outline **on purpose** — a fake number
must never look shippable.

It must not go live. A visitor who dials a placeholder either reaches nothing or reaches
a stranger, and this site's entire value is being the accurate one (§1). A wrong number
is worse than no number, and it is exactly the kind of thing that sours the EO
conversation later.

**What Phase 1 publishes instead**, which is true and genuinely useful:

> No public telephone number is listed for this temple. Enquiries in person at the
> temple office.

That saves a visitor the search that others have already failed at — a devotee asked
for this number publicly in 2017 and got no answer. Swap in the real number the moment
there is one; the layout is already built for it.

**Domain: deferred to the committee conversation, and not blocking.**

GitHub Pages serves the project site at `<username>.github.io/<repo>` for free. So
Phase 1 can be built, deployed, and viewed on a phone without owning a domain — and
that live URL is precisely what gets shown to the EO under decision #2. Buying a domain
before that conversation risks registering it in the wrong name anyway (§11).

Order of operations: **build → deploy to GitHub Pages → show the committee → then buy
the domain, in the temple's name, and point it at the same repo.**

---

## Remaining open items

**None blocking.** Phase 1 can begin.

Deferred by decision, to revisit after the committee conversation: real phone number ·
domain purchase and ownership · donations (§10) · official sanction (§10) · photographs
for the gallery (Phase 2).

*(Resolved 2026-07-19: the state portal question — the temple is listed there but the
page carries no content. See §3 and §10.)*
