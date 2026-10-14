# Feature skill — this project only

The action files are reusable. **This file is not.**

## Who we write for

- **End user** — a client ordering food, and a restaurant owner
  receiving the order
- **Us / client** — Omid, showing the app in an interview. There is
  no client to sign off
- **App language** — English, left to right

## Review write-ups

- **Where:** `docs/` in this repo
- **File name:** `docs/spec{N}-pre-review.fa.md` or
  `docs/spec{N}-after-review.fa.md`
- **Language:** Persian, written the way the `explain-fa` skill
  writes (`~/.claude/skills/explain-fa/SKILL.md`; read it before the
  first write-up). In short:
  - Spoken Persian, one developer to another: «می‌کنه»، «میشه»،
    «رو»، «توی» — not the bookish forms
  - Coding words stay in English inside the Persian sentence (spec,
    route, component, resolver, subscription). Never translate them
  - Name the real thing: the file, the hook, the route
  - Concrete: what the user would actually see, with a real value
  - Why, not what. Short sentences
- **Shape:** the review's own shape from the action file (verdict,
  table, votes). `explain-fa` sets the voice, not the headings
- **Direction:** right-to-left. Wrap the whole file in
  `<div dir="rtl" align="right">` … `</div>`, with a blank line after
  the opening tag and before the closing one
- **Title shape:** `# Pre-review برای spec {N}: {feature}` or
  `# After-review برای spec {N}: {feature}`

Same feature → update its file. Do not create a second one.

## QA

- **Surface:** localhost. Before spec 3, `npm start` on port 3000.
  From spec 3, `npm run build`, then `npx next start -p 3200`. The
  API from `../uber-eats` on port 4000
- **Browser tool:** Playwright, at 375px and 1280px. Two windows for
  the order story
- **Checks:** `npm run build`. From spec 3, also `npm run lint` and
  `npx tsc --noEmit`
- **Data:** the local Postgres behind `../uber-eats`, read through
  the owner's screens or Apollo Sandbox
- **Test account:** one client and one owner on the local API.
  Emails in `.env.local` as `QA_CLIENT_EMAIL` and `QA_OWNER_EMAIL`
- **Known QA story:** the only live update is `updateOrders`: the
  client's `/order/[id]` shows the owner's status change without a
  reload. Nothing subscribes to `pendingOrders`, so the owner's
  `/orders` list never updates live for a new order; spec 1's
  baseline mistook that for a broken socket. Check the real story in
  two windows

## Git

`/feature complete` does not push. Origin exists, and the Vercel
project may deploy `main` on push. Pushing stays off until the host
spec or until the user asks. One branch and one commit per spec. No
AI attribution.

## Leftovers `start` should look for

- The Apollo Studio key revocation
- The two QA accounts and the local API running
- Env names added to `.env.example`
- Anything that must not be pushed yet
