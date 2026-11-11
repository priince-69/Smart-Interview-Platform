// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-3c5a5.firebaseapp.com",
  projectId: "interviewiq-3c5a5",
  storageBucket: "interviewiq-3c5a5.firebasestorage.app",
  messagingSenderId: "483681190350",
  appId: "1:483681190350:web:f8c5d2024e7f8ee786ab9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}