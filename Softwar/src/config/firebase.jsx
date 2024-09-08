// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf8anEqP0qVlMAeBP_Fpx8hXxHmlTnbCg",
    authDomain: "reactauth-7e17f.firebaseapp.com",
    projectId: "reactauth-7e17f",
    storageBucket: "reactauth-7e17f.appspot.com",
    messagingSenderId: "554632547459",
    appId: "1:554632547459:web:2245be05aeb800b8a11fb6"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };