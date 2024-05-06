// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkxVwmkL8WV_eRpSZHoWj2zGW4q0U6hf4",
  authDomain: "mapwrld-1.firebaseapp.com",
  projectId: "mapwrld-1",
  storageBucket: "mapwrld-1.appspot.com",
  messagingSenderId: "611533888292",
  appId: "1:611533888292:web:68e91f1a88fb4684ce31b1",
}

// Initialize Firebase
const app = getApps().length ? getApp : initializeApp(firebaseConfig)
const auth = getAuth(app as FirebaseApp)
const db = getFirestore(app as FirebaseApp)
const functions = getFunctions(app as FirebaseApp)

export { auth, db, functions }
