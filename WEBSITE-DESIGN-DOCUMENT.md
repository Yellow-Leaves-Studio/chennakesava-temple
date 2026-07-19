# Website Design Document
## Sri Lakshmi Chennakesava Swami Devastanam, Markapur

**Status:** v3 — decisions locked, awaiting mockup approval. No production code yet.
**Last updated:** 2026-07-19

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

### Phase 0 — Design *(current)*
This document · UX mockups: mobile + desktop · color, type, and component direction
approved. **Exit:** you sign off on the mockups.

### Phase 1 — Static site
Astro, static, English with Telugu inline, deployed. Content as Markdown/JSON in the repo.

**Six pages:** Home · About · Darshan · Festivals · Visit · Sun Phenomenon

- Open/closed badge, computed from conservative timings + date overrides (§6)
- Festival calendar from a single data file
- Typographic + SVG design, no images, no image pipeline
- SEO: per-page metadata, `Place`/`LocalBusiness` structured data, sitemap
- Footer disclaimer: unofficial devotee-built site, timings unverified
- **Exit:** live on GitHub Pages, verified on mid-range Android over 4G, under 2s load

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
Font: **Noto Sans Telugu**, subset and self-hosted — other Telugu webfonts render
inconsistently on older Android.

## 8. Visual design

**Direction:** dignified and calm. Comparable temple sites default to saturated
gradients, animated glitter, marquee text, and autoplay audio. Deliberately the
opposite. With no photography, the design is carried by **typography, color, and SVG
motifs drawn from the temple's own geometry** — the gopuram's tiered silhouette,
inscription-inspired rule work, the sapta-swara motif for the musical pillars.

This is a constraint that pays: no image pipeline, no lightbox, negligible page weight,
instant on 4G. When real photos arrive they slot in without a redesign.

**Colors** — proposed, to be confirmed at mockup
- Base warm off-white `#FDF8F0` — sandalwood, paper
- Primary deep maroon `#8C2F1E` — kumkum
- Accent turmeric gold `#C9962B` — accents only, never large fills, never gradients
- Text warm near-black `#2A2118`
- Stone gray `#6B6459` — secondary text, echoes the granite

WCAG AA minimum. Bright-sunlight readability is a real constraint.

**Type**
- Telugu: Noto Sans Telugu
- English body: humanist sans, **18px base on mobile** — many visitors are older
- English headings: restrained serif

**Layout**
- Single column mobile, max ~1100px desktop
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
