// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzDKMJdPFFmH8fIn17ckrFBezsQD8B5J4",
  authDomain: "react-auth-3ea5c.firebaseapp.com",
  projectId: "react-auth-3ea5c",
  storageBucket: "react-auth-3ea5c.appspot.com",
  messagingSenderId: "352335017361",
  appId: "1:352335017361:web:6a39ab4101dd5bbc631630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export  {auth,database};
