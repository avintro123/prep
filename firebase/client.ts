// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQIGOjkmkboSGRL2_9LSy492pp-aVOIQ",
  authDomain: "interai-15955.firebaseapp.com",
  projectId: "interai-15955",
  storageBucket: "interai-15955.firebasestorage.app",
  messagingSenderId: "944302980086",
  appId: "1:944302980086:web:6704c6ffe463e153b065d7",
  measurementId: "G-260Q1H0M2Y",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
