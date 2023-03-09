import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPMYXXisvmMSHTeS5m8gmQNICjMpJn2lY",
    authDomain: "cart-34b33.firebaseapp.com",
    projectId: "cart-34b33",
    storageBucket: "cart-34b33.appspot.com",
    messagingSenderId: "923478130277",
    appId: "1:923478130277:web:d9c3bac609b121e135108c"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;