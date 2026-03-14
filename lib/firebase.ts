// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBccsJF9WcmEzQPiAF-8Cfw1ThY8HHHWso",
    authDomain: "yeti-dresden.firebaseapp.com",
    projectId: "yeti-dresden",
    storageBucket: "yeti-dresden.firebasestorage.app",
    messagingSenderId: "5223299706",
    appId: "1:5223299706:web:f50b651514e596c49e19c3",
    measurementId: "G-7ZZ9BJPPXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics conditionally (safely)
let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { app, analytics, db };
