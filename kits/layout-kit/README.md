# Layout Kit

Production-ready grid system, containers, flexbox utilities, and spacing helpers.

## Components

- **Container** - max-width content wrapper (sm/md/lg/xl/full)
- **Grid System** - responsive CSS grid (1-12 columns)
- **Flexbox Utilities** - flex direction, justify, align, wrap
- **Spacing System** - margin/padding utilities
- **Section Dividers** - horizontal/vertical separators
- **Responsive Utilities** - show/hide at breakpoints

## Quick Start

```bash
cp components/layout.css your-project/
```

```html
<link rel="stylesheet" href="layout.css">
```

## Usage

### Container
```html
<div class="hq-container">
    <p>Centered content with max-width</p>
</div>
```

Sizes: `hq-container-sm`, `hq-container-md`, `hq-container-lg`, `hq-container-xl`, `hq-container-full`

### Grid
```html
<div class="hq-grid hq-grid-cols-3">
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
</div>
```

Columns: `hq-grid-cols-1`, `hq-grid-cols-2`, `hq-grid-cols-3`, `hq-grid-cols-4`, `hq-grid-cols-6`, `hq-grid-cols-12`

### Column Spans
```html
<div class="hq-grid hq-grid-cols-12">
    <div class="hq-col-span-6">Half width</div>
    <div class="hq-col-span-6">Half width</div>
</div>
```

### Flexbox
```html
<div class="hq-flex hq-justify-between hq-items-center">
    <div>Left</div>
    <div>Right</div>
</div>
```

### Spacing
```html
<div class="hq-p-lg hq-mb-md">
    Padding large, margin-bottom medium
</div>
```

Sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

### Divider
```html
<div class="hq-divider"></div>
```

### Responsive
```html
<div class="hq-hide-mobile">Desktop only</div>
<div class="hq-hide-desktop">Mobile only</div>
```

## Customization

```css
:root {
    --layout-max-width: 1400px;
    --layout-gap: 1.5rem;
    --layout-space-md: 1rem;
}
```

## License
MIT
