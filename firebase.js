// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAggJEEI1b_mgfPJYUR7hQTda5CU-qO3kI",
  authDomain: "inventory-management-ca27a.firebaseapp.com",
  projectId: "inventory-management-ca27a",
  storageBucket: "inventory-management-ca27a.appspot.com",
  messagingSenderId: "372983102374",
  appId: "1:372983102374:web:d43c64ee418f4cfea3ad67",
  measurementId: "G-9ZKNNDZLZW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}