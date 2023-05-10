import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBGl20jGlr8MtnXBwY5W4fMpiYwj3ciCWI",
  authDomain: "blog-8257a.firebaseapp.com",
  projectId: "blog-8257a",
  storageBucket: "blog-8257a.appspot.com",
  messagingSenderId: "1030423774775",
  appId: "1:1030423774775:web:e6c75007146c71db9ee1b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);


// A Firebase App is a container-like object that stores common configuration and
// shares authentication across Firebase services. 
// After you initialize a Firebase App object in your code, 
// you can add and start using Firebase services

// Firebase services (like Cloud Firestore, Authentication, 
// Realtime Database, Remote Config, and more)
// are available to import within individual sub-packages.