// Firebase Configuration & Initialization
// Project: HQ Asset Store (hq-assets-store-9a4f2)

export const firebaseConfig = {
  apiKey: "AIzaSyDgLTjdUQhRIklAqxmZq0XlyEnueLds_S0",
  authDomain: "hq-assets-store-9a4f2.firebaseapp.com",
  projectId: "hq-assets-store-9a4f2",
  storageBucket: "hq-assets-store-9a4f2.firebasestorage.app",
  messagingSenderId: "236547666167",
  appId: "1:236547666167:web:44f49a630f824b32c3e3f2"
};

// Check if Firebase is available or offline
export let app = null;
export let auth = null;
export let db = null;
export let isFirebaseReady = false;

try {
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
  const { getAuth } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
  const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  isFirebaseReady = true;
  console.log("🔥 Firebase initialized successfully for HQ Asset Store");
} catch (err) {
  console.warn("⚠️ Firebase live connection not active or offline. Falling back to local state mode:", err.message);
  isFirebaseReady = false;
}
