// Authentication Service for HQ Asset Store
// Supports Firebase Auth + LocalStorage fallback simulation

import { auth, isFirebaseReady } from "./firebase-config.js";

const LOCAL_STORAGE_USER_KEY = "hq_asset_store_user";
const LOCAL_USERS_DB_KEY = "hq_asset_store_registered_users";

// Default guest state
let currentUser = null;
const listeners = [];
let _dropdownListenerAdded = false;

// Initialize Auth
async function initAuth() {
  if (isFirebaseReady && auth) {
    try {
      const { onAuthStateChanged } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
      onAuthStateChanged(auth, (user) => {
        if (user) {
          currentUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || user.email.split('@')[0],
            photoURL: user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.uid}`
          };
        } else {
          // Check local session
          loadLocalUser();
        }
        notifyListeners();
      });
      return;
    } catch (e) {
      console.warn("Firebase Auth listener failed, using local auth mode:", e);
    }
  }

  // Local fallback
  loadLocalUser();
  notifyListeners();
}

function loadLocalUser() {
  const saved = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
    } catch (e) {
      currentUser = null;
    }
  } else {
    currentUser = null;
  }
}

function notifyListeners() {
  listeners.forEach(cb => cb(currentUser));
  updateNavState();
}

export function onAuthChanged(callback) {
  listeners.push(callback);
  callback(currentUser);
}

export function getCurrentUser() {
  return currentUser;
}

export async function login(email, password) {
  if (isFirebaseReady && auth) {
    try {
      const { signInWithEmailAndPassword } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
      const cred = await signInWithEmailAndPassword(auth, email, password);
      currentUser = {
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: cred.user.displayName || email.split('@')[0],
        photoURL: cred.user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${cred.user.uid}`
      };
      notifyListeners();
      return { success: true, user: currentUser };
    } catch (err) {
      console.warn("Firebase login failed, trying local fallback:", err.message);
    }
  }

  // Fallback local auth simulation
  const registered = JSON.parse(localStorage.getItem(LOCAL_USERS_DB_KEY) || "[]");
  const existing = registered.find(u => u.email === email && u.password === password);
  
  // Allow demo credentials or registered user
  if (existing || email === "demo@antigravity.dev") {
    currentUser = {
      uid: existing ? existing.uid : "demo-kid-coder",
      email: email,
      displayName: existing ? existing.displayName : "Kid Creator",
      photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=kidcreator"
    };
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
    notifyListeners();
    return { success: true, user: currentUser };
  } else {
    // If not found in mock list, automatically register for seamless demo
    return register(email, password, email.split('@')[0]);
  }
}

export async function register(email, password, displayName) {
  if (isFirebaseReady && auth) {
    try {
      const { createUserWithEmailAndPassword, updateProfile } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        await updateProfile(cred.user, { displayName });
      }
      currentUser = {
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: displayName || email.split('@')[0],
        photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=${cred.user.uid}`
      };
      notifyListeners();
      return { success: true, user: currentUser };
    } catch (err) {
      console.warn("Firebase registration failed, using local fallback:", err.message);
    }
  }

  // Fallback local register
  const registered = JSON.parse(localStorage.getItem(LOCAL_USERS_DB_KEY) || "[]");
  const newUser = {
    uid: "user_" + Date.now(),
    email,
    password,
    displayName: displayName || email.split('@')[0],
    photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=${Date.now()}`
  };
  registered.push(newUser);
  localStorage.setItem(LOCAL_USERS_DB_KEY, JSON.stringify(registered));
  
  currentUser = {
    uid: newUser.uid,
    email: newUser.email,
    displayName: newUser.displayName,
    photoURL: newUser.photoURL
  };
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
  notifyListeners();
  return { success: true, user: currentUser };
}

export async function loginWithGoogle() {
  if (isFirebaseReady && auth) {
    try {
      const { signInWithPopup, GoogleAuthProvider } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      currentUser = {
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: cred.user.displayName,
        photoURL: cred.user.photoURL
      };
      notifyListeners();
      return { success: true, user: currentUser };
    } catch (e) {
      console.warn("Google popup failed, falling back to simulated Google sign-in:", e);
    }
  }

  // Simulated Google login
  currentUser = {
    uid: "google_" + Date.now(),
    email: "creator@gmail.com",
    displayName: "Google Creator",
    photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=google"
  };
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
  notifyListeners();
  return { success: true, user: currentUser };
}

export async function logout() {
  if (isFirebaseReady && auth) {
    try {
      const { signOut } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
      await signOut(auth);
    } catch (e) {
      console.warn("Firebase signout error:", e);
    }
  }
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  currentUser = null;
  notifyListeners();
  window.location.reload();
}

export function requireAuth(returnUrl = window.location.pathname) {
  if (!currentUser) {
    window.location.href = `auth.html?redirect=${encodeURIComponent(returnUrl)}`;
    return false;
  }
  return true;
}

// Automatically manages navbar avatar / login buttons using Navigation & Modal kits
export function updateNavState() {
  const authContainer = document.getElementById("nav-auth-container");
  if (!authContainer) return;

  if (currentUser) {
    authContainer.innerHTML = `
      <div style="position: relative; display: inline-block;">
        <button id="nav-user-btn" class="as-icon-btn" aria-label="Account" style="padding: 0.25rem;">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
        <div id="nav-user-menu" style="display: none; position: absolute; right: 0; top: calc(100% + 8px); min-width: 190px; background: #FFFFFF; border: 1px solid #E4E4E7; border-radius: 6px; padding: 0.5rem 0; box-shadow: 0 10px 25px rgba(0,0,0,0.1); z-index: 1000;">
          <div style="padding: 0.5rem 1rem; border-bottom: 1px solid #F4F4F5;">
            <div style="font-size: 0.8125rem; font-weight: 600; color: #18181B;">${currentUser.displayName}</div>
            <div style="font-size: 0.75rem; color: #71717A;">${currentUser.email}</div>
          </div>
          <a href="account.html" style="display: block; padding: 0.55rem 1rem; color: #27272A; text-decoration: none; font-size: 0.8125rem; font-weight: 500;">My Assets</a>
          <a href="publish.html" style="display: block; padding: 0.55rem 1rem; color: #27272A; text-decoration: none; font-size: 0.8125rem; font-weight: 500;">Sell Assets</a>
          <div style="height: 1px; background: #F4F4F5; margin: 0.35rem 0;"></div>
          <button id="nav-logout-btn" style="width: 100%; text-align: left; padding: 0.55rem 1rem; background: none; border: none; color: #DC2626; font-size: 0.8125rem; font-weight: 500; cursor: pointer;">Sign Out</button>
        </div>
      </div>
    `;

    const userBtn = document.getElementById("nav-user-btn");
    const userMenu = document.getElementById("nav-user-menu");
    const logoutBtn = document.getElementById("nav-logout-btn");

    if (userBtn && userMenu) {
      userBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
      });

      if (!_dropdownListenerAdded) {
        document.addEventListener("click", () => {
          const m = document.getElementById("nav-user-menu");
          if (m) m.style.display = "none";
        });
        _dropdownListenerAdded = true;
      }
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", logout);
    }
  } else {
    authContainer.innerHTML = `
      <div style="display: flex; gap: 0.75rem; align-items: center;">
        <a href="auth.html" style="color: #D4D4D8; font-size: 0.8125rem; font-weight: 600; text-decoration: none;">Sign In</a>
      </div>
    `;
  }
}

// Auto init on load
initAuth();

