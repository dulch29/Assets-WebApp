User said: 'im really busy right now im just gonna let u do every kit' - autonomous build of 7 kits. This is documentation for Modal & Overlay Kit. No API calls, no external importers, pure static documentation.

# Getting Started - Modal & Overlay Kit

## Installation

```bash
cp components/overlays.css your-project/
```

```html
<link rel="stylesheet" href="overlays.css">
```

## Modal Dialog

```html
<div class="hq-modal-backdrop" id="modal">
    <div class="hq-modal">
        <div class="hq-modal-header">
            <h3 class="hq-modal-title">Title</h3>
            <button class="hq-modal-close" onclick="closeModal()">×</button>
        </div>
        <div class="hq-modal-body">Content</div>
    </div>
</div>

<script>
function openModal() { document.getElementById('modal').classList.add('open'); }
function closeModal() { document.getElementById('modal').classList.remove('open'); }
</script>
```

## Toast Notifications

```javascript
function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'hq-toast ' + type;
    toast.innerHTML = '<div class="hq-toast-content"><div class="hq-toast-title">' + title + '</div></div>';
    container.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 5000);
}
```

## Tooltip

```html
<div class="hq-tooltip-wrapper">
    <button>Hover me</button>
    <div class="hq-tooltip">Helpful text</div>
</div>
```

## Dropdown

```html
<div class="hq-dropdown" id="dropdown">
    <button class="hq-dropdown-trigger">Menu</button>
    <div class="hq-dropdown-menu">
        <a href="#" class="hq-dropdown-item">Option</a>
    </div>
</div>
```

## Alert Banner

```html
<div class="hq-alert success">
    <div class="hq-alert-icon">✓</div>
    <div class="hq-alert-content">
        <div class="hq-alert-title">Success</div>
    </div>
</div>
```

Types: info, success, warning, error

## Customization

```css
:root {
    --overlay-accent-cyan: #38BDF8;
}
```
