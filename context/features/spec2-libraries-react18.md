# Spec 2 — Libraries that React 19 needs, on React 18

## Overview

Spec 2 of 4. Depends on spec 1.

The libraries that block React 19, or that change their API at the
next major, move while the app is still on Create React App and
React 18. Each target release supports React 18, so a break here is
that library's fault and nothing else's. "Done" is every route on
the spec 1 baseline list behaving the same.

## Requirements

- Check peer ranges on the day with
  `npm view <package> peerDependencies` before installing. The ranges
  below were read on 14 October 2026. Do not use
  `--legacy-peer-deps` or `--force`; a peer conflict means a package
  was missed
- **Apollo Client 3.6 to 4.** 4.3 accepts React 17, 18, and 19 and
  needs `rxjs` as a peer. Run Apollo's 3-to-4 codemod first, then fix
  by hand. Read the 4.0 migration guide before editing; the known
  changes in this app:
  - React hooks, `ApolloProvider`, and `useReactiveVar` import from
    `@apollo/client/react`
  - `createHttpLink` becomes `HttpLink`, `setContext` becomes
    `SetContextLink`
  - `cleanTypeName` in `src/apollo/index.ts` calls
    `forward(operation).map(...)`. Links return RxJS observables now;
    use `.pipe(map(...))`, or drop the `map`, which returns the data
    unchanged
  - `graphql-ws` stays on 5. Apollo 4 accepts 5 and 6, and the API
    picks the major in its spec 2
  - `connectionParams: { authToken }` sends the `authToken` reactive
    variable itself, a function, so the socket never carries the
    token. Make it `connectionParams: () => ({ authToken: authToken() })`,
    so the value is read when the socket connects, after login.
    Today only `updateOrders`, which needs no auth, is used, so no
    screen changes
- **GraphQL codegen 2 to current.** `@graphql-codegen/cli` is 7.x on
  npm. Keep the `typescript`, `typescript-operations`, and
  `typescript-react-apollo` plugins in `codegen.yml` if the generated
  hooks import from paths Apollo 4 accepts. If they do not, stop and
  ask before moving to `client-preset`; that changes every call site.
  Regenerate `src/graphql/schemaTypes.ts` against the local API. Do
  not hand-edit it
- **Redux 4 to Redux Toolkit 2.** `src/store/redux.js` uses
  `createStore` and `redux-devtools-extension`, which is abandoned.
  Replace both with `configureStore`, keeping the same reducer and
  `redux-saga` middleware. DevTools come from `configureStore`.
  Delete `redux` and `redux-devtools-extension`. Keep the reducers and
  sagas as they are. If Toolkit's dev checks report a non-serializable
  or mutated value, write down the action in Notes and turn off only
  that check
- **Headless UI 1.6 to 2.** Eight files import it: `CheckAuth.tsx`,
  `RestaurantsSearch.tsx`, `DishCover.tsx`, `OrderSummary.tsx`,
  `BasketPopOver.tsx`, `Basket.tsx`, `Notification.tsx`, and
  `Addresses.tsx`. Version 2 keeps the dot-notation components, so
  change only what `tsc` or the screen says is broken. Where a
  popover panel was placed with absolute classes and now sits wrong,
  use the `anchor` prop instead of more offsets
- **Icons.** `@heroicons/react` 1 to 2 (6 files; the import paths
  and some names change). `@fortawesome/react-fontawesome` 0.1 to the
  current major (16 files), with `fontawesome-svg-core` and the icon
  packs on the major it asks for
- **Same-major updates:** `react-hook-form`, `react-phone-number-input`,
  `victory` 36 to 37, `leaflet`. `react-leaflet` stays on 4 here; 5
  requires React 19 and moves in spec 3
- React Router stays. It is removed in spec 3

## Out of scope

- Create React App, React, TypeScript, Next.js. That is spec 3
- Tailwind. That is spec 4
- TanStack Query. Spec 1 removed `react-query` because nothing used it
- Replacing `redux-saga` with thunks, Zustand, or server actions
- Restyling a Headless UI component

## Done when

- Every route on the spec 1 baseline list has the result it had
- The order story from spec 1 gets as far as it did, including the
  client's `/order/[id]` showing the owner's status change without a
  reload
- The basket dialog, the basket popover, the order summary, and the
  address radio group open, close, and work with the keyboard: Tab,
  arrow keys, Enter, Escape
- Redux DevTools shows the store and each saga action by name
- `npm run graphql:gen` runs and `npm run build` passes

## Notes

- If Apollo 4 and the old codegen output cannot both compile, the
  codegen move is the fix, not a type cast

## References

- @context/project-overview.md
- @context/stack.md
- @context/features/spec1-clean-baseline.md
- `../../amazon/context/features/spec2-redux-toolkit-2-headless-ui-2.md`
