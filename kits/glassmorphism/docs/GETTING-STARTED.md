# Getting Started

A visual guide to extracting and using components from the Glassmorphism UI Kit.

---

## 📂 Project Structure

```
glassmorphism-ui-kit/
├── components/          # Copy-paste ready components
│   ├── glass-card.css
│   ├── glass-modal.css
│   └── glass-navbar.css
├── demos/              # Live working demos
│   ├── showcase.html
│   └── hotel-booking.html
├── docs/               # Documentation
│   ├── getting-started.html
│   └── CHECKLIST.md
└── README.md
```

---

## 🚀 Three Ways to Use This Kit

### Option 1: View Live Demos

**Best for:** Understanding how components work together

1. Open `demos/showcase.html` — See all components in action
2. Open `demos/hotel-booking.html` — See a real-world example
3. Right-click → Inspect to explore the code

### Option 2: Extract Individual Components

**Best for:** Adding to existing projects

1. Open `components/glass-card.css` (or any component file)
2. The file contains:
   - CSS variables (copy to your `:root` once)
   - Component styles (copy all)
   - HTML structure (in comments)
   - JavaScript (if needed, in comments)
   - Usage notes and examples

3. Copy what you need to your project
4. Done!

### Option 3: Study from HTML Demos

**Best for:** Learning the full implementation

1. Open `demos/showcase.html` in your code editor
2. Look for comment markers:
   ```html
   <!-- ===== START: HQ GLASS CARD ===== -->
   ...component code...
   <!-- ===== END: HQ GLASS CARD ===== -->
   ```
3. Copy everything between START and END
4. Paste into your project

---

## 🎯 Quick Integration Steps

### Step 1: Choose Your Component

Pick from:
- **Glass Card** — `components/glass-card.css`
- **Glass Modal** — `components/glass-modal.css`
- **Glass Navbar** — `components/glass-navbar.css`

### Step 2: Copy CSS Variables (Once)

These are shared by all components — only copy once to your stylesheet:

```css
:root {
    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-border: rgba(255, 255, 255, 0.18);
    --glass-blur: 16px;
    --glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    --accent-primary: hsl(195, 100%, 45%);
    --accent-hover: hsl(195, 100%, 55%);
    /* ... more variables in component files */
}
```

### Step 3: Copy Component Styles

Copy the CSS for your chosen component from the file.

### Step 4: Copy HTML Structure

HTML structure is documented in comments inside each component file:

```css
/* ===== HTML STRUCTURE ===== */
/*
<article class="hq-glass-card">
    ...
</article>
*/
```

### Step 5: Add JavaScript (If Needed)

Modal and Navbar need JavaScript for interactions:

```css
/* ===== JAVASCRIPT (Required) ===== */
/*
<script>
function openModal() { ... }
function closeModal() { ... }
</script>
*/
```

### Step 6: Test & Customize

- Open in browser
- Test on a colorful background (to see blur effect)
- Customize colors via CSS variables

---

## 🎨 Customization Guide

### Change Accent Color

```css
/* Purple Theme */
--accent-primary: hsl(270, 70%, 55%);
--accent-hover: hsl(270, 70%, 65%);

/* Green Theme */
--accent-primary: hsl(160, 80%, 45%);
--accent-hover: hsl(160, 80%, 55%);

/* Orange Theme */
--accent-primary: hsl(25, 95%, 55%);
--accent-hover: hsl(25, 95%, 65%);
```

### Adjust Blur Intensity

```css
--glass-blur: 8px;   /* Subtle */
--glass-blur: 16px;  /* Default */
--glass-blur: 24px;  /* Strong */
```

### Change Background Opacity

```css
--glass-bg: rgba(255, 255, 255, 0.05);  /* More transparent */
--glass-bg: rgba(255, 255, 255, 0.08);  /* Default */
--glass-bg: rgba(255, 255, 255, 0.12);  /* More opaque */
```

---

## 📚 Component Details

### 🎴 Glass Card

**File:** `components/glass-card.css`

**Use for:**
- Product cards
- Profile cards
- Blog post previews
- Feature blocks

**Includes:**
- Image placeholder
- Title, subtitle, description
- Tag system
- Action buttons
- Hover animations

**JavaScript:** Not required

---

### 🪟 Glass Modal

**File:** `components/glass-modal.css`

**Use for:**
- Contact forms
- Login/signup
- Confirmations
- Popups

**Includes:**
- Backdrop blur
- Form fields
- Close button
- Action buttons
- Keyboard support

**JavaScript:** ✅ Required (open/close functions)

---

### 🧭 Glass Navbar

**File:** `components/glass-navbar.css`

**Use for:**
- Site navigation
- Sticky headers

**Includes:**
- Sticky positioning
- Mobile menu (< 768px)
- Link animations
- CTA button
- Logo area

**JavaScript:** ✅ Required (mobile toggle)

---

## 🐛 Troubleshooting

### Blur not visible?

**Check:**
1. Both `backdrop-filter` and `-webkit-backdrop-filter` are present
2. Component is placed over a colorful/busy background
3. Browser supports backdrop-filter (Chrome 76+, Safari 9+, Firefox 103+)

### Mobile menu not working?

**Check:**
1. JavaScript is included at bottom of HTML
2. Class names match exactly (case-sensitive)
3. No JavaScript errors in browser console

### Components look broken?

**Check:**
1. CSS variables are in `:root` section
2. All component CSS is copied
3. HTML structure matches the template
4. No conflicting styles from other CSS

### Styles not applying?

**Check:**
1. CSS is loaded after component styles
2. Class names are spelled correctly (`hq-glass-*`)
3. No CSS specificity issues

---

## 💡 Tips & Best Practices

### For Best Results

1. **Use colorful backgrounds** — Blur needs something behind it
2. **Test at all breakpoints** — 360px, 768px, 1200px
3. **Keep class names unchanged** — They're namespaced to prevent collisions
4. **Customize via CSS variables** — Don't edit component CSS directly

### For Learning

1. **Start with demos** — See components working
2. **Inspect in DevTools** — Understand how they work
3. **Extract one component** — Practice with Card first
4. **Build something** — Make your own project

### For Production

1. **Minify CSS** — Reduce file size
2. **Add images** — Replace gradient placeholders
3. **Customize colors** — Match your brand
4. **Test accessibility** — Use screen readers, keyboard navigation

---

## 📖 Further Reading

- **[Main README](../README.md)** — Overview and features
- **[Showcase Demo](../demos/showcase.html)** — All components
- **[Hotel Demo](../demos/hotel-booking.html)** — Real-world example
- **[Quality Checklist](CHECKLIST.md)** — Asset verification

---

## 🤝 Need Help?

- Check `README.md` for detailed documentation
- View live demos for reference
- Inspect components in DevTools
- Read inline comments in component files

---

**Ready to build?** Start with `demos/showcase.html` to see everything in action! 🚀