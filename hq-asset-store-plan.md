---
name: hq-asset-store-plan
description: "Full site plan for HQ Asset Store — Unity/Itch-style asset marketplace demo built entirely from the ten UI kits, intended as a teaching example for kids using Antigravity"
metadata:
  node_type: memory
  type: project
  originSessionId: 0006ac06-d6a1-46ca-86f2-651609039993
  modified: 2026-09-24T00:23:12.587Z
---

# HQ Asset Store — Site Plan

An asset marketplace demo (Unity Asset Store / Itch.io style) built as an inspirational example for kids learning to use Antigravity. The constraint and teaching point: every UI element must come from one of the ten kits in the `kits/` folder.

**Why:** Real-world demo showing all ten kits working together in a coherent product. Built to hand to Antigravity for implementation.

**How to apply:** When suggesting changes or extensions, always trace each UI element back to its source kit. New elements that don't map to an existing kit go into store.css / the three small JS files listed below.

---

## Pages

### `index.html` — Homepage
- Top navbar: logo, search bar (Form Kit), category nav pills (Nav Kit), cart icon + account avatar dropdown (Nav Kit + Modal Kit)
- Hero banner: full-width, glassmorphism overlay card on featured asset (Glassmorphism Kit)
- Section "Featured Assets": horizontal scroll row, product cards (Card Kit), entrance stagger animation on load (Animation Kit)
- Section "On Sale": same row, sale badge pulsing (Animation Kit), struck-through price + badge (Data Display Kit)
- Section "New Arrivals": 3-column grid (Layout Kit + Card Kit)
- Footer: utility classes for spacing/color (Utility Kit)

### `browse.html` — Browse / Search Results
- Same navbar
- Left sidebar: filter panel — category checkboxes, price range, rating filter, sort dropdown (Form Kit)
- Main area: responsive grid (Layout Kit), product cards with hover lift (Card Kit + Animation Kit)
- Pagination strip at bottom (Nav Kit)

### `asset.html` — Single Asset Detail
- Same navbar
- Left: image gallery — large preview + thumbnail strip
- Right: title, publisher avatar (Data Display Kit), star rating, price, "Add to Cart" + "Add to Wishlist" (Button Kit), description, category badge (Data Display Kit)
- Toast on add-to-cart (Modal Kit)
- "More from this publisher" row (Card Kit)
- "Reviews" section: testimonial cards (Card Kit)

### `account.html` — User Dashboard (logged-in)
- Same navbar
- Tab nav: My Assets / My Listings / Settings (Nav Kit)
- My Assets: purchased asset grid (Card Kit + Layout Kit)
- My Listings: table with Edit/Delete (Data Display Kit table + Button Kit)
- Settings: profile form — name, bio, avatar, email, password (Form Kit)

### `publish.html` — Publish an Asset
- Multi-step form (Form Kit): name/category/description/tags → file + preview upload → price/license/sale toggle → review + submit
- Step progress indicator at top (Nav Kit stepper or store.css extension)
- Entrance animations between steps (Animation Kit)

### `auth.html` — Login / Register
- Centered glassmorphism panel (Glassmorphism Kit)
- Tab toggle Login / Register (Nav Kit)
- Forms: email, password, username, confirm, terms checkbox (Form Kit)
- Social auth buttons (Button Kit)
- Success toast "Welcome back!" (Modal Kit)

---

## Kit Usage Map

| Kit | Used in |
|---|---|
| Card System | Homepage rows, browse grid, asset detail, account dashboard, reviews |
| Button System | All CTAs — Add to Cart, Buy Now, Submit, Edit, Delete, social auth |
| Form UI Kit | Browse filters, publish form, auth forms, account settings |
| Navigation Kit | Top navbar, category pills, account tabs, browse pagination, publish stepper |
| Modal Overlay Kit | Cart toast, confirm-delete modal, account dropdown, tooltips, alert banners |
| Glassmorphism Kit | Hero banner overlay, featured spotlight, login/register panel |
| Layout Kit | Page skeleton on every page — sidebar+grid on browse, multi-col homepage |
| Data Display Kit | My Listings table, sale/category badges, publisher avatars, download progress bar |
| Animation Kit | Page load fade-ins, card hover lift, sale badge pulse, stagger on homepage rows |
| Utility Kit | Gap-filling — spacing overrides, color tweaks, text sizing between kit components |

---

## What's New (not in any kit)

- `css/store.css` — navbar shell, hero banner, page-level layout glue, stepper component
- `js/auth.js` — localStorage auth (register, login, session check), ~100 lines
- `js/store.js` — cart state across pages, ~100 lines
- `js/data.js` — 20-30 mock assets (name, category, price, rating, publisher, placeholder image)

---

## File Structure

```
asset-store/
  index.html
  browse.html
  asset.html
  account.html
  publish.html
  auth.html
  css/
    store.css
  js/
    auth.js
    store.js
    data.js
  kits/          ← copy of the ten kit CSS files
```

---

## Auth Model (frontend-only)

No backend. Simulated with localStorage:
- Register stores user object; login checks against it
- Session state persists across pages via auth.js
- Navbar swaps "Login/Register" ↔ avatar + "My Account" dropdown based on session
- Gated actions (publish, add to cart) redirect to auth.html if not logged in
