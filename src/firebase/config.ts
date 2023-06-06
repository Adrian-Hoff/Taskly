// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO928S180ZTg9ksEy59mrVy6OqOoqs0Gc",
  authDomain: "taskly-3a0fe.firebaseapp.com",
  projectId: "taskly-3a0fe",
  storageBucket: "taskly-3a0fe.appspot.com",
  messagingSenderId: "660949759246",
  appId: "1:660949759246:web:4802d48838728e2d45535f",
  measurementId: "G-9S4DSKV9YK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
