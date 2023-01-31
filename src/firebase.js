// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVFLUPwEFmR4qPaFDKcBCjO5LxzmxceeA",
  authDomain: "r-reservations-e2e47.firebaseapp.com",
  projectId: "r-reservations-e2e47",
  storageBucket: "r-reservations-e2e47.appspot.com",
  messagingSenderId: "303725223826",
  appId: "1:303725223826:web:0483ae9cb39d76456beb4b",
  measurementId: "G-NREQ3PMFS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
