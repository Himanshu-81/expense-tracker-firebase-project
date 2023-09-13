// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwlbN3HTLcRir2qfzFbqtRNn854m70WuA",
  authDomain: "expense-tracker-dd5cb.firebaseapp.com",
  projectId: "expense-tracker-dd5cb",
  storageBucket: "expense-tracker-dd5cb.appspot.com",
  messagingSenderId: "876255745266",
  appId: "1:876255745266:web:e4d87dfdbfb32cb5e7ec6b",
  measurementId: "G-H3NCKZJN7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)