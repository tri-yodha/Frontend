// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyALWDtVB0bkDbqgjp9qgj77RHGOL_vg83A",
  authDomain: "atherai.firebaseapp.com",
  projectId: "atherai",
  storageBucket: "atherai.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

