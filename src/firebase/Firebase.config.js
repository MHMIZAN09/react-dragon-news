// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "dragon-news-react-48f77.firebaseapp.com",
  projectId: "dragon-news-react-48f77",
  storageBucket: "dragon-news-react-48f77.appspot.com",
  messagingSenderId: "746209210737",
  appId: "1:746209210737:web:dcdaca28c568c123b186d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;