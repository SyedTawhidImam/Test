// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYFpNNP_rWpDVEP-g4Wcs-kqLFvE198GE",
  authDomain: "crud-operation-practice.firebaseapp.com",
  projectId: "crud-operation-practice",
  storageBucket: "crud-operation-practice.appspot.com",
  messagingSenderId: "920346678651",
  appId: "1:920346678651:web:fc737e3a724a4b11e619de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)