import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBKgw9zn2UgXGdCkSm9F7r3iy9lwZHwCLI",
  authDomain: "challenge-cc0c3.firebaseapp.com",
  projectId: "challenge-cc0c3",
  storageBucket: "challenge-cc0c3.appspot.com",
  messagingSenderId: "104439485023",
  appId: "1:104439485023:web:28fc6fa331521d47e141ea",
  measurementId: "G-2PLELCNZZ0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
