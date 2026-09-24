# Data Display Kit

Production-ready components for displaying data - tables, lists, badges, avatars, progress bars, skeleton loaders.

## Components

- **Table** - sortable data table with hover states
- **List** - styled list items
- **Badge** - status indicators (primary/success/warning/error)
- **Avatar** - user profile images with fallback initials
- **Progress Bar** - loading/completion indicator
- **Skeleton Loader** - placeholder for loading content

## Quick Start

```bash
cp components/data-display.css your-project/
```

```html
<link rel="stylesheet" href="data-display.css">
```

## Usage

### Table
```html
<table class="hq-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>john@example.com</td>
        </tr>
    </tbody>
</table>
```

### List
```html
<ul class="hq-list">
    <li class="hq-list-item">Item 1</li>
    <li class="hq-list-item">Item 2</li>
</ul>
```

### Badge
```html
<span class="hq-badge success">Active</span>
```

Types: `primary`, `success`, `warning`, `error`

### Avatar
```html
<div class="hq-avatar">JD</div>
<div class="hq-avatar">
    <img src="profile.jpg" alt="User">
</div>
```

Sizes: `sm`, default, `lg`, `xl`

### Progress Bar
```html
<div class="hq-progress">
    <div class="hq-progress-bar" style="width: 60%;"></div>
</div>
```

### Skeleton Loader
```html
<div class="hq-skeleton hq-skeleton-title"></div>
<div class="hq-skeleton hq-skeleton-text"></div>
<div class="hq-skeleton hq-skeleton-card"></div>
```

## Customization

```css
:root {
    --data-accent-cyan: #38BDF8;
    --data-surface-2: #0A0D12;
}
```

## License
MIT
