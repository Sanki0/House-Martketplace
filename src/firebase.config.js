// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3JdaEA3VrJki0hBWjRlbd1kUToTl1XKM",
  authDomain: "house-marketplace-4eb3f.firebaseapp.com",
  projectId: "house-marketplace-4eb3f",
  storageBucket: "house-marketplace-4eb3f.appspot.com",
  messagingSenderId: "62474788461",
  appId: "1:62474788461:web:d8eb394a29bb07c3ec2964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore() 