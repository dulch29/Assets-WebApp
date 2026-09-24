# Card System

Production-ready card components - framework-agnostic, zero dependencies.

## Quick Start

```bash
# Copy CSS
cp components/cards.css your-project/

# Link in HTML
<link rel="stylesheet" href="cards.css">
```

## Components

- Product Card - e-commerce displays
- Profile Card - user profiles  
- Article Card - blog posts
- Stats Card - dashboard metrics
- Testimonial Card - customer reviews
- Pricing Card - subscription plans

## Usage

```html
<div class="hq-card-product">
    <img src="product.jpg" class="hq-card-product-image">
    <div class="hq-card-product-content">
        <h3 class="hq-card-product-title">Product Name</h3>
        <div class="hq-card-product-price">
            <span class="hq-card-product-price-current">$99</span>
        </div>
        <button class="hq-card-product-button">Buy Now</button>
    </div>
</div>
```

See `docs/GETTING-STARTED.md` for full documentation.

## Customization

All styles use CSS variables:

```css
:root {
    --hq-card-accent-cyan: #38BDF8;
    --hq-card-surface-3: #0F131C;
}
```

## License

MIT - Free for any use
