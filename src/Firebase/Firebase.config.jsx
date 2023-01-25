// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1bLQxiGpEaDdfhxLiSlWNZIGAVnQ2Ejg",
  authDomain: "repliq-e-commerce.firebaseapp.com",
  projectId: "repliq-e-commerce",
  storageBucket: "repliq-e-commerce.appspot.com",
  messagingSenderId: "819553708270",
  appId: "1:819553708270:web:7589dc3b6089214b79ebff",
  measurementId: "G-XZX3L70T8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
