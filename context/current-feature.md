# Current Feature

## Status

<!-- Not Started | In Progress | Complete -->

## Goals

<!-- What success looks like, as bullets -->

## Notes

<!-- Context, constraints, or details from the spec -->

## History

- Init
- Spec 1 — Clean baseline (14 Oct 2026). Node v23.11.0. `npm run build` passes. `npm run graphql:gen` against `localhost:4000` makes no diff in `src/graphql/schemaTypes.ts`. `/auth/login` logged out renders at 375px and 1280px. `/` renders for the client and the owner (QA Kitchen). `/auth/signup`, `/restaurant/1`, `/restaurant/owner/1`, `/restaurant/owner/1/add-dish`, `/restaurant/owner/1/edit-dish/1`, `/basket`, `/user/edit`, `/orders`, `/order/1`, and `*` render with no console error. `/confirm` renders with a console error (validate returns 400). `/restaurant/1/edit-restaurant` renders with a console error (category `<option selected>`). `/restaurant/add` and `/category/add` redirect to `/` on a direct load and render from the owner home links. `/checkout` renders and an empty basket shows `$NaN`. `/payment/pending`, `/payment/success`, and `/payment/failed` crash when opened directly because `location.state` is null. `/payment/verify/qa` is blank with a GraphQL 400. Checkout of QA Burger created order #1 and stayed on `/payment/pending`; Zarinpal was not reached. The live story: the client on `/order/1` showed Cooking, the owner clicked Mark as Cooked, and the client's page changed to Cooked without a reload. Apollo logged missing cache fields (`options`, `items`, `email`). The owner's `/orders` list does not update live for a new order.
