import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAanNs4C0UKIE2utxKuyn-MrFvybr7YCgE",
  authDomain: "sportsreactapp.firebaseapp.com",
  projectId: "sportsreactapp",
  storageBucket: "sportsreactapp.appspot.com",
  messagingSenderId: "873850419081",
  appId: "1:873850419081:web:8098660e6adb9b21489358",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }