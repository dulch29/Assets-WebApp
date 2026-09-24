# Getting Started - Animation Kit

## Installation

```bash
cp components/animations.css your-project/
```

```html
<link rel="stylesheet" href="animations.css">
```

## Entrance Animations

Fade in:
```html
<div class="hq-fade-in">Content</div>
```

Slide in:
```html
<div class="hq-slide-up">From bottom</div>
<div class="hq-slide-down">From top</div>
<div class="hq-slide-left">From right</div>
<div class="hq-slide-right">From left</div>
```

Scale in:
```html
<div class="hq-scale-up">Grows in</div>
<div class="hq-scale-down">Shrinks in</div>
```

## Continuous Animations

```html
<div class="hq-bounce">Bounces forever</div>
<div class="hq-pulse">Pulses forever</div>
<div class="hq-spin">Spins forever</div>
```

## Attention Grabbers

```html
<div class="hq-shake">Shakes once (error)</div>
```

## Hover Effects

```html
<button class="hq-hover-lift">Hover me</button>
<button class="hq-hover-scale">Hover me</button>
<button class="hq-hover-glow">Hover me</button>
```

## Timing

Duration:
```html
<div class="hq-fade-in hq-duration-fast">0.15s</div>
<div class="hq-fade-in hq-duration-normal">0.3s</div>
<div class="hq-fade-in hq-duration-slow">0.5s</div>
```

Delay:
```html
<div class="hq-slide-up hq-delay-100">Waits 0.1s</div>
<div class="hq-slide-up hq-delay-200">Waits 0.2s</div>
<div class="hq-slide-up hq-delay-500">Waits 0.5s</div>
```

## Staggered Animation

Children animate in sequence:
```html
<div class="hq-stagger">
    <div class="hq-slide-up">First</div>
    <div class="hq-slide-up">Second (0.1s later)</div>
    <div class="hq-slide-up">Third (0.2s later)</div>
</div>
```

## Customization

```css
:root {
    --anim-duration-fast: 0.15s;
    --anim-duration-normal: 0.3s;
    --anim-duration-slow: 0.5s;
    --anim-ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --anim-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```
