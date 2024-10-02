// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8enww4Mwo4NQXU1AEts8WewT8dbZeXIw",
  authDomain: "growing-in-faith-a1582.firebaseapp.com",
  projectId: "growing-in-faith-a1582",
  storageBucket: "growing-in-faith-a1582.appspot.com",
  messagingSenderId: "12637438534",
  appId: "1:12637438534:web:e149aba57ef2a347074047",
  measurementId: "G-ZD49ZHL5P0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
