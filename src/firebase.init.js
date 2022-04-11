// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuoaeC6U10itxHrzDj9YOPwNIE1wg5oco",
  authDomain: "ema-jon-simple-337b1.firebaseapp.com",
  projectId: "ema-jon-simple-337b1",
  storageBucket: "ema-jon-simple-337b1.appspot.com",
  messagingSenderId: "577346749778",
  appId: "1:577346749778:web:ee78dc2a9a6d98a09f268b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
