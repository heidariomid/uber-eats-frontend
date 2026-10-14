# Spec 1 — Next.js 16, before any host

## Overview

Spec 1 of 2. The 12 October stack report said to leave this app on
Create React App and Nest 8, and to decide hosting only. That is
overridden. `portfolio`, `amazon`, and `list-of-currencies` already
shipped on Next 16.4, React 19.3, TypeScript 6.0, and Tailwind 4.3.
This app moves to that same line before anyone picks a host.

This spec is the front end. The API upgrade is spec 2. Neither spec
deploys. `heidariomid.com` and Liara stay gone. The existing Vercel
project stays on the old build until a later host spec.

"Done" is the same screens, on the new stack, against the API still
running on `localhost:4000`.

## Requirements

- Read `node_modules/next/dist/docs/` after the install and before
  writing App Router code
- Match the versions already on `main` in those three repos: Next 16,
  React 19, TypeScript 6, Tailwind 4 with `@tailwindcss/postcss`
- Replace Create React App. Delete `react-scripts`. Every path in
  `src/routes/index.tsx` becomes an App Router route with the same
  URL
- Apollo Client 3.6 to 4. `src/apollo/index.ts` stops hard-coding
  `uber-back.iran.liara.run`. The http and `wss` URLs come from
  `NEXT_PUBLIC_GRAPHQL_URL` and `NEXT_PUBLIC_GRAPHQL_WS_URL`, falling
  back to `localhost:4000`. Delete the commented Heroku lines
- If the current GraphQL codegen cannot emit Apollo Client 4 hooks,
  move it to codegen v5 and regenerate. Do not hand-edit the
  generated files
- `react-query` 3 to TanStack Query 5. Every query and mutation
  takes one object. The package name changes
- Headless UI 1.6 to 2. Version 1 does not support React 19. If
  `react-leaflet` 4 fails on React 19, bump it to the release that
  supports React 19. Keep the map
- `redux` 4 and `redux-devtools-extension` become Redux Toolkit 2.
  Keep `redux-saga`. Do not move that flow into a new state library
- Tailwind 3 config becomes Tailwind 4 `@theme`. Keep the current
  colours
- `liara_nginx.conf` is deleted. A reload on `/restaurant/1` is a
  real route, so it does not 404
- `.env` is tracked and holds an Apollo Studio key. Run
  `git rm --cached .env`, add it to `.gitignore`, and add a
  `.env.example` with key names only
- Do not deploy, and do not set variables on the Vercel project

## Out of scope

- Nest, TypeORM, and Apollo Server. That is spec 2
- Choosing Supabase, a Node host, or `Demo · Offline`
- A custom domain, including `heidariomid.com`
- New features, a redesign, fixing the Cypress suite
- Rewriting redux-saga into thunks or server actions

## Done when

- `npm run build` passes
- Logged out, `/auth/login` renders
- With the current API on `localhost:4000`, a client can open a
  restaurant and place an order, and the owner sees that order
  without a reload
- `git ls-files` lists no `.env`
- Nothing was deployed

## Notes

- Hosting waits until spec 2 is on `main`. The front end already
  has a Vercel project:
  https://uberfooddelivery.vercel.app/ and
  https://vercel.com/omidheidari88s-projects/uber-eats-frontend.
  Do not create a second project. `ubereats.vercel.app` and
  `uber-eats-frontend.vercel.app` are other sites
- Supabase can hold Postgres in that later spec. It still cannot
  run Nest or a `graphql-ws` socket
- **Leftover on you:** revoke the Apollo Studio key. The repo is
  public and the key is in its history

## References

- @context/project-overview.md
- @context/stack.md
- `interview-practice/stack-upgrade.md`
- `../../portfolio/context/features/spec1-honest-project-cards.md`
- `context/features/spec2-nest12.md`
