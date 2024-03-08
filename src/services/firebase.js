// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj7WjUYnEC9lTHO-XUrHChAAYCGJojvks",
  authDomain: "technova2k24-f0957.firebaseapp.com",
  projectId: "technova2k24-f0957",
  storageBucket: "technova2k24-f0957.appspot.com",
  messagingSenderId: "127405495331",
  appId: "1:127405495331:web:2bd07e05e4f24e7840cd96",
  measurementId: "G-EPRND66LRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;