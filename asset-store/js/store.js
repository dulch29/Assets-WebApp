// Store State & Cart Management for HQ Asset Store
// Supports Cart, Wishlist, Purchases, User-Published Listings, and Modal Kit Toasts

import { getAssetById, MOCK_ASSETS } from "./data.js";
import { getCurrentUser } from "./auth.js";

const CART_KEY = "hq_asset_store_cart";
const WISHLIST_KEY = "hq_asset_store_wishlist";
const PURCHASES_KEY = "hq_asset_store_purchases";
const CUSTOM_LISTINGS_KEY = "hq_asset_store_custom_listings";

// Get all active listings (MOCK_ASSETS + custom user published assets)
export function getAllStoreAssets() {
  const customListings = getCustomListings();
  return [...customListings, ...MOCK_ASSETS];
}

export function findAsset(id) {
  const all = getAllStoreAssets();
  return all.find(a => a.id === id) || null;
}

// Custom Listings
export function getCustomListings() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_LISTINGS_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

export function saveListing(assetData) {
  const listings = getCustomListings();
  const user = getCurrentUser();
  const newAsset = {
    ...assetData,
    id: "user-asset-" + Date.now(),
    publisher: user ? user.displayName : "Community Creator",
    publisherAvatar: "DEV",
    rating: 5.0,
    reviewsCount: 1,
    releaseDate: "Just now",
    isSale: false,
    isFeatured: true
  };
  listings.unshift(newAsset);
  localStorage.setItem(CUSTOM_LISTINGS_KEY, JSON.stringify(listings));
  showToast(`"${newAsset.title}" published successfully!`, "success");
  return newAsset;
}

export function deleteListing(id) {
  let listings = getCustomListings();
  listings = listings.filter(item => item.id !== id);
  localStorage.setItem(CUSTOM_LISTINGS_KEY, JSON.stringify(listings));
  showToast("Listing deleted.", "info");
}

// Cart Management
export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

export function addToCart(assetId) {
  const cart = getCart();
  const asset = findAsset(assetId);
  if (!asset) return false;

  if (cart.some(item => item.id === assetId)) {
    showToast(`"${asset.title}" is already in your cart!`, "info");
    return false;
  }

  cart.push(asset);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
  showToast(`Added "${asset.title}" to cart!`, "success");
  return true;
}

export function removeFromCart(assetId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== assetId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
  showToast("Item removed from cart.", "info");
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

export function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price || 0), 0);
}

export function updateCartBadge() {
  const badge = document.getElementById("nav-cart-badge");
  if (!badge) return;
  const count = getCart().length;
  badge.textContent = count;
  badge.style.display = count > 0 ? "inline-flex" : "none";
}

// Wishlist
export function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

export function isInWishlist(assetId) {
  return getWishlist().includes(assetId);
}

export function toggleWishlist(assetId) {
  let wishlist = getWishlist();
  const asset = findAsset(assetId);
  if (wishlist.includes(assetId)) {
    wishlist = wishlist.filter(id => id !== assetId);
    showToast(`Removed "${asset?.title || 'item'}" from wishlist.`, "info");
  } else {
    wishlist.push(assetId);
    showToast(`Added "${asset?.title || 'item'}" to wishlist!`, "success");
  }
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  return wishlist.includes(assetId);
}

// Purchases
export function getPurchasedAssets() {
  try {
    return JSON.parse(localStorage.getItem(PURCHASES_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

export function checkoutCart() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return false;
  }

  const existingPurchases = getPurchasedAssets();
  const newPurchases = [...existingPurchases];

  cart.forEach(item => {
    if (!newPurchases.some(p => p.id === item.id)) {
      newPurchases.unshift({
        ...item,
        purchaseDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        orderId: "ORD-" + Math.floor(100000 + Math.random() * 900000)
      });
    }
  });

  localStorage.setItem(PURCHASES_KEY, JSON.stringify(newPurchases));
  clearCart();
  showToast("Order confirmed. Assets added to your library.", "success");
  return true;
}

// Toast Notifications (Clean Professional Style)
export function showToast(message, type = "success") {
  let container = document.getElementById("as-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "as-toast-container";
    container.style.position = "fixed";
    container.style.bottom = "1.5rem";
    container.style.right = "1.5rem";
    container.style.zIndex = "99999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.5rem";
    container.style.pointerEvents = "none";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.style.pointerEvents = "auto";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "0.6rem";
  toast.style.padding = "0.75rem 1rem";
  toast.style.borderRadius = "6px";
  toast.style.background = "#18181B";
  toast.style.border = "1px solid #27272A";
  toast.style.color = "#FFFFFF";
  toast.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
  toast.style.fontSize = "0.8125rem";
  toast.style.fontWeight = "500";
  toast.style.fontFamily = "var(--as-font, sans-serif)";

  const iconSvg = type === "error" 
    ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#EF4444" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
    : `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10B981" stroke-width="2.2"><path d="M20 6 9 17l-5-5"></path></svg>`;

  toast.innerHTML = `
    <span>${iconSvg}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Initial cart badge update
if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
  });
}
