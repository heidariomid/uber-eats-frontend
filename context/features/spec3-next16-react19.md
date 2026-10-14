# Spec 3 — Next.js 16 and React 19

## Overview

Spec 3 of 4. Depends on specs 1 and 2. Do not start it with either
unmerged.

The framework move: Create React App 5 and React Router 6 to
Next.js 16 App Router, React 18 to 19, TypeScript 4.6 to 6. The
libraries were made ready in spec 2, so what breaks here is the
framework only. "Done" is every baseline route at the same URL, on
the new stack, against the API still on `localhost:4000`.

## Requirements

- Read `node_modules/next/dist/docs/` after the install and before
  writing App Router code. Match the setup already on `main` in
  `../../amazon` (`next.config.ts`, `tsconfig.json`,
  `eslint.config.mjs`)
- `next`, `react`, `react-dom`, `@types/react`, `@types/react-dom`,
  and `eslint-config-next` move together. Delete `react-scripts`,
  `web-vitals`, `src/reportWebVitals.ts`, `src/index.tsx`, and
  `public/index.html`. Scripts become `dev`, `build`, `start`, and
  `lint` (`eslint .`)
- **Routes.** Every path in `src/routes/index.tsx` becomes an App
  Router route under `src/app/` with the same URL. `:id` becomes
  `[id]`, `:dishId` becomes `[dishId]`, `:reserve` becomes
  `[reserve]`. The `*` route becomes `not-found.tsx` rendering
  `ErrorPage` with `404` and `Nothing Found`. The existing page
  components stay where they are; each `page.tsx` renders one
- **Client pages.** The app reads the token from `localStorage`,
  including at module scope in `src/apollo/GlobalVar.ts`. Pages stay
  client components. Server rendering must not touch `localStorage`
  or `window`: read them inside effects or behind a
  `typeof window` check, so the server HTML is the logged-out shell.
  No server-side data fetching, no Apollo Next.js integration
- **Providers.** One `'use client'` `Providers` component in the
  root layout wraps `ApolloProvider` and `StateProvider`, the way
  `src/index.tsx` does today. `App.tsx` becomes that layout's client
  shell: the `Header` and the `Basket` overlay. It hides the header on
  the same paths, using `usePathname`. The literal
  `'/payment/verify/:reserve'` never matches today, so the header
  shows on that page; keep it that way
- **React Router out.** 38 files import `react-router-dom`. Replace
  `useNavigate` with `useRouter`, `useParams` and `useLocation` with
  `next/navigation`, and `Link to` with `next/link` `href`. A page
  that calls `useSearchParams` sits under a `Suspense` boundary or
  the build fails. Delete `react-router-dom` and `src/routes/`
- **Apollo URLs.** `src/apollo/index.ts` stops hard-coding
  `uber-back.iran.liara.run`. The http and `wss` URLs come from
  `NEXT_PUBLIC_GRAPHQL_URL` and `NEXT_PUBLIC_GRAPHQL_WS_URL`,
  falling back to `http://localhost:4000/graphql` and
  `ws://localhost:4000/graphql`. Both names go in `.env.example`
- **Map.** `src/pages/driver/Driver.tsx` uses Leaflet, which needs
  `window`. Load it with `next/dynamic` and `ssr: false`, and import
  `Driver.css` and Leaflet's CSS from the layout or the component, as
  Next allows. `react-leaflet` moves to 5. Keep the map
- **Images.** Twelve files import from `src/images/`. In Next an
  image import is an object, not a URL string. Use `next/image` with
  the import, or `.src`, wherever it was passed to `<img src>`.
  `index.d.ts` is replaced by Next's own image types
- **Fonts.** The `@font-face` rules point at `../public/fonts/`.
  Point them at `/fonts/`, or move to `next/font/local`. Same four
  families
- **CSS.** `src/index.css` moves to `src/app/globals.css`, unchanged.
  Tailwind stays on 3 with `tailwind.config.js` and
  `postcss.config.js`; `content` adds `./src/app/**/*`
- **TypeScript 6**, not 7. `moduleResolution` becomes `bundler`.
  Convert the `.js` store files to TypeScript only if `tsc` forces it.
  React 19 types: `useRef` needs an initial value and implicit
  `children` is gone. Fix what `tsc` reports. Do not add `any`
- **Tests.** The two Jest tests run on `react-scripts` and render
  `App` inside `BrowserRouter`. Delete `src/__tests__`,
  `src/setupTests.ts`, Jest, `ts-jest`, and the `@testing-library/*`
  packages. Cypress files stay in the repo, not run
- Replace the Create React App `README.md` with the real commands
  and the two env names

## Out of scope

- Tailwind 4. That is spec 4. Until then the config file and the
  `@tailwind` directives stay as they are
- Server components for data, server actions, caching, the React
  Compiler
- Nest, TypeORM, Apollo Server. That is `../uber-eats` spec 2
- A deploy, Vercel settings or env, a custom domain

## Done when

- Every route on the spec 1 baseline list has the same result at the
  same URL. A reload on `/restaurant/1` renders the page, not a 404
- An unknown URL shows the `404` error page
- Logged out, `/auth/login` renders. Logging in as the client and
  the owner works, and a reload keeps the session
- The order story matches the baseline: the client places an order,
  and with the client on `/order/[id]` the owner changes its status;
  the client's page shows it without a reload, in two browser
  windows
- The driver map renders on a driver account, if the baseline had
  one
- No hydration warning on any baseline route. 375px and 1280px
- `npm run build`, `npm run lint`, and `npx tsc --noEmit` pass.
  `package.json` has no `react-scripts` and no `react-router-dom`
- Nothing was deployed and nothing was pushed

## Notes

- **Must not push.** The Vercel project `uber-eats-frontend`
  (https://uberfooddelivery.vercel.app/) may deploy `main` on every
  push. Pushing a Next app before the host spec replaces the old
  build with one that has no API. Check the project's Git connection
  before any push
- If the build breaks in a way two or three attempts do not fix,
  stop and report. Do not jump to a rewrite

## References

- @context/project-overview.md
- @context/stack.md
- @context/features/spec1-clean-baseline.md
- `../../amazon/context/features/spec4-next16-react19.md`
- `../../amazon/next.config.ts`, `../../amazon/tsconfig.json`,
  `../../amazon/eslint.config.mjs`
