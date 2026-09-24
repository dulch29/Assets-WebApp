# Getting Started - Card System

Complete guide to using card components.

## Installation

Copy `components/cards.css` to your project and link it:

```html
<link rel="stylesheet" href="cards.css">
```

## Card Types

### 1. Product Card

For e-commerce and product catalogs.

```html
<div class="hq-card-product">
    <img src="product.jpg" class="hq-card-product-image">
    <div class="hq-card-product-content">
        <div class="hq-card-product-category">Electronics</div>
        <h3 class="hq-card-product-title">Wireless Headphones</h3>
        <p class="hq-card-product-description">Premium sound quality.</p>
        <div class="hq-card-product-footer">
            <div class="hq-card-product-price">
                <span class="hq-card-product-price-current">$199</span>
                <span class="hq-card-product-price-old">$299</span>
            </div>
            <button class="hq-card-product-button">Add to Cart</button>
        </div>
    </div>
</div>
```

### 2. Profile Card

For team pages and user directories.

```html
<div class="hq-card-profile">
    <img src="avatar.jpg" class="hq-card-profile-avatar">
    <h3 class="hq-card-profile-name">Sarah Chen</h3>
    <p class="hq-card-profile-role">Product Designer</p>
    <p class="hq-card-profile-bio">Crafting beautiful experiences.</p>
</div>
```

### 3. Pricing Card

For subscription plans.

```html
<div class="hq-card-pricing featured">
    <span class="hq-card-pricing-badge">Popular</span>
    <h3 class="hq-card-pricing-name">Professional</h3>
    <div class="hq-card-pricing-price">
        <span class="hq-card-pricing-price-amount">$29</span>
        <span class="hq-card-pricing-price-period">/month</span>
    </div>
    <ul class="hq-card-pricing-features">
        <li class="hq-card-pricing-feature">
            <svg>...</svg>
            Unlimited projects
        </li>
    </ul>
    <button class="hq-card-pricing-button">Get Started</button>
</div>
```

## Responsive

All cards scale from 360px (mobile) to 1200px+ (desktop) using fluid typography.

## Customization

Override CSS variables:

```css
:root {
    --hq-card-accent-cyan: #YOUR_COLOR;
}
```
