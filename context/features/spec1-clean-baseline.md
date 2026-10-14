# Spec 1 — Clean baseline

## Overview

Spec 1 of 4 in this repo. Depends on `../uber-eats` spec 1, so the
API on `localhost:4000` is the committed one, not a dirty tree.

The 12 October stack report said to leave this app on Create React
App. That is overridden: `portfolio`, `amazon`, and
`list-of-currencies` are on Next 16, React 19, TypeScript 6, and
Tailwind 4, and this app moves to the same line before anyone picks
a host. Like `amazon`, it moves in stages, so each break has one
cause.

No version moves in this spec. It makes the repo something an
upgrade can be measured against: dead packages and dead host files
gone, `.env` out of git, and a written list of which screens work
today on Create React App 5 and React 18. "Done" is that list in
`current-feature.md` and a green `npm run build`.

## Requirements

- `.env` is tracked and holds `REACT_APP_APOLLO_KEY`, an Apollo
  Studio key. No file in `src` reads it. Run `git rm --cached .env`,
  delete the line from the local file, and add `.env.example`.
  `.gitignore` already has `.env` from the process kit
- Remove a dependency only when a search shows no file imports it.
  Known unused on 14 October 2026: `react-query` (no import),
  `react-redux` (no import; the store is read through
  `StateProvider` and sagas). Check each of `apollo` (the old CLI),
  `file-loader`, `uuid`, `@graphql-codegen/fragment-matcher`,
  `@graphql-codegen/typescript-document-nodes`, and
  `@graphql-codegen/typescript-graphql-files-modules` the same way.
  `@graphql-codegen/cli` and `@graphql-codegen/typescript` are listed
  in both `dependencies` and `devDependencies`; keep the
  `devDependencies` entry only
- Delete the files for hosts that are gone: `liara_nginx.conf` and
  `public/_redirects` (Netlify). The commented Heroku URLs in
  `src/apollo/index.ts` go too. The Liara URL stays until spec 3
  replaces it with env variables
- `cypress/videos/*.mp4` are tracked recordings. Untrack them and add
  `cypress/videos/` and `cypress/screenshots/` to `.gitignore`
- Record the baseline in `current-feature.md` Notes:
  - Node version, and whether `npm run build` passes
  - Whether `npm run graphql:gen` runs against the local API and
    produces no diff in `src/graphql/schemaTypes.ts`
  - For every route in `src/routes/index.tsx`, one line: renders,
    renders with a console error, or fails. Use a client account for
    client routes and an owner account for `restaurant/owner/*`,
    `restaurant/add`, and `category/add`
  - The order story: a client opens a restaurant, adds a dish, and
    checks out. With the client on `/order/[id]`, the owner changes
    that order's status, and the client's page shows the new status
    without a reload (the `updateOrders` subscription). Write down
    how far it gets. Zarinpal is reached in sandbox mode only, or
    written down as not reached. No page subscribes to
    `pendingOrders`, so the owner's `/orders` list does not update
    live for a new order; that is not a regression

  Later specs are judged against this list. A screen that is already
  broken is written down as broken, not fixed here

## Out of scope

- Any version bump. That is specs 2 to 4
- Fixing a broken screen found while recording the baseline
- The Cypress suite and the two Jest tests in `src/__tests__`
- Hosting, Vercel settings, Supabase, a custom domain

## Done when

- `git ls-files` lists no `.env` and no `.mp4`
- `liara_nginx.conf` and `public/_redirects` are gone
- `npm run build` passes, and `npm start` serves `/auth/login`
  logged out at 375px and 1280px
- Every removed package had no import; the search is in Notes
- The baseline list and the order story exist in
  `current-feature.md`

## Notes

- **Leftover on you:** revoke the Apollo Studio key. The repo is
  public and the key is in its history. Untracking the file does not
  un-publish it
- **Leftover on you:** two test accounts on the local API, one
  client and one owner with a restaurant and a dish. Put the emails
  in `.env.local` as `QA_CLIENT_EMAIL` and `QA_OWNER_EMAIL`
- The baseline may show the demo is thinner than the portfolio card
  says. If so, fix the card, not this spec

## References

- @context/project-overview.md
- @context/stack.md
- `../uber-eats/context/features/spec1-clean-baseline.md`
- `../../interview-practice/stack-upgrade.md`
- `../../amazon/context/features/spec1-clean-baseline.md`
