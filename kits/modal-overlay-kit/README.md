# Modal & Overlay Kit

Production-ready overlay components - modals, toasts, tooltips, dropdowns, alerts.

## Components

- **Modal Dialog** - centered popup with backdrop
- **Toast Notifications** - corner alerts (success/error/warning/info)
- **Tooltip** - hover information popup
- **Dropdown Menu** - action menu popup
- **Alert Banners** - inline notifications

## Quick Start

```bash
cp components/overlays.css your-project/
```

```html
<link rel="stylesheet" href="overlays.css">
```

## Usage

### Modal
```html
<div class="hq-modal-backdrop" id="modal">
    <div class="hq-modal">
        <div class="hq-modal-header">
            <h3 class="hq-modal-title">Title</h3>
            <button class="hq-modal-close">×</button>
        </div>
        <div class="hq-modal-body">Content</div>
    </div>
</div>
```

### Toast
```html
<div class="hq-toast success">
    <div class="hq-toast-icon">✓</div>
    <div class="hq-toast-content">
        <div class="hq-toast-title">Success</div>
        <div class="hq-toast-message">Done!</div>
    </div>
</div>
```

### Tooltip
```html
<div class="hq-tooltip-wrapper">
    <button>Hover me</button>
    <div class="hq-tooltip">Helpful text</div>
</div>
```

### Dropdown
```html
<div class="hq-dropdown">
    <button class="hq-dropdown-trigger">Menu</button>
    <div class="hq-dropdown-menu">
        <a href="#" class="hq-dropdown-item">Option 1</a>
    </div>
</div>
```

### Alert
```html
<div class="hq-alert info">
    <div class="hq-alert-icon">ℹ</div>
    <div class="hq-alert-content">
        <div class="hq-alert-title">Info</div>
        <div class="hq-alert-message">Message</div>
    </div>
</div>
```

Types: `info`, `success`, `warning`, `error`

## Customization

```css
:root {
    --overlay-accent-cyan: #38BDF8;
    --overlay-surface-3: #0F131C;
}
```

## License
MIT
