# Spec 5 — Demo images

## Overview

Spec 5. Depends on spec 2 being merged. Does not depend on specs 3
or 4, and can run before them.

Every image in the local database points at
`cdn.filestackcontent.com`, and Filestack returns
`404 file not found` for all of them. The rows are intact: 23
restaurants, 12 dishes, and 8 categories, each with a URL. This spec
replaces those URLs with AI-generated images stored in this repo, so
they cannot disappear with a vendor account again. "Done" is the
home page, a category, a restaurant page, and the basket showing an
image for every real row.

## Requirements

### Data

- The data is in the Postgres.app 14 server, database
  `uber-eats-remote` (see `../uber-eats/AGENTS.md`). Take a fresh
  `pg_dump -Fc` into `~/Developer/Github/uberEats/backups/` before
  the update
- One SQL file, `../uber-eats/scripts/demo-images.sql`, sets
  `restaurant."coverImg"`, `dish.photo`, and `category."iconImg"` by
  `id` to the paths below. It runs in one transaction and can be run
  twice with the same result. It touches only those three columns
- Rows whose name starts with `QA ` are left as they are
- The paths are relative to the front end's origin. Every place the
  app shows an image uses the value as `<img src>` or a CSS
  `background-image`, so a relative path works on Create React App
  and on Next without code changes

### Files

- `public/demo/restaurants/{id}.webp` — 23 files, 1200×800
- `public/demo/dishes/{id}.webp` — 12 files, 800×800
- `public/demo/categories/{slug}.webp` — 8 files, 512×512, for the
  slugs `mexican`, `indian`, `taiwanese`, `healthy`, `fast-food`,
  `japenese`, `chinese`, and `all`. The slugs keep their current
  spelling
- WebP, under 200 KB each. Generate at the size the tool gives, then
  resize and compress
- Generated with Cursor's `GenerateImage` tool. It offers `1:1`,
  `4:3`, `3:4`, `16:9`, and `9:16`: restaurants at `4:3`, cropped to
  3:2, and dishes and categories at `1:1`. After the samples are
  approved, pass them as `reference_image_paths` for every other
  image so the style stays the same

### Image rules

- **Minimal and attractive, edge to edge, one style for all 43.** The
  food fills the frame and runs off the edges: a tight close-up crop,
  no border, no margin, no empty background around the subject. One
  subject per image. Soft studio light, true and appetising colour,
  sharp focus on the food. No table clutter, no cutlery, no garnish
  scattered around, no busy textures
- Where a sliver of surface shows, it is one muted colour per
  category, so a category's restaurants and dishes read as a set.
  Write the eight colours in Notes before generating
- **Approve the look first.** Generate three samples: one restaurant
  cover, one dish, and one category icon. Stop and show them. The
  other 40 are generated only after the user approves, with the same
  prompt wording
- No logos, no brand names, no text, no packaging, no storefronts,
  no people. Several rows are real brands (McDonald's, Starbucks,
  Burger King, Subway, Arby's, Little Caesars, Sonic). The image
  shows the food the brand is known for, never the brand
- Dishes are described generically: `Big Mac®` is a double-patty
  sesame-bun burger, `Egg McMuffin®` an egg and muffin breakfast
  sandwich, `Fanta® Orange` an orange soda in a glass with ice,
  `Dr Pepper®` a dark cola in a glass, `Sprite®` a clear lemon-lime
  soda in a glass
- A restaurant cover is a wide, full-bleed close-up of one hero dish
  of its category. The overlay text sits on the calmer, softer-focus
  part of the frame. Covers in the same category show different
  dishes
- A category image is a full-bleed close-up of one item that reads at
  small size: tacos, curry, bubble tea, a salad bowl, a burger, sushi,
  noodles, and for `all` a close-up of a few small bites
- Keep the prompt list in Notes in `current-feature.md`, one line
  per file, so an image can be regenerated

### Display

- Images show edge to edge in the app too. Two components shrink the
  image to fit and leave empty bands: `Dish.tsx` (`bg-contain`) and
  `DishCover.tsx` (`object-contain`). Change them to `bg-cover` and
  `object-cover`. Keep their size, padding, and position classes. The
  other image components already use `cover`
- This is the only style change in this spec

### Out of scope

- Replacing Filestack for new uploads. `AddDish.tsx`, `EditDish.tsx`,
  and `AddRestaurant.tsx` still upload to Filestack. That is the
  host spec's decision
- `src/store/fakeState.js` and its Filestack URL
- Renaming categories or fixing the `japenese` spelling
- Any other layout or style change to the image components

## Done when

- `grep -c filestackcontent` on a fresh dump returns only rows named
  `QA …`, or none
- At 375px and 1280px: the home page shows every category icon and
  every restaurant card with its image, a restaurant page shows its
  cover and every dish photo, and the basket and order summary show
  the dish photo
- No request to `cdn.filestackcontent.com` in the network panel on
  those pages
- Running the SQL file a second time changes nothing
- No image shows a logo or readable text
- The three samples were approved before the rest were generated,
  and all 43 share one style: full-bleed close-up, one subject, soft
  light, no empty margin
- Every image fills its box edge to edge in the app, with no empty
  band, including the dish card and the dish dialog
- The home grid at 1280px looks like one set, not 23 different
  photographers
- `npm run build` passes

## Notes

- **Leftover on you:** approve the three samples. Then look through
  all 43 once, and regenerate any that show a logo, a garbled word,
  a busy background, or empty space around the food
- The images are committed to this repo. The SQL file is committed
  to `../uber-eats` in a `chore:` commit on its `main`

## References

- @context/design-system.md
- `../uber-eats/AGENTS.md` (local database)
- `../uber-eats/context/stack.md`
