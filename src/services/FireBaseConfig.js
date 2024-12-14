// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCe5ypxxLFfm2tLZi6bb-kHGpla8xgqFo",
  authDomain: "balanceplus-44a51.firebaseapp.com",
  projectId: "balanceplus-44a51",
  storageBucket: "balanceplus-44a51.appspot.com", // Corrigido o domínio de storage
  messagingSenderId: "845979793930",
  appId: "1:845979793930:web:6304aee3935e8e82defdf3",
  measurementId: "G-X9Q33S5W87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional: if you need analytics
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Auth instance

export { app, analytics, db, auth };
