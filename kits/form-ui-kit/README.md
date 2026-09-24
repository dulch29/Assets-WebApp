# 📝 Form UI Kit

**Production-ready form components** — text inputs, textareas, selects, checkboxes, radios, and validation states. Framework-agnostic, zero dependencies, copy-paste ready.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg)

---

## 🎯 What's Inside

**8 Form Components:**
- ✅ Text Input (with icon support)
- ✅ Textarea (resizable)
- ✅ Select Dropdown (custom-styled)
- ✅ Checkbox (custom styling)
- ✅ Radio Button (custom styling)
- ✅ Form Group (label + input + helper/error text)
- ✅ Validation States (error, success, disabled)
- ✅ Size Variants (small, default, large)

**3 Layout Patterns:**
- Stacked (default)
- Inline (fields side-by-side)
- Horizontal (label left, input right)

**Real-World Examples:**
1. Login Form
2. Contact Form
3. Profile Settings
4. Checkout Form
5. Search & Filter UI
6. Live Validation Demo

---

## 🚀 Quick Start

### 1. Copy the CSS File

```bash
# Copy this file into your project
cp components/forms.css your-project/
```

### 2. Link in Your HTML

```html
<link rel="stylesheet" href="forms.css">
```

### 3. Use the Components

```html
<div class="hq-form-group">
    <label class="hq-label" for="email">
        Email <span class="hq-label-required">*</span>
    </label>
    <input type="email" id="email" class="hq-input" placeholder="you@example.com">
    <span class="hq-helper-text">We'll never share your email.</span>
    <span class="hq-error-text">Please enter a valid email.</span>
</div>
```

### 4. Wire Your Own Logic

```javascript
const emailInput = document.querySelector('#email');
const formGroup = emailInput.closest('.hq-form-group');

emailInput.addEventListener('blur', () => {
    if (!emailInput.value.includes('@')) {
        formGroup.classList.add('has-error');
    } else {
        formGroup.classList.remove('has-error');
    }
});
```

---

## 📚 Documentation

- **[Getting Started Guide](docs/GETTING-STARTED.md)** — Step-by-step setup
- **[Component Reference](#component-reference)** — All components and variants
- **[Real-World Examples](demos/examples.html)** — 6 working patterns

---

## 🧩 Component Reference

### Text Input

```html
<!-- Default -->
<div class="hq-form-group">
    <label class="hq-label" for="name">Full Name</label>
    <input type="text" id="name" class="hq-input" placeholder="John Doe">
</div>

<!-- With Icon -->
<div class="hq-form-group">
    <label class="hq-label" for="search">Search</label>
    <div class="hq-input-wrapper">
        <svg class="hq-input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input type="text" id="search" class="hq-input" placeholder="Search...">
    </div>
</div>

<!-- Sizes -->
<input type="text" class="hq-input hq-input-sm" placeholder="Small">
<input type="text" class="hq-input" placeholder="Default">
<input type="text" class="hq-input hq-input-lg" placeholder="Large">
```

### Textarea

```html
<div class="hq-form-group">
    <label class="hq-label" for="message">Message</label>
    <textarea id="message" class="hq-textarea" placeholder="Enter your message..."></textarea>
    <span class="hq-helper-text">Maximum 500 characters</span>
</div>
```

### Select Dropdown

```html
<div class="hq-form-group">
    <label class="hq-label" for="country">Country</label>
    <select id="country" class="hq-select">
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
    </select>
</div>
```

### Checkbox

```html
<div class="hq-form-group">
    <label class="hq-label">Preferences</label>
    <label class="hq-checkbox-wrapper">
        <input type="checkbox" class="hq-checkbox" checked>
        <span class="hq-checkbox-label">Send me email notifications</span>
    </label>
    <label class="hq-checkbox-wrapper">
        <input type="checkbox" class="hq-checkbox">
        <span class="hq-checkbox-label">Send me SMS updates</span>
    </label>
</div>
```

### Radio Button

```html
<div class="hq-form-group">
    <label class="hq-label">Shipping Method</label>
    <label class="hq-radio-wrapper">
        <input type="radio" name="shipping" class="hq-radio" checked>
        <span class="hq-radio-label">Standard Shipping (5-7 days)</span>
    </label>
    <label class="hq-radio-wrapper">
        <input type="radio" name="shipping" class="hq-radio">
        <span class="hq-radio-label">Express Shipping (2-3 days)</span>
    </label>
</div>
```

### Validation States

```html
<!-- Error State -->
<div class="hq-form-group has-error">
    <label class="hq-label" for="username">
        Username <span class="hq-label-required">*</span>
    </label>
    <input type="text" id="username" class="hq-input" value="ab">
    <span class="hq-error-text">Username must be at least 3 characters.</span>
</div>

<!-- Success State -->
<div class="hq-form-group has-success">
    <label class="hq-label" for="email">Email</label>
    <input type="email" id="email" class="hq-input" value="user@example.com">
    <span class="hq-success-text">Email is valid!</span>
</div>

<!-- Disabled State -->
<div class="hq-form-group">
    <label class="hq-label" for="readonly">Read Only</label>
    <input type="text" id="readonly" class="hq-input" value="Cannot edit" disabled>
</div>
```

---

## 🎨 Layout Patterns

### Stacked (Default)

```html
<form>
    <div class="hq-form-group">
        <label class="hq-label" for="name">Name</label>
        <input type="text" id="name" class="hq-input">
    </div>
    <div class="hq-form-group">
        <label class="hq-label" for="email">Email</label>
        <input type="email" id="email" class="hq-input">
    </div>
</form>
```

### Inline (Side-by-Side)

```html
<div class="hq-form-inline">
    <div class="hq-form-group">
        <label class="hq-label" for="email">Email</label>
        <input type="email" id="email" class="hq-input">
    </div>
    <div class="hq-form-group">
        <label class="hq-label" for="password">Password</label>
        <input type="password" id="password" class="hq-input">
    </div>
    <button class="btn">Submit</button>
</div>
```

### Horizontal (Label Left, Input Right)

```html
<div class="hq-form-horizontal">
    <label class="hq-label" for="name">Full Name</label>
    <input type="text" id="name" class="hq-input">
    
    <label class="hq-label" for="email">Email</label>
    <input type="email" id="email" class="hq-input">
</div>
```

---

## 🎓 For Students

### What You Get (UI Only)
- ✅ Beautiful, accessible form styles
- ✅ Validation state visuals (error, success, disabled)
- ✅ Responsive sizing with `clamp()`
- ✅ Custom checkbox/radio styling
- ✅ Icon support for inputs
- ✅ Helper text and error messages

### What You Build (Logic)
- ❌ Form validation (required fields, email format, password strength)
- ❌ Submit handlers (API calls, data processing)
- ❌ Error handling (network errors, validation failures)
- ❌ State management (loading states, success feedback)
- ❌ Backend integration (endpoints, authentication)

**Why?** You learn real programming by wiring the logic yourself. We handle the boring UI work so you can focus on the code that matters.

---

## 🔧 Customization

### Override CSS Variables

```css
:root {
    /* Change accent color */
    --hq-accent-primary: #FF6B6B;
    
    /* Change surface colors */
    --hq-surface-base: #2A2A2A;
    --hq-surface-elevated: #3A3A3A;
    
    /* Change text colors */
    --hq-text-primary: rgba(255, 255, 255, 0.95);
    --hq-text-secondary: rgba(255, 255, 255, 0.70);
}
```

### Add Custom Validation Logic

```javascript
const form = document.querySelector('#my-form');
const emailGroup = form.querySelector('#email').closest('.hq-form-group');
const passwordGroup = form.querySelector('#password').closest('.hq-form-group');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Email validation
    const email = form.querySelector('#email').value;
    if (!email.includes('@')) {
        emailGroup.classList.add('has-error');
        isValid = false;
    } else {
        emailGroup.classList.remove('has-error');
        emailGroup.classList.add('has-success');
    }
    
    // Password validation
    const password = form.querySelector('#password').value;
    if (password.length < 8) {
        passwordGroup.classList.add('has-error');
        isValid = false;
    } else {
        passwordGroup.classList.remove('has-error');
        passwordGroup.classList.add('has-success');
    }
    
    if (isValid) {
        // Submit form (students write this)
        console.log('Form is valid, submitting...');
    }
});
```

---

## 🌐 Framework Integration

### React Example

```jsx
import './forms.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Please enter a valid email');
        } else {
            // Submit logic
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className={`hq-form-group ${error ? 'has-error' : ''}`}>
                <label className="hq-label" htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    className="hq-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <span className="hq-error-text">{error}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
```

### Vue Example

```vue
<template>
    <form @submit.prevent="handleSubmit">
        <div class="hq-form-group" :class="{ 'has-error': error }">
            <label class="hq-label" for="email">Email</label>
            <input 
                type="email" 
                id="email" 
                class="hq-input"
                v-model="email"
            />
            <span v-if="error" class="hq-error-text">{{ error }}</span>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script>
import './forms.css';

export default {
    data() {
        return {
            email: '',
            error: ''
        };
    },
    methods: {
        handleSubmit() {
            if (!this.email.includes('@')) {
                this.error = 'Please enter a valid email';
            } else {
                // Submit logic
            }
        }
    }
};
</script>
```

---

## ✅ Browser Support

- ✅ Chrome/Edge (modern)
- ✅ Firefox (modern)
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Custom checkbox/radio styling uses `appearance: none` which works in all modern browsers.

---

## 📦 What's Included

```
form-ui-kit/
├── components/
│   └── forms.css          # Extract this file (466 lines)
├── demos/
│   └── examples.html      # 6 real-world examples
├── docs/
│   └── GETTING-STARTED.md # Setup guide
└── README.md              # This file
```

---

## 🤝 Contributing

Found a bug? Have a suggestion? Open an issue or submit a pull request.

**Guidelines:**
1. Keep components framework-agnostic
2. No external dependencies
3. Use CSS custom properties for theming
4. Test at 360px (mobile), 768px (tablet), 1200px+ (desktop)

---

## 📄 License

MIT License — free for personal, commercial, and educational use.

---

## 🌟 Related Kits

- **[Glassmorphism Kit](../glassmorphism/)** — Glass cards, modals, and navbars
- **[Button System](../button-system/)** — Comprehensive button library

---

**Built with ❤️ for students and developers worldwide.**
