// Common UI Shell & Header for HandGun Asset Store
// Clean Asset Store Style with crisp SVG vector icons and #FF6000 signature accent

import { ICONS } from "./icons.js";
import { CATEGORIES } from "./data.js";
import { getCart, removeFromCart, getCartTotal, checkoutCart, updateCartBadge } from "./store.js";
import { updateNavState } from "./auth.js";

export function initCommonUI(activeCategory = 'all', activeNav = '') {
  renderHeader(activeCategory, activeNav);
  renderCategoryBar(activeCategory);
  renderCartDrawer();
  updateNavState();
  updateCartBadge();
  setupCartEvents();
}

function renderHeader(activeCategory, activeNav) {
  const header = document.getElementById("store-header");
  if (!header) return;

  header.className = "as-header";
  header.innerHTML = `
    <!-- Top Main Header Row -->
    <div class="as-nav-top">
      <a href="index.html" class="as-brand">
        ${ICONS.logo}
        <span>HandGun <span class="as-brand-tag">Asset Store</span></span>
      </a>

      <!-- Search Input with Blue Search Button -->
      <form id="store-search-form" class="as-search-wrap" onsubmit="event.preventDefault(); window.location.href='browse.html?q=' + encodeURIComponent(this.querySelector('input').value);">
        <input type="text" class="as-search-input" placeholder="Search for assets" />
        <button type="submit" class="as-search-btn" aria-label="Search">
          ${ICONS.search}
        </button>
      </form>

      <!-- Right Action Icons -->
      <div class="as-nav-actions">
        <button id="store-cart-btn" class="as-icon-btn" aria-label="Cart" title="Shopping Cart">
          ${ICONS.cart}
          <span id="nav-cart-badge" class="as-cart-badge" style="display: none;">0</span>
        </button>

        <a href="browse.html" class="as-icon-btn" aria-label="Browse Grid" title="Browse Catalog">
          ${ICONS.grid}
        </a>

        <div id="nav-auth-container"></div>
      </div>
    </div>

    <!-- Secondary Links Subnav Bar -->
    <div class="as-subnav">
      <div class="as-subnav-links">
        <a href="browse.html?category=3d" class="as-subnav-link ${activeCategory === '3d' ? 'active' : ''}">3D</a>
        <a href="browse.html?category=2d" class="as-subnav-link ${activeCategory === '2d' ? 'active' : ''}">2D</a>
        <a href="browse.html?category=audio" class="as-subnav-link ${activeCategory === 'audio' ? 'active' : ''}">Audio</a>
        <a href="browse.html?category=tools" class="as-subnav-link ${activeCategory === 'tools' ? 'active' : ''}">Tools</a>
        <a href="browse.html?category=vfx" class="as-subnav-link ${activeCategory === 'vfx' ? 'active' : ''}">VFX</a>
        <a href="browse.html?category=templates" class="as-subnav-link ${activeCategory === 'templates' ? 'active' : ''}">Templates</a>
        <a href="browse.html?category=tools" class="as-subnav-link">SDKs</a>
        <a href="browse.html?sale=true" class="as-subnav-link sale">Sale</a>
      </div>

      <div class="as-subnav-extra">
        <a href="browse.html">Hire an artist</a>
        <a href="publish.html" style="color: #FFFFFF; font-weight: 600;">Sell Assets</a>
      </div>
    </div>
  `;
}

function renderCategoryBar(activeCategory) {
  const container = document.getElementById("store-subnav");
  if (!container) return;

  container.className = "as-category-bar";
  container.innerHTML = `
    <div class="as-category-bar-inner">
      ${CATEGORIES.map(cat => `
        <a href="browse.html?category=${cat.id}" class="as-pill-btn ${activeCategory === cat.id ? 'active' : ''}">
          ${ICONS[cat.iconKey] || ICONS.cube}
          <span>${cat.label}</span>
        </a>
      `).join('')}
      <a href="browse.html?category=tools" class="as-pill-btn">
        ${ICONS.cpu}
        <span>AI Tools</span>
      </a>
    </div>
  `;
}

function renderCartDrawer() {
  let drawer = document.getElementById("store-cart-drawer");
  if (!drawer) {
    drawer = document.createElement("div");
    drawer.id = "store-cart-drawer";
    drawer.className = "as-drawer";
    document.body.appendChild(drawer);
  }

  let backdrop = document.getElementById("store-cart-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "store-cart-backdrop";
    backdrop.className = "as-backdrop";
    document.body.appendChild(backdrop);
  }

  updateCartDrawerContent();
}

export function updateCartDrawerContent() {
  const drawer = document.getElementById("store-cart-drawer");
  if (!drawer) return;

  const cart = getCart();
  const total = getCartTotal();

  drawer.innerHTML = `
    <div style="padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--as-border); display: flex; align-items: center; justify-content: space-between;">
      <h3 style="margin: 0; font-size: 1.05rem; font-weight: 700; color: var(--as-text-primary);">
        Shopping Cart (${cart.length})
      </h3>
      <button id="cart-close-btn" class="as-btn as-btn-outline as-btn-sm" style="border: none; font-size: 1.1rem; padding: 0.2rem 0.5rem; color: var(--as-text-secondary);">✕</button>
    </div>

    <div style="flex: 1; overflow-y: auto; padding: 1.25rem 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
      ${cart.length === 0 ? `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--as-text-muted);">
          <div style="width: 44px; height: 44px; margin: 0 auto 1rem; color: #D4D4D8;">${ICONS.cart}</div>
          <p style="font-weight: 600; color: var(--as-text-primary); margin-bottom: 0.35rem;">Your cart is empty</p>
          <p style="font-size: 0.8125rem;">Browse thousands of Unity & indie game assets.</p>
          <a href="browse.html" class="as-btn as-btn-primary as-btn-sm" style="margin-top: 1rem;">Explore Store</a>
        </div>
      ` : cart.map(item => `
        <div style="display: flex; gap: 0.85rem; align-items: center; border: 1px solid var(--as-border); padding: 0.75rem; border-radius: var(--as-radius);">
          <img src="${item.image}" alt="${item.title}" style="width: 64px; height: 38px; object-fit: cover; border-radius: 4px;" />
          <div style="flex: 1; min-width: 0;">
            <div style="font-size: 0.8125rem; font-weight: 600; color: var(--as-text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.title}</div>
            <div style="font-size: 0.75rem; color: var(--as-text-muted);">${item.categoryLabel}</div>
            <div style="font-family: var(--as-font-mono); font-weight: 700; color: var(--as-text-primary); font-size: 0.8125rem; margin-top: 0.2rem;">$${item.price.toFixed(2)}</div>
          </div>
          <button class="cart-remove-item-btn as-icon-btn" data-id="${item.id}" style="color: var(--as-danger); padding: 0.3rem;" title="Remove">
            ${ICONS.trash}
          </button>
        </div>
      `).join('')}
    </div>

    ${cart.length > 0 ? `
      <div style="padding: 1.25rem 1.5rem; border-top: 1px solid var(--as-border); background: var(--as-bg-subtle);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <span style="color: var(--as-text-secondary); font-size: 0.875rem;">Subtotal</span>
          <span style="font-family: var(--as-font-mono); font-weight: 800; font-size: 1.15rem; color: var(--as-text-primary);">$${total.toFixed(2)}</span>
        </div>
        <button id="cart-checkout-btn" class="as-btn as-btn-primary" style="width: 100%; padding: 0.75rem; font-size: 0.9375rem;">Proceed to Checkout</button>
      </div>
    ` : ''}
  `;

  const closeBtn = document.getElementById("cart-close-btn");
  if (closeBtn) closeBtn.onclick = closeCartDrawer;

  drawer.querySelectorAll(".cart-remove-item-btn").forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute("data-id");
      removeFromCart(id);
      updateCartDrawerContent();
    };
  });

  const checkoutBtn = document.getElementById("cart-checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      const ok = checkoutCart();
      if (ok) {
        closeCartDrawer();
        setTimeout(() => {
          window.location.href = "account.html";
        }, 1000);
      }
    };
  }
}

export function openCartDrawer() {
  const drawer = document.getElementById("store-cart-drawer");
  const backdrop = document.getElementById("store-cart-backdrop");
  updateCartDrawerContent();
  if (drawer) drawer.classList.add("open");
  if (backdrop) backdrop.classList.add("open");
}

export function closeCartDrawer() {
  const drawer = document.getElementById("store-cart-drawer");
  const backdrop = document.getElementById("store-cart-backdrop");
  if (drawer) drawer.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
}

function setupCartEvents() {
  const cartBtn = document.getElementById("store-cart-btn");
  const backdrop = document.getElementById("store-cart-backdrop");

  if (cartBtn) cartBtn.onclick = openCartDrawer;
  if (backdrop) backdrop.onclick = closeCartDrawer;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCartDrawer();
  });
}
