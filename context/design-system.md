# Design System

Every page follows this file.

This is an upgrade, not a redesign. The look is the one the app has
today. A spec that changes it says so.

The visual reference is the spec 1 baseline screenshots, and the
spec 4 reference screenshots once they exist.

---

## The look

Black and white with Tailwind's default palette, `lime` as the
accent, and a light and dark mode switched by the app's own
`isDarkVar` (`bg-black text-white` on the root), not Tailwind's
`dark:` variant.

- Hierarchy: Tailwind type scale, Josefin and Rubik
- Accents: `lime`
- Hard no's: a new palette, a component library, a redesign
- Errors: Tailwind `red`

---

## Tokens

Defined once in `tailwind.config.js` until spec 4, then under
`@theme` in `src/app/globals.css`. Pages never write a hex. A missing
colour is a new token, listed here in the same change.

| Token | Value | Use |
| --- | --- | --- |
| `h-128` | `50rem` | Tall banners |
| `min-h-1/2` | `50%` | Half-height sections |
| `min-h-1*2` | `120%` | Overflowing sections |
| `animate-wiggle` | scale 1 to 1.1, 2s | Attention pulse |

Shared classes in the global CSS: `.input`, `.span`, `.btn`.

---

## Type

Local `@font-face` files in `public/fonts/`: Tangerine, Josefin
Sans, Rubik, Pacifico.

---

## Components that exist

Use these. Do not restyle them per page.

- `Header`, `Basket`, `BasketPopOver`, `OrderSummary`
- `Notification`, `CheckAuth`, `ErrorPage`, `Construction`
- `DishCover`, `DishChart`, `RestaurantsSearch`, `Addresses`

---

## Before a page is done

- No hex, and no off-palette colour, appears in the diff
- It matches the reference screenshot at 375px and 1280px, light and
  dark
