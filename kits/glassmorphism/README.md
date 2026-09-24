# 🪟 Glassmorphism UI Kit

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Framework](https://img.shields.io/badge/framework-agnostic-purple.svg)
![WCAG](https://img.shields.io/badge/WCAG%202.1-Level%20AA-green.svg)
![Accessibility](https://img.shields.io/badge/a11y-keyboard%20%26%20screen%20reader-blue.svg)

**Framework-agnostic glassmorphism components** — pure HTML/CSS/JS with zero dependencies. Drop into any project regardless of stack.

---

## 📦 What's Inside

**3 Production-Ready Components:**

1. **Glass Card** — Content containers with blur effect
2. **Glass Modal** — Popup dialogs with backdrop blur
3. **Glass Navbar** — Sticky navigation with mobile menu

**Features:**
- ✅ Free-scale responsive (360px → 1200px+)
- ✅ Real backdrop blur with Safari fallback
- ✅ CSS variable theming
- ✅ Namespaced classes (`hq-glass-*`)
- ✅ Zero external dependencies
- ✅ Copy-paste ready
- ✅ **WCAG 2.1 Level AA compliant**
- ✅ **Full keyboard navigation support**
- ✅ **Screen reader optimized**

---

## ♿ Accessibility Features

This kit meets **WCAG 2.1 Level AA** standards:

**Keyboard Navigation:**
- Tab through all interactive elements
- Escape key closes modals
- Enter/Space activates buttons
- Skip-to-content link for screen readers

**Screen Reader Support:**
- Semantic HTML (`<nav>`, `<article>`, `<button>`)
- ARIA labels on all interactive elements
- `role="dialog"` and `aria-modal="true"` on modals
- Descriptive `aria-label` on icon buttons
- Proper heading hierarchy (h1 → h2 → h3)

**Focus Management:**
- Visible focus indicators (2px outline)
- Focus trapped within open modals
- Auto-focus on first modal input
- Mobile menu updates `aria-expanded` state

**Visual Accessibility:**
- 4.5:1 minimum contrast ratio on text
- Supports prefers-reduced-motion
- No color-only information conveyance

---

## 🚀 Quick Start

### Option 1: View Live Demos

```bash
# Open in browser
open demos/showcase.html        # Component showcase
open demos/hotel-booking.html   # Full app example
```

### Option 2: Copy Individual Components

Each component is extracted in `/components/`:
- `glass-card.css` — Card component
- `glass-modal.css` — Modal component  
- `glass-navbar.css` — Navbar component

Copy the CSS file + HTML structure into your project.

---

## 🎨 Customization

All components use CSS variables for theming:

```css
:root {
    --hq-glass-blur: 12px;           /* Blur intensity */
    --hq-glass-bg: rgba(255,255,255,0.7);  /* Background */
    --hq-glass-border: rgba(255,255,255,0.1); /* Border */
    --hq-accent-primary: #38bdf8;    /* Accent color */
}
```

Override these in your project to match your brand.

---

## 📖 Documentation

- **[Getting Started Guide](docs/GETTING-STARTED.md)** — Step-by-step setup
- **[Component Checklist](docs/CHECKLIST.md)** — Quality standards
- **[Accessibility Testing](docs/ACCESSIBILITY-TESTING.md)** — How to verify a11y compliance
- **[Contributing](CONTRIBUTING.md)** — How to contribute

---

## 🎓 Built for Learning

This kit is designed for students and educators:
- No framework lock-in
- Pure fundamentals (HTML/CSS/JS)
- Well-commented code
- Real working features (localStorage persistence)
- Professional code structure

---

## 🌐 Browser Support

- ✅ Chrome 76+ (full support)
- ✅ Safari 9+ (with `-webkit-` fallback)
- ✅ Firefox 70+
- ✅ Edge 79+

**Note:** `backdrop-filter` requires modern browsers. Graceful degradation provided.

---

## 📄 License

MIT License — free for personal and commercial use.

---

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

**Part of the [Assets WebApp Collection](#) — Framework-agnostic UI kits for modern web development.**
