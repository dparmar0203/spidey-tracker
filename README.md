# Spidey Tracker

A dashboard for an 18-month, city-wide "tracker app" dataset of reported sightings of a masked
vigilante swinging across a New York-inspired city — built with Next.js and backed by a live
Supabase database.

**Live:** https://spidey-tracker-liard.vercel.app

> A second, differently-styled front end for this same dataset lives at
> [spidey-tracker-hud](https://github.com/dparmar0203/spidey-tracker-hud) — a Spider-Man
> game/movie-inspired HUD instead of a conventional dashboard. Both apps read from the same
> Supabase project.

## What's here

- **Overview (`/`)** — headline stats (total sightings, verified rate, hottest borough, swinging
  reports) and quick links into the rest of the app.
- **Boroughs (`/boroughs`)** — five borough cards; click one to drill into its recent field
  reports, paginated.
- **Reports (`/reports`)** — the full sightings feed, filterable by borough, report type, and
  verification status, with evidence icons (photo/video/audio, crime-nearby flag).
- **Trends (`/trends`)** — charts built from live aggregate queries: monthly sighting volume
  (total vs. verified), report type breakdown, verification outcome breakdown, weather at time of
  report.
- **Web Map (`/map`)** — a "spider-sense radar" scatter plot of real sightings by latitude/longitude,
  colored by borough, with a borough filter and click-to-inspect detail panel.

## Data

Source: [Spidey Tracker: Spider-Man Dataset on Kaggle](https://www.kaggle.com/datasets/umuttuygurr/spidey-tracker-spiderman-dataset),
loaded into Supabase. The dataset spans **January 2025 – June 2026** (~86,600 sightings) across the five NYC boroughs,
with fields for report type, witness/source counts, tracker confidence, evidence flags, weather,
and a labeled verification outcome (`verified`, `mistaken_identity`, `impersonator`,
`social_media_hoax`, `duplicate_report`, `sensor_error`, `deliberate_fake`). It's served from a
Supabase Postgres table (`sightings`) via the queries in `app/actions.ts`. The dataset is
historical/static, not live — copy that implies real-time activity (e.g. "last ping") should be
read as "most recent logged record," not "happening right now."

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with **shadcn/ui** (`base-nova` preset) for Card, Table, Badge, Select,
  Button, Chart, Skeleton, Tabs
- **Recharts** (via shadcn's chart wrapper) for the Trends page
- **Supabase** (`@supabase/supabase-js`) as the data source
- **lucide-react** for icons
- Deployed on **Vercel**

## Getting started

```bash
npm install
```

Create `.env.local` with your Supabase credentials:

```bash
SUPABASE_URL=your-supabase-project-url
SUPABASE_ANON_KEY=your-supabase-anon-key
```

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

This project is linked to a Vercel project (GitHub-connected: pushing to `main` triggers a
production deploy). `SUPABASE_URL` and `SUPABASE_ANON_KEY` must also be set in the Vercel
project's Environment Variables (Production, Preview, and Development) — see
`vercel env add <NAME> <environment>`.

```bash
vercel --prod
```
