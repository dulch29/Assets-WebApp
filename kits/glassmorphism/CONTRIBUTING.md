# Contributing to Glassmorphism UI Kit

Thank you for your interest in contributing! This guide will help you get started.

---

## 🎯 Ways to Contribute

### 1. Report Bugs
- Use GitHub Issues
- Include browser/OS version
- Provide steps to reproduce
- Add screenshots if relevant

### 2. Suggest Features
- Open a Discussion first
- Explain the use case
- Consider if it fits the "zero dependencies" philosophy

### 3. Submit Code
- Fork the repo
- Create a feature branch
- Follow code style guidelines
- Submit a pull request

### 4. Improve Documentation
- Fix typos
- Add examples
- Clarify instructions
- Translate to other languages

---

## 🏗️ Development Setup

### Prerequisites
- Any modern browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JS

### Getting Started

```bash
# Clone your fork
git clone https://github.com/yourusername/glassmorphism-ui-kit.git
cd glassmorphism-ui-kit

# Create a branch
git checkout -b feature/my-new-component

# Make changes
# Test in browser by opening HTML files directly

# Commit and push
git add .
git commit -m "Add: New component description"
git push origin feature/my-new-component
```

---

## 📝 Code Style Guidelines

### CSS
- Use CSS custom properties for theming
- Prefix all classes with `hq-glass-`
- Use `clamp()` for responsive sizing
- Include `-webkit-` fallbacks for `backdrop-filter`
- Comment complex sections

```css
/* Good */
.hq-glass-card {
    padding: clamp(1rem, 2vw, 1.5rem);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
}

/* Bad */
.card {
    padding: 24px;
    backdrop-filter: blur(16px);
}
```

### HTML
- Use semantic HTML5 elements
- Include ARIA labels for accessibility
- Keep structure minimal and clean
- Comment component boundaries

```html
<!-- Good -->
<article class="hq-glass-card" role="article">
    <h3 class="hq-glass-card-title">Title</h3>
</article>

<!-- Bad -->
<div class="card">
    <div class="title">Title</div>
</div>
```

### JavaScript
- Use vanilla JS only (no frameworks)
- Keep it minimal and functional
- Comment non-obvious code
- Use `const` and `let` (not `var`)

```javascript
// Good
const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hq-glass-modal-active');
    }
};

// Bad
function openModal(modalId) {
    $('#' + modalId).show();  // No jQuery!
}
```

---

## 🧪 Testing Checklist

Before submitting a PR, verify:

- [ ] Component works at 360px (mobile)
- [ ] Component works at 768px (tablet)
- [ ] Component works at 1200px+ (desktop)
- [ ] Blur effect is visible on colorful background
- [ ] Hover states work correctly
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] No console errors
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Class names are prefixed with `hq-glass-`
- [ ] CSS variables are used for theming
- [ ] Code is commented where needed
- [ ] Component is added to showcase demo

---

## 🎨 Adding a New Component

### 1. Create Component File

```bash
# Create in components/ directory
touch components/glass-yourcomponent.css
```

### 2. Component File Structure

```css
/* ===== HQ GLASS: YOUR COMPONENT ===== */

/* Component CSS Variables (add to :root) */
/* Copy these to your project's :root section */
:root {
    --yourcomponent-variable: value;
}

/* Component Styles */
.hq-glass-yourcomponent {
    /* Your styles */
}

/* ===== HTML STRUCTURE ===== */
/*
<div class="hq-glass-yourcomponent">
    <!-- Your HTML -->
</div>
*/

/* ===== JAVASCRIPT (if required) ===== */
/*
<script>
// Your JS
</script>
*/

/* ===== USAGE NOTES ===== */
/*
- How to use this component
- Customization options
- Browser support notes
*/
```

### 3. Add to Showcase Demo

Edit `demos/showcase.html`:

```html
<!-- ===== START: HQ GLASS YOUR COMPONENT ===== -->
<section>
    <h2>Your Component</h2>
    <div class="hq-glass-yourcomponent">
        <!-- Demo content -->
    </div>
</section>
<!-- ===== END: HQ GLASS YOUR COMPONENT ===== -->
```

### 4. Document It

Add to `README.md`:
- Component description
- Use cases
- Code example

---

## 📋 Pull Request Guidelines

### PR Title Format

```
Type: Brief description

Examples:
- Add: Glass button component
- Fix: Modal backdrop blur on Safari
- Docs: Update installation instructions
- Refactor: Improve card hover animation
```

### PR Description Template

```markdown
## What does this PR do?
Brief description of changes

## Type of change
- [ ] New component
- [ ] Bug fix
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested on mobile (360px)
- [ ] Tested on tablet (768px)
- [ ] Tested on desktop (1200px+)
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] No console errors

## Screenshots
Add if relevant

## Additional notes
Any extra context
```

---

## 🐛 Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to...
2. Click on...
3. See error...

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: Chrome 120
- OS: Windows 11
- Component: Glass Card
- File: demos/showcase.html

## Screenshots
Add if helpful

## Possible Fix
If you have ideas
```

---

## 💡 Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Problem It Solves
What problem does this address?

## Proposed Solution
How would it work?

## Alternatives Considered
Other approaches you thought about

## Additional Context
Mockups, examples, etc.
```

---

## 📦 Component Requirements

All components must:
- ✅ Use CSS custom properties for theming
- ✅ Be fully responsive (mobile-first)
- ✅ Have prefixed class names (`hq-glass-*`)
- ✅ Work without external dependencies
- ✅ Include `backdrop-filter` and `-webkit-backdrop-filter`
- ✅ Be documented with usage examples
- ✅ Include accessibility features (ARIA labels, keyboard nav)
- ✅ Work in Chrome, Firefox, Safari, Edge

---

## 🎓 Learning Resources

### CSS Backdrop Filter
- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [Can I Use: backdrop-filter](https://caniuse.com/css-backdrop-filter)

### CSS Custom Properties
- [MDN: Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### Responsive Design
- [MDN: Responsive design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)

### Accessibility
- [MDN: ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [WebAIM](https://webaim.org/)

---

## 🙏 Thank You!

Your contributions make this project better for everyone. Whether you're fixing a typo or adding a new component, every contribution is valued.

---

## 📮 Questions?

- Open a [Discussion](https://github.com/yourusername/glassmorphism-ui-kit/discussions)
- Check existing [Issues](https://github.com/yourusername/glassmorphism-ui-kit/issues)
- Read the [Documentation](README.md)

---

**Happy contributing! 🚀**