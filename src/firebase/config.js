/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP0b9Ud2x2CSCBltZpEmdaY4EuNJ52PaU",
  authDomain: "journalappcurso-2a2a4.firebaseapp.com",
  projectId: "journalappcurso-2a2a4",
  storageBucket: "journalappcurso-2a2a4.appspot.com",
  messagingSenderId: "356409803138",
  appId: "1:356409803138:web:b93f98101c35dee9314f9b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);