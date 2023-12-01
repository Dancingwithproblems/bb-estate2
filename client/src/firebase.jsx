// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9b877.firebaseapp.com",
  projectId: "mern-estate-9b877",
  storageBucket: "mern-estate-9b877.appspot.com",
  messagingSenderId: "108524591239",
  appId: "1:108524591239:web:436ccd068acd62eb494022"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);