// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDov4LXnpuEi9wJc8rYprGftj5UaZpb1O4",
  authDomain: "campconnect-b28e0.firebaseapp.com",
  projectId: "campconnect-b28e0",
  storageBucket: "campconnect-b28e0.appspot.com",
  messagingSenderId: "698394573741",
  appId: "1:698394573741:web:b7ff894ebcf2e20d1f3f24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

export default app;
