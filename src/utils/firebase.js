// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpacHyWV7HN0L9tDNYttkBTzGfl7lD96U",
  authDomain: "netflixgpt-4a37d.firebaseapp.com",
  projectId: "netflixgpt-4a37d",
  storageBucket: "netflixgpt-4a37d.appspot.com",
  messagingSenderId: "63855569666",
  appId: "1:63855569666:web:9e77adfebe16c64d4db01b",
  measurementId: "G-SR25C7QBMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
