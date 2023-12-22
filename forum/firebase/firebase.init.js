import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ObwIruaYqjANP-6B6PqyQ-wY6KrF370",
  authDomain: "dahuk-forum.firebaseapp.com",
  projectId: "dahuk-forum",
  storageBucket: "dahuk-forum.appspot.com",
  messagingSenderId: "368191935800",
  appId: "1:368191935800:web:85babaf10e44f310be1dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)