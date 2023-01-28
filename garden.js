// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

import {
    doc,
    setDoc,
  } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy_tqUSARUIvaD9lyuJk4LZDwaa_zjC9Y",
  authDomain: "mudsock-hackathon.firebaseapp.com",
  projectId: "mudsock-hackathon",
  storageBucket: "mudsock-hackathon.appspot.com",
  messagingSenderId: "511083006715",
  appId: "1:511083006715:web:8ec4d98a6ea5fe0f9f7e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

