# Newsly Global

Premium marketing site for Newsly Global — a consultancy that helps established businesses decide if AI is right for their company. The entire site is designed around one conversion: purchasing the **$1,495 AI Assessment**.

Built with Next.js 16 (App Router), Tailwind v4, React 19, and Drizzle/Neon.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in as you need them
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint
- `npm run db:generate` — generate Drizzle migrations from `lib/schema.ts`
- `npm run db:push` — push schema to `DATABASE_URL`
- `npm run db:migrate` — run SQL migrations in `drizzle/`

## Environment

Everything is optional for local dev — forms gracefully no-op if email/DB env is missing and log instead.

| Variable             | Purpose                                            |
| -------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used in metadata/OG/sitemap         |
| `DATABASE_URL`       | Neon Postgres connection string (from Vercel)      |
| `RESEND_API_KEY`     | Lead notification emails                           |
| `LEAD_EMAIL_FROM`    | Default: `Newsly Global <noreply@newslyglobal.com>` |
| `LEAD_EMAIL_TO`      | Default: `hello@newslyglobal.com`                  |

## Structure

```
app/
  page.tsx              # Home (11 sections per brand brief)
  assessment/           # Assessment detail + intake form
  services/ courses/ about/ contact/ thank-you/
  actions/submit.ts     # Server Actions for both forms
  opengraph-image.tsx   # Branded OG card
  sitemap.ts robots.ts
components/
  layout/               # Header, Footer, Logo, Container, MobileMenu
  sections/             # Reusable Hero, StepList, PriceCallout, FinalCta, etc.
  forms/                # ContactForm, IntakeForm (zod + Server Actions)
  ui/                   # Minimal hand-built primitives (Button, Field, Card)
lib/
  validation.ts         # zod schemas shared by forms + actions
  schema.ts db.ts       # Drizzle schema + Neon HTTP client
  email.ts              # Resend wrapper with graceful no-op
drizzle/0000_init.sql   # Initial migration for contact + intake tables
```

## Brand tokens

Defined as Tailwind v4 `@theme` vars in `app/globals.css`:

- `--color-navy`  (#0F172A), `--color-bg` (#F8FAFC), `--color-slate` (#475569)
- `--color-gold` (#C8A46B), `--color-blue` (#2F5D8C), `--color-success` (#0F766E)
- Typography: **Manrope** (display) + **Inter** (body) via `next/font/google`

## Payments

Checkout is currently stubbed — the primary CTA routes to `/assessment/start` for intake only. Wire Stripe in a follow-up.
