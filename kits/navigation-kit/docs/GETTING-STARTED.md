# Getting Started - Navigation Kit

## Installation

Copy `components/navigation.css`:

```bash
cp components/navigation.css your-project/
```

Link in HTML:

```html
<link rel="stylesheet" href="navigation.css">
```

## Components

### Top Navigation Bar

```html
<nav class="hq-nav-top">
    <a href="#" class="hq-nav-top-brand">Your Brand</a>
    <ul class="hq-nav-top-menu" id="menu">
        <li><a href="#" class="hq-nav-top-link active">Home</a></li>
        <li><a href="#" class="hq-nav-top-link">About</a></li>
    </ul>
    <button class="hq-nav-top-toggle" id="toggle">☰</button>
</nav>

<script>
toggle.onclick = () => menu.classList.toggle('open');
</script>
```

### Breadcrumbs

```html
<ul class="hq-breadcrumbs">
    <li class="hq-breadcrumbs-item">
        <a href="/" class="hq-breadcrumbs-link">Home</a>
        <span class="hq-breadcrumbs-separator">/</span>
    </li>
    <li class="hq-breadcrumbs-item">
        <a href="#" class="hq-breadcrumbs-link">Current</a>
    </li>
</ul>
```

### Tabs

```html
<div class="hq-tabs">
    <ul class="hq-tabs-list">
        <li><button class="hq-tabs-trigger active" data-tab="t1">Tab 1</button></li>
        <li><button class="hq-tabs-trigger" data-tab="t2">Tab 2</button></li>
    </ul>
    <div class="hq-tabs-content">
        <div class="hq-tabs-panel active" id="t1">Content 1</div>
        <div class="hq-tabs-panel" id="t2">Content 2</div>
    </div>
</div>

<script>
document.querySelectorAll('.hq-tabs-trigger').forEach(t => t.onclick = () => {
    document.querySelectorAll('.hq-tabs-trigger').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.hq-tabs-panel').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.tab).classList.add('active');
});
</script>
```

### Pagination

```html
<ul class="hq-pagination">
    <li><a href="#" class="hq-pagination-link disabled">←</a></li>
    <li><a href="#" class="hq-pagination-link active">1</a></li>
    <li><a href="#" class="hq-pagination-link">2</a></li>
    <li><a href="#" class="hq-pagination-link">→</a></li>
</ul>
```

## Customization

```css
:root {
    --nav-accent-cyan: #38BDF8;
    --nav-surface-3: #0F131C;
}
```
