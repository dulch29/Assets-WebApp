# Utility Kit

Production-ready CSS utility classes - display, sizing, typography, colors, borders, shadows, positioning.

## Categories

- **Display** - block, flex, grid, hidden
- **Sizing** - width, height utilities
- **Typography** - text alignment, size, weight, color
- **Colors** - text colors, backgrounds
- **Borders** - radius, border utilities
- **Shadows** - elevation levels
- **Spacing** - opacity, positioning
- **Interaction** - cursor, transitions

## Quick Start

```bash
cp components/utilities.css your-project/
```

```html
<link rel="stylesheet" href="utilities.css">
```

## Usage

### Display
```html
<div class="hq-flex">Flexbox</div>
<div class="hq-grid">Grid</div>
<div class="hq-hidden">Hidden</div>
```

### Width
```html
<div class="hq-w-full">100% width</div>
<div class="hq-w-1-2">50% width</div>
```

### Typography
```html
<p class="hq-text-center hq-text-xl hq-font-bold">
    Centered, XL, Bold
</p>
```

### Colors
```html
<p class="hq-text-cyan">Cyan text</p>
<div class="hq-bg-surface-2">Surface background</div>
```

### Border Radius
```html
<div class="hq-rounded">Rounded</div>
<div class="hq-rounded-full">Pill shape</div>
```

### Shadows
```html
<div class="hq-shadow">Default shadow</div>
<div class="hq-shadow-lg">Large shadow</div>
```

### Opacity
```html
<div class="hq-opacity-50">50% opacity</div>
```

### Interaction
```html
<button class="hq-cursor-pointer hq-transition">
    Hover me
</button>
```

## Customization

```css
:root {
    --util-accent-cyan: #38BDF8;
    --util-surface-2: #0A0D12;
}
```

## License
MIT
