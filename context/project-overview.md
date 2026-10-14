# Project Overview — Uber Eats clone (front end)

A food-delivery demo. A client browses restaurants, opens one, adds
dishes to a basket, checks out through Zarinpal, and follows the
order. A restaurant owner adds restaurants, categories, and dishes,
and changes an order's status, which the client's order page shows
live. A driver sees a map. Success for
this round is the same app on the current stack, running against the
API on `localhost:4000`.

---

## The product

| | |
| --- | --- |
| Name | Uber Eats clone |
| Slug / package | `uber-front` |
| Platforms | Web |
| Audience | A reviewer opening the portfolio card, and Omid showing it in an interview |
| Language | English, left to right |

---

## Current state

On 14 October 2026, before spec 1:

- Create React App 5, React 18.1, React Router 6.3, TypeScript 4.6,
  Tailwind 3.0
- Apollo Client 3.6 with GraphQL codegen 2. `graphql-ws` for the
  owner's order subscription
- `redux` 4 with `redux-saga` and `redux-devtools-extension`, read
  through a React context (`StateProvider`), not `react-redux`
- Headless UI 1.6, Heroicons 1, Font Awesome, Leaflet 4, Victory 36
- `react-query` 3 and `react-redux` 8 are installed and unused
- The API is `../uber-eats` (NestJS 8). Its Liara and Heroku hosts
  are down, so there is no live demo
- `.env` with an Apollo Studio key is tracked in a public repo

---

## Approach

One spec at a time, staged so each break has one cause. Libraries
move first on React 18, then the framework, then Tailwind. The API
upgrade comes after the front end is on the new stack.

---

## Why this stack

The other portfolio apps (`portfolio`, `amazon`,
`list-of-currencies`) are on Next 16, React 19, TypeScript 6, and
Tailwind 4. A reviewer reads Create React App as abandoned. The
GraphQL, Apollo, and saga code is the part worth showing, so it is
kept, not rewritten.

---

## Pages / screens

| Route | Purpose | Spec |
| --- | --- | --- |
| `/` | Home: client restaurants, owner restaurants, or driver map, by role | 3 |
| `/auth/login`, `/auth/signup` | Auth | 3 |
| `/confirm` | Email confirmation | 3 |
| `/restaurant/[id]` | Client restaurant page | 3 |
| `/restaurant/owner/[id]` | Owner restaurant page | 3 |
| `/restaurant/owner/[id]/add-dish`, `/restaurant/owner/[id]/edit-dish/[dishId]` | Owner dishes | 3 |
| `/restaurant/[id]/edit-restaurant`, `/restaurant/add`, `/category/add` | Owner admin | 3 |
| `/basket`, `/checkout` | Basket and checkout | 3 |
| `/payment/pending`, `/payment/success`, `/payment/failed`, `/payment/verify/[reserve]` | Zarinpal flow | 3 |
| `/orders`, `/order/[id]` | Orders | 3 |
| `/user/edit` | Profile | 3 |

---

## Out of scope

- Hosting, a custom domain, Supabase. A later host spec, after
  `../uber-eats` spec 2
- New features or a redesign
- Rewriting `redux-saga` into thunks or server actions
- Fixing the Cypress suite

---

## Success criteria

1. Every route above renders at the same URL on Next 16 and React 19
2. A client places an order, and the owner's status change shows on
   the client's order page without a reload
3. No secret is tracked, and nothing is deployed before the host spec

---

## Build order

1. `../uber-eats/context/features/spec1-clean-baseline.md`
2. `context/features/spec1-clean-baseline.md`
3. `context/features/spec2-libraries-react18.md`
4. `context/features/spec5-demo-images.md` (after spec 2, before or
   after specs 3 and 4)
5. `context/features/spec3-next16-react19.md`
6. `context/features/spec4-tailwind-4.md`
7. `../uber-eats/context/features/spec2-nest12-typeorm1.md`
8. A host spec, written after step 7
