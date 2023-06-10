import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsYCrcoDh-Xqf4tdMAV8lxcVVm0Sf289M",
  authDomain: "opencup-7b253.firebaseapp.com",
  projectId: "opencup-7b253",
  storageBucket: "opencup-7b253.appspot.com",
  messagingSenderId: "745779212350",
  appId: "1:745779212350:web:ea0ae1518e0e2593d3616f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)