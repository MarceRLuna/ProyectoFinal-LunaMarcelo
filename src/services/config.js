

import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coderhouse-3a98c.firebaseapp.com",
  projectId: "coderhouse-3a98c",
  storageBucket: "coderhouse-3a98c.appspot.com",
  messagingSenderId: "674842086141",
  appId: "1:674842086141:web:3d4d68ed07e8639dbe8c94"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);