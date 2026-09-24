# Navigation Kit

Production-ready navigation components - framework-agnostic, zero dependencies.

## Components

- Top Navigation Bar (sticky header with mobile menu)
- Breadcrumbs (page hierarchy)
- Tabs (content switching)
- Pagination (page controls)

## Quick Start

```bash
cp components/navigation.css your-project/
```

```html
<link rel="stylesheet" href="navigation.css">
```

## Usage

### Top Navigation
```html
<nav class="hq-nav-top">
    <a href="#" class="hq-nav-top-brand">Brand</a>
    <ul class="hq-nav-top-menu">
        <li><a href="#" class="hq-nav-top-link active">Home</a></li>
    </ul>
</nav>
```

### Breadcrumbs
```html
<ul class="hq-breadcrumbs">
    <li class="hq-breadcrumbs-item">
        <a href="#" class="hq-breadcrumbs-link">Home</a>
        <span class="hq-breadcrumbs-separator">/</span>
    </li>
</ul>
```

### Tabs
```html
<div class="hq-tabs">
    <ul class="hq-tabs-list">
        <li><button class="hq-tabs-trigger active">Tab 1</button></li>
    </ul>
    <div class="hq-tabs-content">
        <div class="hq-tabs-panel active">Content</div>
    </div>
</div>
```

## License
MIT
