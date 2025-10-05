

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, push, set, get, child } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd-9p5gqz6SzmmzVq6SqbJ0gXmsNpUUTQ",
  authDomain: "happy-birthday-2deb4.firebaseapp.com",
  databaseURL: "https://happy-birthday-2deb4-default-rtdb.firebaseio.com",
  projectId: "happy-birthday-2deb4",
  storageBucket: "happy-birthday-2deb4.firebasestorage.app",
  messagingSenderId: "657496676319",
  appId: "1:657496676319:web:956a472024be794df5566a",
  measurementId: "G-01ZN71CQDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, get, child };
