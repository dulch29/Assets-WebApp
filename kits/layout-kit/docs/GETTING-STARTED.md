# Getting Started - Layout Kit

## Installation

```bash
cp components/layout.css your-project/
```

```html
<link rel="stylesheet" href="layout.css">
```

## Container

Center content with max-width:

```html
<div class="hq-container">
    Content here
</div>
```

Sizes: sm (640px), md (768px), lg (1024px), xl (1280px), full (100%)

## Grid System

Responsive CSS Grid:

```html
<div class="hq-grid hq-grid-cols-3">
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
</div>
```

Columns: 1, 2, 3, 4, 6, 12

Mobile: collapses to 1 column
Tablet: collapses to 2 columns

## Column Spans

```html
<div class="hq-grid hq-grid-cols-12">
    <div class="hq-col-span-8">Main</div>
    <div class="hq-col-span-4">Sidebar</div>
</div>
```

Spans: 1, 2, 3, 4, 6, 12

## Flexbox

```html
<div class="hq-flex hq-justify-between hq-items-center">
    <div>Start</div>
    <div>End</div>
</div>
```

Direction: `hq-flex-row`, `hq-flex-col`
Justify: `hq-justify-start`, `hq-justify-center`, `hq-justify-end`, `hq-justify-between`
Align: `hq-items-start`, `hq-items-center`, `hq-items-end`, `hq-items-stretch`
Wrap: `hq-flex-wrap`

## Gap

```html
<div class="hq-flex hq-gap-md">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

Sizes: xs, sm, md, lg, xl

## Spacing

Margin: `hq-m-{size}`, `hq-mt-{size}`, `hq-mb-{size}`, `hq-ml-{size}`, `hq-mr-{size}`
Padding: `hq-p-{size}`, `hq-px-{size}`, `hq-py-{size}`

Sizes: 0, xs, sm, md, lg, xl, 2xl, 3xl

## Dividers

```html
<div class="hq-divider"></div>
```

## Section

```html
<div class="hq-section">
    Section with standard vertical padding
</div>
```

## Responsive

```html
<div class="hq-hide-mobile">Desktop only</div>
<div class="hq-hide-desktop">Mobile only</div>
```

Breakpoint: 768px

## Customization

```css
:root {
    --layout-max-width: 1400px;
    --layout-gap: 1.5rem;
    --layout-space-md: 1rem;
}
```
