# Getting Started - Utility Kit

## Installation

```bash
cp components/utilities.css your-project/
```

```html
<link rel="stylesheet" href="utilities.css">
```

## Display

```html
<div class="hq-block">Block</div>
<div class="hq-flex">Flex</div>
<div class="hq-grid">Grid</div>
<div class="hq-hidden">Hidden</div>
```

## Sizing

Width:
```html
<div class="hq-w-full">100%</div>
<div class="hq-w-1-2">50%</div>
<div class="hq-w-1-3">33.33%</div>
```

Height:
```html
<div class="hq-h-full">100%</div>
<div class="hq-h-screen">100vh</div>
```

## Typography

Alignment:
```html
<p class="hq-text-left">Left</p>
<p class="hq-text-center">Center</p>
<p class="hq-text-right">Right</p>
```

Size:
```html
<p class="hq-text-xs">Extra small</p>
<p class="hq-text-base">Base</p>
<p class="hq-text-xl">XL</p>
<p class="hq-text-4xl">4XL</p>
```

Weight:
```html
<p class="hq-font-light">Light</p>
<p class="hq-font-normal">Normal</p>
<p class="hq-font-bold">Bold</p>
```

## Colors

Text:
```html
<p class="hq-text-primary">Primary</p>
<p class="hq-text-cyan">Cyan</p>
<p class="hq-text-emerald">Emerald</p>
```

Background:
```html
<div class="hq-bg-surface-2">Surface 2</div>
<div class="hq-bg-cyan">Cyan</div>
```

## Border Radius

```html
<div class="hq-rounded-none">0</div>
<div class="hq-rounded">0.5rem</div>
<div class="hq-rounded-lg">1rem</div>
<div class="hq-rounded-full">999px</div>
```

## Shadows

```html
<div class="hq-shadow-sm">Small</div>
<div class="hq-shadow">Default</div>
<div class="hq-shadow-lg">Large</div>
<div class="hq-shadow-none">None</div>
```

## Position

```html
<div class="hq-relative">Relative</div>
<div class="hq-absolute">Absolute</div>
<div class="hq-fixed">Fixed</div>
```

## Z-Index

```html
<div class="hq-z-10">10</div>
<div class="hq-z-50">50</div>
```

## Opacity

```html
<div class="hq-opacity-25">25%</div>
<div class="hq-opacity-50">50%</div>
<div class="hq-opacity-100">100%</div>
```

## Cursor

```html
<button class="hq-cursor-pointer">Pointer</button>
<button class="hq-cursor-not-allowed">Not allowed</button>
```

## Transitions

```html
<div class="hq-transition">Smooth transition</div>
```

## Customization

```css
:root {
    --util-accent-cyan: #38BDF8;
    --util-accent-emerald: #6EE7B7;
    --util-surface-1: #05070C;
}
```
