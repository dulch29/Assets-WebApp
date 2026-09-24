# Getting Started - Data Display Kit

## Installation

```bash
cp components/data-display.css your-project/
```

```html
<link rel="stylesheet" href="data-display.css">
```

## Table

```html
<table class="hq-table">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

## List

```html
<ul class="hq-list">
    <li class="hq-list-item">Item</li>
</ul>
```

## Badge

```html
<span class="hq-badge primary">Badge</span>
```

Types: primary, success, warning, error

## Avatar

```html
<div class="hq-avatar">AB</div>
<div class="hq-avatar sm">SM</div>
<div class="hq-avatar lg">LG</div>
```

With image:
```html
<div class="hq-avatar">
    <img src="photo.jpg" alt="User">
</div>
```

## Progress Bar

```html
<div class="hq-progress">
    <div class="hq-progress-bar" style="width: 75%;"></div>
</div>
```

Sizes: sm, default, lg

## Skeleton Loader

```html
<div class="hq-skeleton hq-skeleton-title"></div>
<div class="hq-skeleton hq-skeleton-text"></div>
<div class="hq-skeleton hq-skeleton-avatar"></div>
<div class="hq-skeleton hq-skeleton-card"></div>
```

## Customization

```css
:root {
    --data-accent-cyan: #38BDF8;
    --data-accent-emerald: #6EE7B7;
    --data-surface-2: #0A0D12;
}
```
