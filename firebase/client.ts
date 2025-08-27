// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyB2S1S7UpnzXrBoMzL0K9VtE2Dl0m-uunI",
    authDomain: "prepwise-233d9.firebaseapp.com",
    projectId: "prepwise-233d9",
    storageBucket: "prepwise-233d9.firebasestorage.app",
    messagingSenderId: "943066134926",
    appId: "1:943066134926:web:b51904495497cd13820cdf",
    measurementId: "G-N3WCSLFWK3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);