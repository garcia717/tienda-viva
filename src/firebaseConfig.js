
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq5oJ2SLzU7Gb-svdDZ4WajSTfgB3Y0Uo",
  authDomain: "tienda-viva.firebaseapp.com",
  projectId: "tienda-viva",
  storageBucket: "tienda-viva.appspot.com",
  messagingSenderId: "897246108148",
  appId: "1:897246108148:web:15d599260e6906de3741a1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
