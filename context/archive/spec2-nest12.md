# Spec 2 — Nest 12 and TypeORM 1

## Overview

Spec 2 of 2. Depends on spec 1. Do not start it with spec 1
unmerged.

The API in `../uber-eats` is NestJS 8, `@nestjs/graphql` 10,
`apollo-server-express` 3, and TypeORM 0.2.45. Nest 12 does not use
Apollo Server 3. TypeORM 0.2 `findOne(id)` was removed in 0.3.
"Done" is the same GraphQL API on localhost, on the current majors.
No host is chosen here.

## Requirements

- Read the Nest 12 GraphQL docs after the install. Do not keep
  `apollo-server-express` 3. Use the GraphQL integration Nest 12
  documents
- NestJS 12, TypeORM 1, TypeScript 6. Node stays on what
  `package.json` already asks for, 22 or newer. If the Node 22
  build fails, pin the version that builds it and write that
  version down. Do not bump an unrelated package to make it start
- Replace every TypeORM 0.2 `findOne(id)` with the current call.
  That is every repository call, not one file.
  `orders.service.ts` is the known example
- Schema still comes from TypeORM `synchronize` on a local
  Postgres, then `synchronize` is turned off. Do not point this
  spec at Supabase
- Subscriptions stay on `graphql-ws`. The client from spec 1
  already speaks that protocol
- Do not deploy

## Out of scope

- Supabase, Vercel env vars, and CORS for a public origin
- Seed accounts, the Zarinpal sandbox, and the portfolio card
- A custom domain
- New features, or a rewrite of the order flow

## Done when

- `npm run build` passes in `../uber-eats`
- The spec 1 front end, against this API, still lets a client
  place an order, and the owner still sees it without a reload
- Nothing was deployed

## Notes

- After this is on `main`, decide the host. The options stay: a
  Node process that can hold WebSockets, with Supabase for
  Postgres, or leave the portfolio card at `Demo · Offline`.
  Do not decide inside this spec
- If that later spec ships, the public front URL is
  https://uberfooddelivery.vercel.app/ on project
  `uber-eats-frontend`. Do not create a second Vercel project

## References

- `interview-practice/stack-upgrade.md`
- `context/features/spec1-next16.md`
