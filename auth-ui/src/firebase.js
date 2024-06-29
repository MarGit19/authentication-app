// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-1a89a.firebaseapp.com",
  projectId: "auth-app-1a89a",
  storageBucket: "auth-app-1a89a.appspot.com",
  messagingSenderId: "178457461929",
  appId: "1:178457461929:web:5e7d7d3265a947214a55b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);