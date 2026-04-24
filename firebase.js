// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcyGJXC0BcacAlOFeSzaXsWF0GWukQLcc",
  authDomain: "thinktrack-5e29b.firebaseapp.com",
  projectId: "thinktrack-5e29b",
  storageBucket: "thinktrack-5e29b.firebasestorage.app",
  messagingSenderId: "351628640479",
  appId: "1:351628640479:web:6ed3b4788d06238880a96a",
  measurementId: "G-3HRJLJGMPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);