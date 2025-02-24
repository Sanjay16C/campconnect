// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDov4LXnpuEi9wJc8rYprGftj5UaZpb1O4",
  authDomain: "campconnect-b28e0.firebaseapp.com",
  projectId: "campconnect-b28e0",
  storageBucket: "campconnect-b28e0.firebasestorage.app",
  messagingSenderId: "698394573741",
  appId: "1:698394573741:web:b7ff894ebcf2e20d1f3f24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Firebase Firestore
export const db = getFirestore(app);

export default app;
