# Barber Night S6 — Interactive Timeline

Production-ready, mobile-first interactive timeline for Barber Night S6 (powered by Fresha). Displays multi-tab schedules across three stages with real-time visual feedback as events progress.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Updating schedule data

All event data lives in `/data/`:

| File | Stage |
|------|-------|
| `schedule-glowna.ts` | GŁÓWNA (Main Stage) |
| `schedule-friends.ts` | FRIENDS (Scena Friends) |
| `schedule-fastfade.ts` | FAST FADE |

Each file exports a `ScheduleEvent[]` array. Edit `name`, `timeStart`, `timeEnd`, `subtitle`, `instagramUrl`, and `type` fields as needed. Types are defined in `data/types.ts`.

Friends and Fast Fade schedules include `// TODO` placeholders for artists not yet confirmed — add entries following the same structure.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js — no extra config needed (`vercel.json` is empty)

```bash
git init
git add .
git commit -m "Initial Barber Night S6 timeline"
git push
```

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- No external UI libraries

## Real-time behavior

The `useCurrentTime` hook updates every 30 seconds. Cards automatically reflect **past**, **active**, and **future** states based on the current time compared to each event's `timeStart` / `timeEnd`.
