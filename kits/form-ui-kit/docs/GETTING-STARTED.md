# 🚀 Getting Started with Form UI Kit

**Context:** User requested complete form UI kit with docs. This is the setup guide referenced from README.md. No API dependencies, pure CSS styling. User's instruction: "Build me a complete form ui kit with docs for our students."

This guide will help you integrate the Form UI Kit into your project in **under 5 minutes**.

---

## 📋 Prerequisites

- **No build tools required** — just plain HTML/CSS/JS
- Works with any framework (React, Vue, vanilla JS)
- Modern browser (Chrome, Firefox, Safari, Edge)

---

## 🎯 Installation

### Option 1: Copy the CSS File (Recommended)

1. Copy `components/forms.css` into your project
2. Link it in your HTML:

```html
<link rel="stylesheet" href="path/to/forms.css">
```

### Option 2: CDN (Coming Soon)

```html
<!-- Not yet available -->
<link rel="stylesheet" href="https://cdn.example.com/form-ui-kit/1.0.0/forms.css">
```

---

## 🧩 Basic Usage

### 1. Simple Text Input

```html
<div class="hq-form-group">
    <label class="hq-label" for="username">Username</label>
    <input type="text" id="username" class="hq-input" placeholder="Enter username">
</div>
```

### 2. Input with Validation

```html
<div class="hq-form-group" id="email-group">
    <label class="hq-label" for="email">
        Email <span class="hq-label-required">*</span>
    </label>
    <input type="email" id="email" class="hq-input" placeholder="you@example.com">
    <span class="hq-helper-text">We'll never share your email.</span>
    <span class="hq-error-text">Please enter a valid email address.</span>
</div>

<script>
    const emailInput = document.getElementById('email');
    const emailGroup = document.getElementById('email-group');
    
    emailInput.addEventListener('blur', () => {
        if (!emailInput.value.includes('@')) {
            emailGroup.classList.add('has-error');
        } else {
            emailGroup.classList.remove('has-error');
        }
    });
</script>
```

### 3. Complete Login Form

```html
<form id="login-form">
    <div class="hq-form-group">
        <label class="hq-label" for="login-email">
            Email <span class="hq-label-required">*</span>
        </label>
        <input type="email" id="login-email" class="hq-input" placeholder="you@example.com" required>
        <span class="hq-error-text">Please enter a valid email.</span>
    </div>
    
    <div class="hq-form-group">
        <label class="hq-label" for="login-password">
            Password <span class="hq-label-required">*</span>
        </label>
        <input type="password" id="login-password" class="hq-input" placeholder="••••••••" required>
        <span class="hq-error-text">Password must be at least 8 characters.</span>
    </div>
    
    <label class="hq-checkbox-wrapper">
        <input type="checkbox" class="hq-checkbox">
        <span class="hq-checkbox-label">Remember me</span>
    </label>
    
    <button type="submit" class="btn btn-primary">Sign In</button>
</form>

<script>
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = form.querySelector('#login-email').value;
        const password = form.querySelector('#login-password').value;
        
        // Your API call here
        console.log('Logging in...', { email, password });
    });
</script>
```

---

## 🎨 Component Gallery

### Input Variants

```html
<!-- Default Input -->
<input type="text" class="hq-input" placeholder="Default size">

<!-- Small Input -->
<input type="text" class="hq-input hq-input-sm" placeholder="Small size">

<!-- Large Input -->
<input type="text" class="hq-input hq-input-lg" placeholder="Large size">

<!-- Input with Icon -->
<div class="hq-input-wrapper">
    <svg class="hq-input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>
    <input type="text" class="hq-input" placeholder="Search...">
</div>

<!-- Disabled Input -->
<input type="text" class="hq-input" value="Read only" disabled>
```

### Textarea

```html
<!-- Default Textarea -->
<textarea class="hq-textarea" placeholder="Enter your message..."></textarea>

<!-- Small Textarea -->
<textarea class="hq-textarea hq-textarea-sm" placeholder="Small size"></textarea>

<!-- Large Textarea -->
<textarea class="hq-textarea hq-textarea-lg" placeholder="Large size"></textarea>
```

### Select Dropdown

```html
<select class="hq-select">
    <option value="">Choose an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>

<!-- Small Select -->
<select class="hq-select hq-select-sm">
    <option value="">Choose an option</option>
</select>

<!-- Large Select -->
<select class="hq-select hq-select-lg">
    <option value="">Choose an option</option>
</select>
```

### Checkboxes

```html
<label class="hq-checkbox-wrapper">
    <input type="checkbox" class="hq-checkbox">
    <span class="hq-checkbox-label">Accept terms and conditions</span>
</label>

<label class="hq-checkbox-wrapper">
    <input type="checkbox" class="hq-checkbox" checked>
    <span class="hq-checkbox-label">Subscribe to newsletter</span>
</label>

<label class="hq-checkbox-wrapper">
    <input type="checkbox" class="hq-checkbox" disabled>
    <span class="hq-checkbox-label">Disabled option</span>
</label>
```

### Radio Buttons

```html
<label class="hq-radio-wrapper">
    <input type="radio" name="plan" class="hq-radio" checked>
    <span class="hq-radio-label">Free Plan</span>
</label>

<label class="hq-radio-wrapper">
    <input type="radio" name="plan" class="hq-radio">
    <span class="hq-radio-label">Pro Plan</span>
</label>

<label class="hq-radio-wrapper">
    <input type="radio" name="plan" class="hq-radio" disabled>
    <span class="hq-radio-label">Enterprise Plan (Coming Soon)</span>
</label>
```

---

## 🔄 Validation States

### Error State

```html
<div class="hq-form-group has-error">
    <label class="hq-label" for="username">Username</label>
    <input type="text" id="username" class="hq-input" value="ab">
    <span class="hq-error-text">Username must be at least 3 characters.</span>
</div>
```

**JavaScript:**

```javascript
const usernameGroup = document.querySelector('#username').closest('.hq-form-group');

// Add error
usernameGroup.classList.add('has-error');

// Remove error
usernameGroup.classList.remove('has-error');
```

### Success State

```html
<div class="hq-form-group has-success">
    <label class="hq-label" for="email">Email</label>
    <input type="email" id="email" class="hq-input" value="user@example.com">
    <span class="hq-success-text">Email is valid!</span>
</div>
```

**JavaScript:**

```javascript
const emailGroup = document.querySelector('#email').closest('.hq-form-group');

// Add success
emailGroup.classList.add('has-success');

// Remove success
emailGroup.classList.remove('has-success');
```

---

## 🎭 Layout Patterns

### Stacked Layout (Default)

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
    
    <button type="submit">Submit</button>
</form>
```

### Inline Layout

```html
<div class="hq-form-inline">
    <div class="hq-form-group">
        <label class="hq-label" for="search">Search</label>
        <input type="text" id="search" class="hq-input">
    </div>
    
    <div class="hq-form-group">
        <label class="hq-label" for="category">Category</label>
        <select id="category" class="hq-select">
            <option value="">All</option>
        </select>
    </div>
    
    <button type="submit">Search</button>
</div>
```

### Horizontal Layout

```html
<div class="hq-form-horizontal">
    <label class="hq-label" for="name">Full Name</label>
    <input type="text" id="name" class="hq-input">
    
    <label class="hq-label" for="email">Email</label>
    <input type="email" id="email" class="hq-input">
</div>
```

---

## 🌐 Framework Integration

### React

```jsx
import './forms.css';

function SignupForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        if (!formData.email.includes('@')) {
            newErrors.email = 'Invalid email';
        }
        if (formData.password.length < 8) {
            newErrors.password = 'Password too short';
        }
        
        if (Object.keys(newErrors).length === 0) {
            // Submit form
            console.log('Valid!', formData);
        } else {
            setErrors(newErrors);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className={`hq-form-group ${errors.email ? 'has-error' : ''}`}>
                <label className="hq-label" htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    className="hq-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <span className="hq-error-text">{errors.email}</span>}
            </div>
            
            <button type="submit">Sign Up</button>
        </form>
    );
}
```

### Vue

```vue
<template>
    <form @submit.prevent="handleSubmit">
        <div class="hq-form-group" :class="{ 'has-error': errors.email }">
            <label class="hq-label" for="email">Email</label>
            <input 
                type="email" 
                id="email" 
                class="hq-input"
                v-model="formData.email"
            />
            <span v-if="errors.email" class="hq-error-text">{{ errors.email }}</span>
        </div>
        
        <button type="submit">Sign Up</button>
    </form>
</template>

<script>
import './forms.css';

export default {
    data() {
        return {
            formData: {
                email: '',
                password: ''
            },
            errors: {}
        };
    },
    methods: {
        handleSubmit() {
            this.errors = {};
            
            if (!this.formData.email.includes('@')) {
                this.errors.email = 'Invalid email';
            }
            
            if (Object.keys(this.errors).length === 0) {
                console.log('Valid!', this.formData);
            }
        }
    }
};
</script>
```

---

## 🎨 Customization

### Change Colors

```css
:root {
    /* Primary accent color */
    --hq-accent-primary: #FF6B6B;
    --hq-accent-primary-hover: #FF8585;
    
    /* Success/Error colors */
    --hq-accent-success: #51CF66;
    --hq-accent-danger: #FF6B6B;
    
    /* Surface colors */
    --hq-surface-base: #2A2A2A;
    --hq-surface-elevated: #3A3A3A;
}
```

---

## 🐛 Troubleshooting

### Styles Not Applying

Make sure you're using the correct class names:
```html
<!-- ✅ Correct -->
<input type="text" class="hq-input">

<!-- ❌ Wrong -->
<input type="text" class="input">
```

### Validation States Not Showing

Make sure the parent has the correct class:
```html
<!-- ✅ Correct -->
<div class="hq-form-group has-error">
    <input type="text" class="hq-input">
    <span class="hq-error-text">Error message</span>
</div>
```

---

## 📚 Next Steps

- **[View Examples](../demos/examples.html)** — See 6 real-world form patterns
- **[Read Full Documentation](../README.md)** — Complete component reference

---

**Questions?** Check out the [README](../README.md) or open an issue on GitHub.
