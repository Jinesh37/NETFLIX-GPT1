// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWY7yI6jX2xpi_KwdPUtdFbhMKyZWGhNI",
  authDomain: "netflix-gpt-1df44.firebaseapp.com",
  projectId: "netflix-gpt-1df44",
  storageBucket: "netflix-gpt-1df44.appspot.com",
  messagingSenderId: "52243802629",
  appId: "1:52243802629:web:07488d377e6b527da00a6c",
  measurementId: "G-1Z1ZRKJG4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth();
console.log(auth);