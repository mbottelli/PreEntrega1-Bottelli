import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoJ2n0ABM1r9xXSwrqNA8JqlFpQ4PsKdc",
  authDomain: "react-js-50105.firebaseapp.com",
  projectId: "react-js-50105",
  storageBucket: "react-js-50105.appspot.com",
  messagingSenderId: "640734263998",
  appId: "1:640734263998:web:ac6e3c0761d637c8ebbcef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
