# Getting Started with Button System

Quick setup guide to start using the Button System kit in your project.

## ⚡ Installation

### Option 1: Direct Copy-Paste (Recommended)

1. **Copy the CSS file**
   ```
   kits/button-system/components/buttons.css
   ```

2. **Paste into your project**
   ```
   your-project/
   ├── css/
   │   └── buttons.css    ← paste here
   ├── index.html
   └── ...
   ```

3. **Link in your HTML**
   ```html
   <link rel="stylesheet" href="css/buttons.css">
   ```

### Option 2: Inline CSS

Copy the entire CSS content from `components/buttons.css` and paste it directly into your `<style>` tag:

```html
<style>
    /* Paste button CSS here */
</style>
```

---

## 🎯 Basic Usage

### 1. Add the Base Class

Every button needs the `.hq-btn` class:

```html
<button class="hq-btn">Button</button>
```

### 2. Add a Semantic Variant

Choose the variant that matches the action's meaning:

```html
<button class="hq-btn hq-btn-primary">Save</button>
<button class="hq-btn hq-btn-danger">Delete</button>
<button class="hq-btn hq-btn-success">Confirm</button>
```

### 3. Add Optional Modifiers

Size, icons, loading states, etc.:

```html
<!-- Large button -->
<button class="hq-btn hq-btn-primary hq-btn-lg">Large</button>

<!-- With icon -->
<button class="hq-btn hq-btn-primary">
    <svg><!-- icon --></svg>
    Save
</button>

<!-- Loading state -->
<button class="hq-btn hq-btn-primary hq-btn-loading">Saving...</button>
```

---

## 📖 Complete Examples

### Example 1: Login Form

```html
<form>
    <h2>Sign In</h2>
    
    <!-- Your form inputs here -->
    
    <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
        <button type="submit" class="hq-btn hq-btn-primary hq-btn-block">
            Sign In
        </button>
    </div>
    
    <button type="button" class="hq-btn hq-btn-ghost hq-btn-block" style="margin-top: 0.5rem;">
        Create Account
    </button>
</form>

<script>
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = e.target.querySelector('.hq-btn-primary');
    
    // Show loading state
    btn.classList.add('hq-btn-loading');
    btn.disabled = true;
    
    try {
        // Your login logic here
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ /* your data */ })
        });
        
        if (response.ok) {
            // Success!
            window.location.href = '/dashboard';
        }
    } catch (error) {
        alert('Login failed');
    } finally {
        // Remove loading state
        btn.classList.remove('hq-btn-loading');
        btn.disabled = false;
    }
});
</script>
```

### Example 2: Confirmation Dialog

```html
<div class="modal">
    <h3>Delete Account?</h3>
    <p>This action cannot be undone.</p>
    
    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
        <button class="hq-btn hq-btn-ghost" onclick="closeModal()">
            Cancel
        </button>
        <button class="hq-btn hq-btn-danger" onclick="confirmDelete()">
            Delete Forever
        </button>
    </div>
</div>

<script>
function closeModal() {
    // Your modal close logic
}

async function confirmDelete() {
    const btn = event.target;
    
    btn.classList.add('hq-btn-loading');
    btn.disabled = true;
    
    try {
        await fetch('/api/delete-account', { method: 'DELETE' });
        alert('Account deleted');
    } catch (error) {
        alert('Failed to delete');
    } finally {
        btn.classList.remove('hq-btn-loading');
        btn.disabled = false;
    }
}
</script>
```

### Example 3: Toolbar Actions

```html
<div style="display: flex; gap: 0.5rem; padding: 1rem; background: #f5f5f5; border-radius: 0.5rem;">
    <!-- Icon buttons -->
    <button class="hq-btn hq-btn-ghost hq-btn-icon" title="Add">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
    </button>
    
    <button class="hq-btn hq-btn-ghost hq-btn-icon" title="Edit">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
        </svg>
    </button>
    
    <button class="hq-btn hq-btn-ghost hq-btn-icon" title="Delete">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
    </button>
</div>
```

---

## 🎨 Customization

### Change Colors

Override the CSS variables in your stylesheet:

```css
:root {
    --accent-primary: #3B6DFF;        /* Your primary brand color */
    --accent-success: #6EE7B7;        /* Success green */
    --accent-danger: #FF6B6B;         /* Danger red */
    --accent-warning: #FFA94D;        /* Warning orange */
}
```

### Adjust Sizes

Buttons use `clamp()` for fluid sizing. Modify the CSS file if you need custom sizes:

```css
.hq-btn-custom {
    font-size: clamp(1.5rem, 3vw, 2rem);
    padding: clamp(1.25rem, 3vw, 1.5rem) clamp(2.5rem, 6vw, 3rem);
}
```

### Add Custom Variants

Create your own semantic variants:

```css
.hq-btn-info {
    background: #38BDF8;
    color: rgba(0, 0, 0, 0.90);
}

.hq-btn-info:hover:not(:disabled) {
    background: #58CDF8;
    transform: translateY(-1px);
}
```

---

## 🎓 For Students: Wiring Your Own Logic

The button styles are **UI-only**. You add the functionality:

### Pattern 1: Click Handler

```javascript
document.querySelector('.hq-btn-primary').addEventListener('click', () => {
    console.log('Button clicked!');
    // Your logic here
});
```

### Pattern 2: Form Submission

```javascript
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = e.target.querySelector('[type="submit"]');
    
    // Show loading
    btn.classList.add('hq-btn-loading');
    btn.disabled = true;
    
    try {
        // Your async work
        await submitForm();
    } finally {
        // Hide loading
        btn.classList.remove('hq-btn-loading');
        btn.disabled = false;
    }
});
```

### Pattern 3: Dynamic State Changes

```javascript
const btn = document.querySelector('.hq-btn-primary');

// Change to success state
btn.classList.remove('hq-btn-primary');
btn.classList.add('hq-btn-success');
btn.textContent = 'Saved!';

// Change back after 2 seconds
setTimeout(() => {
    btn.classList.remove('hq-btn-success');
    btn.classList.add('hq-btn-primary');
    btn.textContent = 'Save';
}, 2000);
```

---

## 🌐 Framework Integration

### React

```jsx
function MyButton() {
    const [loading, setLoading] = useState(false);
    
    const handleClick = async () => {
        setLoading(true);
        try {
            await doSomething();
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <button 
            className={`hq-btn hq-btn-primary ${loading ? 'hq-btn-loading' : ''}`}
            disabled={loading}
            onClick={handleClick}
        >
            Save Changes
        </button>
    );
}
```

### Vue

```vue
<template>
    <button 
        :class="['hq-btn', 'hq-btn-primary', { 'hq-btn-loading': loading }]"
        :disabled="loading"
        @click="handleClick"
    >
        Save Changes
    </button>
</template>

<script>
export default {
    data() {
        return { loading: false };
    },
    methods: {
        async handleClick() {
            this.loading = true;
            try {
                await this.doSomething();
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>
```

---

## 🐛 Troubleshooting

### Buttons Look Unstyled

**Problem:** CSS file not loaded correctly.

**Solution:** Check your `<link>` tag path and ensure the CSS file exists at that location.

```html
<!-- Check this path -->
<link rel="stylesheet" href="css/buttons.css">
```

### Loading Spinner Not Showing

**Problem:** Forgot to add `.hq-btn-loading` class.

**Solution:** Add both the class AND disable the button:

```javascript
btn.classList.add('hq-btn-loading');
btn.disabled = true;
```

### Icons Not Sizing Correctly

**Problem:** Icon SVG needs proper viewBox attribute.

**Solution:** Use this template:

```html
<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <!-- path data -->
</svg>
```

---

## 📚 Next Steps

1. ✅ Open `index.html` to see all button variants
2. ✅ Check `demos/examples.html` for real-world patterns
3. ✅ Copy the CSS into your project
4. ✅ Build your own interactive features!

---

**Need help?** Check the [main README](../README.md) for more details.