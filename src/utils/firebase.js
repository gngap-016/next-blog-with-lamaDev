// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-402107.firebaseapp.com",
  projectId: "next-blog-402107",
  storageBucket: "next-blog-402107.appspot.com",
  messagingSenderId: "245739185256",
  appId: "1:245739185256:web:de529565f2ade5a4d3c7dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);