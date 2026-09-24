// Common UI Shell & Header for HandGun Asset Store
// Clean Asset Store Style with crisp SVG vector icons and #FF6000 signature accent

import { ICONS } from "./icons.js";
import { CATEGORIES } from "./data.js";
import { getCart, removeFromCart, getCartTotal, checkoutCart, updateCartBadge, findAsset, addToCart, getAllStoreAssets } from "./store.js";
import { updateNavState } from "./auth.js";

export function initCommonUI(activeCategory = 'all', activeNav = '') {
  renderHeader(activeCategory, activeNav);
  renderCategoryBar(activeCategory);
  renderCartDrawer();
  updateNavState();
  updateCartBadge();
  setupCartEvents();
  setupScrollReveal();
  setupAddToCartLoading();
  setupSearchAutocomplete();
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
        <input type="text" id="as-search-input" class="as-search-input" placeholder="Search for assets" autocomplete="off" />
        <button type="submit" class="as-search-btn" aria-label="Search">
          ${ICONS.search}
        </button>
        <div id="as-search-dropdown" class="hq-glass-card as-search-dropdown" style="display: none;"></div>
      </form>

      <!-- Right Action Icons -->
      <div class="as-nav-actions">
        <div class="as-tooltip-wrap">
          <button id="store-cart-btn" class="as-icon-btn" aria-label="Cart">
            ${ICONS.cart}
            <span id="nav-cart-badge" class="as-cart-badge" style="display: none;">0</span>
          </button>
          <span class="as-tooltip">Shopping Cart</span>
        </div>

        <div class="as-tooltip-wrap">
          <a href="browse.html" class="as-icon-btn" aria-label="Browse Grid">
            ${ICONS.grid}
          </a>
          <span class="as-tooltip">Browse Catalog</span>
        </div>

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
    if (e.key === "Escape") {
      closeCartDrawer();
      closeQuickView();
    }
  });

  document.addEventListener("click", (e) => {
    const qvBtn = e.target.closest(".as-quickview-btn");
    if (qvBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = qvBtn.getAttribute("data-id");
      openQuickView(id);
    }
  });
}

export function openQuickView(assetId) {
  const asset = findAsset(assetId);
  if (!asset) return;

  let modalBackdrop = document.getElementById("as-quickview-backdrop");
  if (!modalBackdrop) {
    modalBackdrop = document.createElement("div");
    modalBackdrop.id = "as-quickview-backdrop";
    modalBackdrop.className = "hq-modal-backdrop";
    modalBackdrop.style.display = "none";
    modalBackdrop.style.zIndex = "10000";
    modalBackdrop.innerHTML = `
      <div id="as-quickview-modal" class="hq-glass-modal-content hq-scale-up" style="max-width: 680px; width: 92%; padding: 1.75rem; position: relative; max-height: 90vh; overflow-y: auto; background: rgba(18, 20, 29, 0.96); border: 1px solid rgba(255,255,255,0.18); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8); border-radius: 16px;">
        <button id="as-quickview-close" aria-label="Close" style="position: absolute; top: 1rem; right: 1rem; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); color: #fff; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1rem; transition: all 0.2s;">✕</button>
        <div id="as-quickview-body"></div>
      </div>
    `;
    document.body.appendChild(modalBackdrop);

    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeQuickView();
    });
    document.getElementById("as-quickview-close").onclick = closeQuickView;
  }

  const fullStars = Math.floor(asset.rating || 5);
  const starsStr = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);

  const body = document.getElementById("as-quickview-body");
  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start;">
      <div>
        <div style="position: relative; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
          <img src="${asset.image}" alt="${asset.title}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block;" />
          ${asset.category === '3d' ? `<span class="as-card-tag" style="position: absolute; top: 0.5rem; left: 0.5rem;">3D</span>` : ''}
          ${asset.isSale ? `<span class="as-discount-badge as-pulse-badge" style="position: absolute; top: 0.5rem; right: 0.5rem;">${asset.discount || '-50%'}</span>` : ''}
        </div>
        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.75rem; color: rgba(255,255,255,0.7);">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.35rem;">
            <span>Category:</span>
            <span style="color: #fff; font-weight: 600;">${asset.categoryLabel}</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.35rem;">
            <span>Publisher:</span>
            <span style="color: #fff; font-weight: 600;">${asset.publisher}</span>
          </div>
          <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.35rem;">
            <span>File Size:</span>
            <span style="color: #fff; font-weight: 600;">${asset.fileSize || '142 MB'}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>Compatibility:</span>
            <span style="color: #fff; font-weight: 600;">${asset.supportedEngines || 'Unity 2022+ / Unreal 5'}</span>
          </div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; height: 100%;">
        <h2 style="font-size: 1.25rem; font-weight: 700; color: #FFFFFF; margin: 0 0 0.5rem; line-height: 1.3;">
          ${asset.title}
        </h2>
        
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; font-size: 0.8125rem;">
          <span class="as-stars" style="color: #F59E0B;">${starsStr}</span>
          <span style="font-weight: 600; color: #FFFFFF;">${asset.rating}</span>
          <span style="color: rgba(255,255,255,0.5);">(${asset.reviewsCount || 0} reviews)</span>
        </div>

        <p style="font-size: 0.8125rem; line-height: 1.6; color: rgba(255,255,255,0.75); margin-bottom: 1.25rem; flex: 1;">
          ${asset.description || 'Production-ready game development asset with complete materials, LODs, and documentation.'}
        </p>

        <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 0.85rem 1rem; margin-bottom: 1rem;">
          <div style="display: flex; align-items: baseline; gap: 0.5rem;">
            <span style="font-family: var(--as-font-mono); font-size: 1.4rem; font-weight: 800; color: #FFFFFF;">$${asset.price.toFixed(2)}</span>
            ${asset.originalPrice ? `<span style="font-family: var(--as-font-mono); font-size: 0.875rem; text-decoration: line-through; color: rgba(255,255,255,0.4);">$${asset.originalPrice.toFixed(2)}</span>` : ''}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <button id="as-qv-add-cart" class="hq-glass-modal-btn hq-glass-modal-btn-primary" style="width: 100%; cursor: pointer; padding: 0.65rem;">
            Add to Cart
          </button>
          <a href="asset.html?id=${asset.id}" class="hq-btn hq-btn-outline" style="text-align: center; text-decoration: none; padding: 0.55rem; border-color: rgba(255,255,255,0.2); color: #fff; font-size: 0.8125rem; border-radius: 8px;">
            View Full Asset Details &rarr;
          </a>
        </div>
      </div>
    </div>
  `;

  document.getElementById("as-qv-add-cart").onclick = () => {
    addToCart(asset.id);
    closeQuickView();
  };

  modalBackdrop.style.display = "flex";
}

export function closeQuickView() {
  const modalBackdrop = document.getElementById("as-quickview-backdrop");
  if (modalBackdrop) modalBackdrop.style.display = "none";
}

// Scroll Reveal — animations kit utility
// Observes .as-reveal elements and adds .visible when they enter the viewport
function setupScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything
    document.querySelectorAll('.as-reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.as-reveal').forEach(el => observer.observe(el));
}

// Add-to-cart loading spinner — buttons kit hq-btn-loading pattern
function setupAddToCartLoading() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-cart-btn');
    if (!btn || btn.classList.contains('is-loading')) return;

    // Show spinner briefly before the cart logic processes
    btn.classList.add('is-loading');
    setTimeout(() => {
      btn.classList.remove('is-loading');
    }, 600);
  }, true); // capture phase to run before other handlers
}

function setupSearchAutocomplete() {
  const input = document.getElementById("as-search-input");
  const dropdown = document.getElementById("as-search-dropdown");
  if (!input || !dropdown) return;

  const allAssets = getAllStoreAssets();

  input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 1) {
      dropdown.style.display = "none";
      return;
    }

    const matches = allAssets.filter(a => 
      a.title.toLowerCase().includes(query) || 
      a.categoryLabel.toLowerCase().includes(query)
    ).slice(0, 5); // show up to 5 matches

    if (matches.length === 0) {
      dropdown.innerHTML = `<div style="padding: 1rem; color: var(--as-text-muted); font-size: 0.8125rem; text-align: center;">No assets found for "${query}"</div>`;
      dropdown.style.display = "block";
      return;
    }

    dropdown.innerHTML = matches.map(asset => `
      <a href="asset.html?id=${asset.id}" class="as-search-result-item">
        <img src="${asset.image}" alt="${asset.title}" class="as-search-result-img" />
        <div class="as-search-result-info">
          <div class="as-search-result-title">${asset.title}</div>
          <div class="as-search-result-meta">
            <span class="as-search-result-cat">${asset.categoryLabel}</span>
            <span class="as-search-result-price" style="color: var(--as-primary); font-weight: 700;">${asset.price === 0 ? 'Free' : '$' + asset.price.toFixed(2)}</span>
          </div>
        </div>
      </a>
    `).join('');
    
    dropdown.style.display = "block";
  });

  // Hide when clicking outside
  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // Re-show on focus if there's text
  input.addEventListener("focus", () => {
    if (input.value.trim().length > 0) {
      input.dispatchEvent(new Event('input'));
    }
  });
}

