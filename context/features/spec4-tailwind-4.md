# Spec 4 — Tailwind 4

## Overview

Spec 4 of 4. Depends on spec 3.

Tailwind 3.0 to 4. The theme moves from `tailwind.config.js` into
CSS. No screen changes on purpose. "Done" is every baseline route
looking the same as it did at the end of spec 3.

## Requirements

- Before the move, screenshot every baseline route at 375px and
  1280px on the spec 3 build. Those are the reference
- Run `npx @tailwindcss/upgrade`, then fix by hand. Use
  `@tailwindcss/postcss` in `postcss.config.mjs`. Delete
  `tailwind.config.js` and `autoprefixer`
- Pin the source in `src/app/globals.css`, as the `next` overlay in
  @context/stack.md shows, scanning `src/**/*.{js,jsx,ts,tsx}`
  (`Footer.jsx` is still JSX)
- The theme goes under `@theme` in `globals.css`: `h-128` (`50rem`),
  `min-h-1/2` (`50%`), `min-h-1*2` (`120%`), and the `wiggle`
  animation with its keyframes. `lime` is in Tailwind 4's default
  palette; drop the `colors.lime` line
- Plugins: `@tailwindcss/forms` stays with `@plugin`.
  `@tailwindcss/aspect-ratio` is replaced by the built-in `aspect-*`
  utilities; delete the package
- `.input`, `.span`, and `.btn` use `@apply`. Keep them, as
  `@utility` or under `@layer components`, whichever the upgrade
  tool produces and still builds
- Tailwind 4 changed defaults that change the look without an error:
  the default border colour is `currentColor`, not gray-200;
  `ring` is 1px, not 3px; and `shadow-sm`, `rounded-sm`, and
  `outline-none` were renamed. Check the screens with borders, focus
  rings, and shadows against the reference
- Buttons lost `cursor: pointer` in v4. Restore it in the base layer
- Dark mode is the app's own `isDarkVar` and conditional classes,
  not `dark:`. No `@custom-variant` is needed

## Out of scope

- A redesign, new colours, or a component library
- Renaming classes the upgrade tool did not touch

## Done when

- Every baseline route matches its reference screenshot at 375px and
  1280px, in light and dark
- Inputs from `@tailwindcss/forms` keep their style on login, signup,
  and add dish
- `grep -r "@tailwind " src` returns nothing and
  `tailwind.config.js` is gone
- `npm run build`, `npm run lint`, and `npx tsc --noEmit` pass
- Nothing was deployed and nothing was pushed

## Notes

- After this is on `main`, `../uber-eats` spec 2 starts

## References

- @context/stack.md
- @context/features/spec3-next16-react19.md
- `../../amazon/context/features/spec5-tailwind-4.md`
