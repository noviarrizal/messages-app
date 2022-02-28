import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCZIarFrtoOlTIP_tkUzZMXMwkCt5b4uj8",
  authDomain: "messages-app-bd7b4.firebaseapp.com",
  projectId: "messages-app-bd7b4",
  storageBucket: "messages-app-bd7b4.appspot.com",
  messagingSenderId: "875323818495",
  appId: "1:875323818495:web:1d87726b4436bc25f167ca",
  measurementId: "G-6P17PB5FQH",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Export
export { auth, provider, analytics };
export default db;
