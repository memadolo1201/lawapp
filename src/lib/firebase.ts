import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKGUysCWTezvbf8ODDVFWhBMbX6xNheTw",
  authDomain: "lawapp-ce0d0.firebaseapp.com",
  projectId: "lawapp-ce0d0",
  storageBucket: "lawapp-ce0d0.firebasestorage.app",
  messagingSenderId: "991192086384",
  appId: "1:991192086384:web:98a88d038f8b55516981b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
