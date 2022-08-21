import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQaCd0F0dc2EYl-lwGrnQepCij9HoAeSg",
  authDomain: "first-react-project-70179.firebaseapp.com",
  projectId: "first-react-project-70179",
  storageBucket: "first-react-project-70179.appspot.com",
  messagingSenderId: "221665358080",
  appId: "1:221665358080:web:8e1f714bd4ee71aa8bc3e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)