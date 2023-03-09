import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*import { initializeApp } from "firebase/app";
// import * as firebase from 'firebase';
// import 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyDPMYXXisvmMSHTeS5m8gmQNICjMpJn2lY",
  authDomain: "cart-34b33.firebaseapp.com",
  projectId: "cart-34b33",
  storageBucket: "cart-34b33.appspot.com",
  messagingSenderId: "923478130277",
  appId: "1:923478130277:web:d9c3bac609b121e135108c"
};*/
//initialize firebase
// firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)


