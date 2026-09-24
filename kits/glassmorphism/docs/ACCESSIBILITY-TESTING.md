# ♿ Accessibility Testing Guide

This guide explains how to verify that the Glassmorphism UI Kit meets **WCAG 2.1 Level AA** standards.

---

## 🎯 Testing Overview

Each component has been built with accessibility in mind. This checklist helps you verify compliance when integrating components into your project.

---

## ⌨️ Keyboard Navigation Testing

### Glass Navbar

**Test Steps:**
1. Load the demo page (`showcase.html` or `hotel-booking.html`)
2. Press `Tab` — you should see a "Skip to main content" link appear
3. Press `Enter` on the skip link — focus jumps to main content
4. Press `Tab` to navigate through navbar links
5. On mobile width (<768px), press `Enter` on the hamburger menu
6. Verify menu opens and `aria-expanded` changes to `true`
7. Press `Tab` through menu items
8. Press `Escape` or click outside to close menu

**Expected Behavior:**
- ✅ All links receive visible focus outline (2px solid)
- ✅ Menu toggle updates ARIA state
- ✅ No keyboard traps
- ✅ Logical tab order

---

### Glass Modal

**Test Steps:**
1. Press `Tab` until you reach a "Book Now" or "Open Modal" button
2. Press `Enter` to open modal
3. Verify focus automatically moves to first input field
4. Press `Tab` — focus stays within modal (focus trap)
5. Press `Shift+Tab` — reverse tab works within modal
6. Press `Escape` — modal closes
7. Reopen modal and click backdrop — modal closes
8. Verify focus returns to trigger button after close

**Expected Behavior:**
- ✅ Focus trapped inside modal when open
- ✅ Escape key closes modal
- ✅ First input auto-focused on open
- ✅ Focus returns to trigger button on close
- ✅ Backdrop click closes modal

---

### Glass Card

**Test Steps:**
1. Press `Tab` until you reach card buttons
2. Press `Enter` or `Space` to activate button
3. Verify all interactive elements are reachable
4. Check that heading hierarchy is logical (h3 for card titles)

**Expected Behavior:**
- ✅ All buttons keyboard-accessible
- ✅ Visible focus indicators
- ✅ Proper heading hierarchy

---

## 🔊 Screen Reader Testing

### Tools Needed:
- **Windows:** NVDA (free) or JAWS
- **macOS:** VoiceOver (built-in, `Cmd+F5`)
- **Linux:** Orca

### Glass Navbar Testing

**With VoiceOver (macOS):**
1. Enable VoiceOver: `Cmd+F5`
2. Navigate to navbar: `VO+Right Arrow`
3. Verify it announces: "Navigation landmark, Hotel Booking"
4. Tab through links — each should announce its text
5. On mobile menu toggle, verify it announces: "Toggle menu, button, collapsed"
6. Activate toggle — verify it announces: "expanded"

**Expected Announcements:**
- ✅ "Navigation landmark" (from `role="navigation"`)
- ✅ "Hotel Booking" (from `aria-label`)
- ✅ "Toggle menu, button" (from `aria-label` on hamburger)
- ✅ "collapsed" or "expanded" (from `aria-expanded`)

---

### Glass Modal Testing

**With VoiceOver (macOS):**
1. Navigate to "Book Now" button
2. Activate button — modal opens
3. Verify it announces: "Complete Your Booking, dialog"
4. Verify first input is focused
5. Tab through form fields — each label should be announced
6. Navigate to close button — should announce: "Close booking modal, button"

**Expected Announcements:**
- ✅ "Dialog" (from `role="dialog"`)
- ✅ Modal title read automatically (from `aria-labelledby`)
- ✅ All form labels properly associated with inputs
- ✅ Close button has descriptive label

---

### Glass Card Testing

**With VoiceOver (macOS):**
1. Navigate to a card
2. Verify it announces: "Article" (from `<article>`)
3. Card title should be announced as heading level 3
4. Decorative SVG icons should NOT be announced (from `aria-hidden="true"`)
5. Card image should announce alt text (from `aria-label` on `role="img"`)
6. Feature list should announce as "List, 4 items"

**Expected Announcements:**
- ✅ "Article" (semantic HTML)
- ✅ Heading hierarchy preserved
- ✅ Decorative icons hidden from screen readers
- ✅ Meaningful images have descriptive labels
- ✅ Lists announced with item count

---

## 🎨 Visual Accessibility Testing

### Contrast Ratio

**Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Browser DevTools (Chrome/Edge have built-in contrast checker)

**Test Steps:**
1. Open demo in browser
2. Right-click on text → Inspect
3. In Styles panel, look for contrast ratio indicator
4. Verify all text meets **4.5:1 minimum** (WCAG AA for normal text)
5. Large text (18pt+) must meet **3:1 minimum**

**Key Text Elements to Check:**
- ✅ Navbar links on glass background
- ✅ Card titles and descriptions
- ✅ Modal body text
- ✅ Button text (primary and secondary)
- ✅ Form labels and placeholders

---

### Focus Indicators

**Test Steps:**
1. Press `Tab` through all interactive elements
2. Verify each has a **visible** focus outline
3. Outline should be at least 2px solid
4. Outline color should contrast with background

**Expected Behavior:**
- ✅ All links have visible focus ring
- ✅ All buttons have visible focus ring
- ✅ All form inputs have visible focus ring
- ✅ Focus never "disappears" on any element

---

### Motion Preferences

**Test Steps:**
1. Enable "Reduce motion" in OS settings:
   - **macOS:** System Settings → Accessibility → Display → Reduce motion
   - **Windows:** Settings → Accessibility → Visual effects → Animation effects (OFF)
2. Reload demo page
3. Open modal — animation should be reduced/removed
4. Interact with components — verify no jarring transitions

**Expected Behavior:**
- ✅ Modal fade-in respects `prefers-reduced-motion`
- ✅ Navbar menu slide respects `prefers-reduced-motion`
- ✅ No auto-playing animations
- ✅ Hover effects still work (no motion)

---

## 🧪 Automated Testing Tools

### Browser Extensions

**axe DevTools (Chrome/Firefox):**
1. Install [axe DevTools](https://www.deque.com/axe/devtools/)
2. Open demo page
3. Open DevTools → axe DevTools tab
4. Click "Scan All of my page"
5. Review any violations (should be 0 critical/serious)

**WAVE (Chrome/Firefox):**
1. Install [WAVE](https://wave.webaim.org/extension/)
2. Open demo page
3. Click WAVE icon
4. Review summary — look for 0 errors
5. Check that ARIA usage is valid (green checkmarks)

---

### Automated CLI Testing

```bash
# Install Pa11y (Node.js required)
npm install -g pa11y

# Test showcase demo
pa11y file:///path/to/demos/showcase.html --standard WCAG2AA

# Test hotel booking demo
pa11y file:///path/to/demos/hotel-booking.html --standard WCAG2AA
```

**Expected Result:**
- ✅ 0 errors
- ✅ 0 warnings (or only informational notices)

---

## ✅ Full Compliance Checklist

Run through this checklist before releasing changes:

### Keyboard Navigation
- [ ] All interactive elements are keyboard-accessible
- [ ] Tab order is logical (left-to-right, top-to-bottom)
- [ ] Focus is visible on all elements
- [ ] No keyboard traps
- [ ] Escape closes modals
- [ ] Skip-to-content link works

### Screen Reader Support
- [ ] All images have alt text or `aria-label`
- [ ] Decorative images use `aria-hidden="true"`
- [ ] Form labels are properly associated
- [ ] ARIA roles are used correctly
- [ ] Modal announces dialog role
- [ ] Navbar announces navigation landmark
- [ ] Buttons have descriptive labels

### Visual Accessibility
- [ ] Text contrast meets 4.5:1 minimum
- [ ] Large text meets 3:1 minimum
- [ ] Focus indicators are visible (2px minimum)
- [ ] No color-only information
- [ ] `prefers-reduced-motion` is respected

### Semantic HTML
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Buttons use `<button>`, not `<div>`
- [ ] Links use `<a href>`
- [ ] Forms use `<form>` with proper fields
- [ ] Lists use `<ul>`/`<ol>` + `<li>`

### Automated Tests
- [ ] axe DevTools shows 0 errors
- [ ] WAVE shows 0 errors
- [ ] Pa11y passes WCAG2AA standard

---

## 🐛 Common Issues and Fixes

### Issue: Focus outline not visible on buttons

**Fix:**
```css
.hq-glass-modal-btn:focus {
    outline: 2px solid var(--hq-accent-primary);
    outline-offset: 2px;
}
```

---

### Issue: Screen reader announces decorative icons

**Fix:**
```html
<!-- Add aria-hidden to SVG icons that are purely decorative -->
<svg aria-hidden="true" width="16" height="16">...</svg>
```

---

### Issue: Modal focus not trapped

**Fix:**
Add focus trap JavaScript:
```javascript
const modal = document.getElementById('modal');
const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});
```

---

## 📚 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [MDN ARIA Documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [NVDA Screen Reader (Free)](https://www.nvaccess.org/download/)

---

**Questions or issues?** Open an issue on GitHub with the `accessibility` label.
