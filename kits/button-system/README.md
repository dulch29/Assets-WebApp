# Button System

Production-grade button components with semantic variants, interactive states, and zero dependencies. Framework-agnostic — works with React, Vue, vanilla HTML, or any framework.

## 🎯 Features

- **7 Semantic Variants** — Primary, Secondary, Success, Danger, Warning, Ghost, Outline
- **4 Size Options** — Small, Default, Large, Extra Large (all fluid with `clamp()`)
- **Icon Support** — Icon-only buttons and text+icon combinations
- **Interactive States** — Hover, active, focus, disabled, loading
- **Button Groups** — Visually grouped related actions
- **Fully Responsive** — Free-scale behavior, no fixed pixels
- **Zero Dependencies** — Pure CSS, no JavaScript required for styling
- **Accessible** — Proper focus states, semantic HTML

## 📦 What's Included

```
button-system/
├── index.html              # Live demo showcase
├── components/
│   └── buttons.css         # Copy-paste CSS (production-ready)
├── demos/
│   └── examples.html       # Real-world usage examples
└── docs/
    ├── README.md           # This file
    └── GETTING-STARTED.md  # Setup guide
```

## 🚀 Quick Start

### 1. Copy the CSS

```html
<!-- Link to the stylesheet -->
<link rel="stylesheet" href="path/to/buttons.css">

<!-- Or paste the CSS directly into your project -->
```

### 2. Use the Classes

```html
<!-- Primary button -->
<button class="hq-btn hq-btn-primary">Click Me</button>

<!-- Danger button with icon -->
<button class="hq-btn hq-btn-danger">
    <svg><!-- trash icon --></svg>
    Delete
</button>

<!-- Loading state -->
<button class="hq-btn hq-btn-primary hq-btn-loading">
    Saving...
</button>
```

### 3. Wire Your Own Logic

```javascript
// Kids add their own event handlers
document.querySelector('.hq-btn-primary').addEventListener('click', () => {
    // Your custom logic here
    console.log('Button clicked!');
});
```

## 🎨 Available Classes

### Base Class
- `.hq-btn` — Required on every button

### Semantic Variants
- `.hq-btn-primary` — Main call-to-action (blue)
- `.hq-btn-secondary` — Alternative action (gray)
- `.hq-btn-success` — Positive confirmation (green)
- `.hq-btn-danger` — Destructive action (red)
- `.hq-btn-warning` — Caution required (orange)
- `.hq-btn-ghost` — Minimal emphasis (transparent)
- `.hq-btn-outline` — Bordered variant (outlined blue)

### Size Modifiers
- `.hq-btn-sm` — Small button
- *(default)* — Standard size
- `.hq-btn-lg` — Large button
- `.hq-btn-xl` — Extra large button

### Icon Buttons
- `.hq-btn-icon` — Circular icon-only button
- `.hq-btn-icon-sm` — Small icon button
- `.hq-btn-icon-lg` — Large icon button

### State Modifiers
- `:disabled` — Disabled state (HTML attribute)
- `.hq-btn-loading` — Loading spinner animation

### Layout Modifiers
- `.hq-btn-block` — Full-width button
- `.hq-btn-group` — Container for grouped buttons

## 📖 Usage Examples

### Basic Buttons

```html
<button class="hq-btn hq-btn-primary">Primary</button>
<button class="hq-btn hq-btn-secondary">Secondary</button>
<button class="hq-btn hq-btn-danger">Delete</button>
```

### Buttons with Icons

```html
<!-- Icon before text -->
<button class="hq-btn hq-btn-primary">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M12 4v16m8-8H4"/>
    </svg>
    Add Item
</button>

<!-- Icon after text -->
<button class="hq-btn hq-btn-secondary">
    Continue
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
</button>
```

### Icon-Only Buttons

```html
<button class="hq-btn hq-btn-primary hq-btn-icon">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M12 4v16m8-8H4"/>
    </svg>
</button>
```

### Loading State

```html
<!-- Add .hq-btn-loading class via JavaScript -->
<button class="hq-btn hq-btn-primary hq-btn-loading">
    Loading...
</button>

<script>
const btn = document.querySelector('.hq-btn-primary');
btn.addEventListener('click', () => {
    btn.classList.add('hq-btn-loading');
    btn.disabled = true;
    
    // Your async operation
    setTimeout(() => {
        btn.classList.remove('hq-btn-loading');
        btn.disabled = false;
    }, 2000);
});
</script>
```

### Button Groups

```html
<div class="hq-btn-group">
    <button class="hq-btn hq-btn-primary">Left</button>
    <button class="hq-btn hq-btn-secondary">Center</button>
    <button class="hq-btn hq-btn-secondary">Right</button>
</div>
```

### Full-Width Buttons

```html
<button class="hq-btn hq-btn-primary hq-btn-block">
    Complete Purchase
</button>
```

## 🎓 For Students

This is a **UI-only** component library. You get:
- ✅ Beautiful button styles
- ✅ All interactive states (hover, focus, active)
- ✅ Responsive sizing

You wire yourself:
- ❌ Click handlers
- ❌ Form submission logic
- ❌ API calls
- ❌ Loading state management

**Example: Add your own logic**

```javascript
// You wire the click handler
document.querySelector('.hq-btn-primary').addEventListener('click', async () => {
    const btn = event.target;
    
    // You control the loading state
    btn.classList.add('hq-btn-loading');
    btn.disabled = true;
    
    try {
        // You make the API call
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify({ data: 'your data' })
        });
        
        const result = await response.json();
        
        // You handle the response
        if (result.success) {
            btn.classList.remove('hq-btn-primary', 'hq-btn-loading');
            btn.classList.add('hq-btn-success');
            btn.textContent = 'Success!';
        }
    } catch (error) {
        // You handle errors
        btn.classList.remove('hq-btn-loading');
        btn.disabled = false;
        alert('Something went wrong!');
    }
});
```

## 🎨 Customization

All colors and sizes use CSS variables. Override them to match your brand:

```css
:root {
    --accent-primary: #3B6DFF;        /* Change primary color */
    --accent-success: #6EE7B7;        /* Change success color */
    --accent-danger: #FF6B6B;         /* Change danger color */
    /* ... and more */
}
```

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Uses modern CSS (`clamp()`, CSS Grid, CSS Variables) — IE11 not supported.

## 📄 License

MIT License — use in any project, personal or commercial.

## 🤝 Contributing

Found a bug or want to suggest an improvement? Open an issue or submit a pull request!

---

**Built with care for students learning full-stack development.**