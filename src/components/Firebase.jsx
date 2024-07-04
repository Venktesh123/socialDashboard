// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgfFgd_dE7lzmYYrAsHrUGxp0ciFnjai8",
    authDomain: "socialinvestment-e565e.firebaseapp.com",
    projectId: "socialinvestment-e565e",
    storageBucket: "socialinvestment-e565e.appspot.com",
    messagingSenderId: "497422380066",
    appId: "1:497422380066:web:ed2bd3a193a160419f2e7b",
    measurementId: "G-6E4F6S6VYD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDgfFgd_dE7lzmYYrAsHrUGxp0ciFnjai8",
//   authDomain: "socialinvestment-e565e.firebaseapp.com",
//   projectId: "socialinvestment-e565e",
//   storageBucket: "socialinvestment-e565e.appspot.com",
//   messagingSenderId: "497422380066",
//   appId: "1:497422380066:web:ed2bd3a193a160419f2e7b",
//   measurementId: "G-6E4F6S6VYD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
