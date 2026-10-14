# Uber Eats clone — front end

Read this file at the start of every session. Treat **Memory** as the
source of truth. Do not re-scan the repo, `node_modules`, or lockfile
for facts already written here. After any change to product, stack,
files, or decisions, update Memory in place. Replace stale lines. Do
not append a changelog.

## Context Files

Read these for the full context of the project:

- @context/project-overview.md — what the product is and why this stack
- @context/coding-standards.md — language, files, data, security
- @context/design-system.md — tokens, components, how every screen looks
- @context/stack.md — commands, folders, QA checklists for this stack
- @context/ai-interaction.md — the feature workflow and verification
- @context/current-feature.md — what is being built right now

## Feature workflow

Every feature follows `load → start → complete`, driven by the
`/feature` skill in `.claude/skills/feature/`. `pre-review` and
`after-review` are optional extras, not gates. Specs live in
`context/features/`; the working file is @context/current-feature.md.

**Verification is where the user is, never in a compiler.** The
failures that compile are listed in @context/stack.md.

## Design rules

Every screen follows @context/design-system.md. Boards in `context/plan/`
decide layout and content; the design system decides the look, and
wins where they disagree. Tokens come from one file only. When a spec
adds a token or a shared component, update the design system in the
same change.

## Stack rules

Follow @context/stack.md. That file is the chosen overlay. Do not
paste a second copy of it here.

## Cleanup

When a task is done — especially after-review or complete — stop
every process you started, close QA tabs, and delete session-only
files. Do not leave a dev server running. (Cursor also loads
`.cursor/rules/cleanup-after-finish.mdc`. This paragraph is for
sessions that do not.)

## Memory

- **Product:** A food-delivery demo: clients order from restaurants and pay through Zarinpal, owners manage restaurants and dishes and change order status, which the client's `/order/[id]` shows live (`updateOrders`), drivers see a map. No page subscribes to `pendingOrders`. This round is a stack upgrade with the same screens. No redesign, no new features.
- **Package / slug:** `uber-front`.
- **Path:** `/Users/omid/Developer/Github/uberEats/uber-eats-frontend`. The API is `../uber-eats`, its own git repo with its own specs.
- **Hosting / production URL:** None working. The Vercel project `uber-eats-frontend` (https://uberfooddelivery.vercel.app/) still serves the old Create React App build. Do not create a second project. `ubereats.vercel.app` and `uber-eats-frontend.vercel.app` are other people's sites. `heidariomid.com` and Liara are gone. A host is chosen only after `../uber-eats` spec 2.
- **Framework versions:** Create React App 5, React 18.1, React Router 6.3, TypeScript 4.6, Tailwind 3.0, Apollo Client 3.6, codegen 2, `redux` 4 + `redux-saga`, Headless UI 1.6. Target: Next 16, React 19, TypeScript 6, Tailwind 4, Apollo Client 4, Redux Toolkit 2, Headless UI 2, the same line as `amazon`.
- **Scripts:** `npm start`, `npm run build`, `npm run graphql:gen` until spec 3. Then `npm run dev`, `npm run build`, `npm run lint`, `npx tsc --noEmit`.
- **UI:** The existing black-and-white Tailwind look with `lime` and the app's own dark mode. Tokens in `tailwind.config.js`, then `@theme` in `src/app/globals.css` from spec 4.
- **Process:** `context/` + `/feature` skill. Specs 1 to 4 in `context/features/`, in order, after `../uber-eats` spec 1. Superseded drafts are in `context/archive/`. Cleanup as above.
- **Backend:** NestJS GraphQL on `http://localhost:4000/graphql`, subscriptions over `graphql-ws` with `connectionParams.authToken`.
- **Not built:** Spec 1 is done. Specs 2 to 4 and the host spec are not built.
- **QA:** Localhost, Playwright at 375px and 1280px. A client and an owner exist on the local API; emails and passwords are in `.env.local` (`QA_CLIENT_EMAIL`, `QA_OWNER_EMAIL`). The API allows CORS from `http://localhost:3000` only. Known story: the only live update is the client's `/order/[id]` following the owner's status change; check it in two windows. The owner's `/orders` list does not update live for a new order, and never did.
- **Secrets:** `.env` is untracked. The Apollo Studio key is gone from the local file and remains in git history. No code reads the key. The user revokes it. `.env.example` lists the QA account names.
- **Git:** Do not commit unless asked. Commits have no `Co-authored-by` trailer. `/feature complete` merges the feature branch into `main` and deletes that branch. Do not push: the Vercel project may deploy `main`.
