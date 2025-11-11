import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2FJ30iQWvb8FroHjY4aipmTGUOZ3VQjk",
    authDomain: "ominta-aquarium.firebaseapp.com",
    projectId: "ominta-aquarium",
    storageBucket: "ominta-aquarium.firebasestorage.app",
    messagingSenderId: "670589535647",
    appId: "1:670589535647:web:5e6953c311fb9fadf969aa",
    measurementId: "G-HVST8ZZ8PH"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };