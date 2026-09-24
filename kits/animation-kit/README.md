# Animation Kit

Production-ready CSS animations - fade, slide, scale, bounce, pulse, spin, shake, hover effects.

## Components

- **Fade** - fade in/out
- **Slide** - slide up/down/left/right
- **Scale** - scale up/down
- **Bounce** - continuous bounce effect
- **Pulse** - opacity pulse
- **Spin** - continuous rotation
- **Shake** - shake on error
- **Hover Effects** - lift, scale, glow
- **Stagger** - sequential animation delays

## Quick Start

```bash
cp components/animations.css your-project/
```

```html
<link rel="stylesheet" href="animations.css">
```

## Usage

### Fade
```html
<div class="hq-fade-in">Fades in</div>
```

### Slide
```html
<div class="hq-slide-up">Slides up</div>
<div class="hq-slide-down">Slides down</div>
<div class="hq-slide-left">Slides left</div>
<div class="hq-slide-right">Slides right</div>
```

### Scale
```html
<div class="hq-scale-up">Scales up</div>
<div class="hq-scale-down">Scales down</div>
```

### Continuous
```html
<div class="hq-bounce">Bounces</div>
<div class="hq-pulse">Pulses</div>
<div class="hq-spin">Spins</div>
<div class="hq-shake">Shakes</div>
```

### Hover Effects
```html
<button class="hq-hover-lift">Lifts on hover</button>
<button class="hq-hover-scale">Scales on hover</button>
<button class="hq-hover-glow">Glows on hover</button>
```

### Duration
```html
<div class="hq-fade-in hq-duration-fast">Fast fade</div>
<div class="hq-fade-in hq-duration-slow">Slow fade</div>
```

### Delay
```html
<div class="hq-slide-up hq-delay-200">Delayed</div>
```

Delays: `hq-delay-100`, `hq-delay-200`, `hq-delay-300`, `hq-delay-500`

### Stagger
```html
<div class="hq-stagger">
    <div class="hq-slide-up">Item 1</div>
    <div class="hq-slide-up">Item 2</div>
    <div class="hq-slide-up">Item 3</div>
</div>
```

## Customization

```css
:root {
    --anim-duration-fast: 0.15s;
    --anim-duration-normal: 0.3s;
    --anim-duration-slow: 0.5s;
}
```

## License
MIT
