// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import getFirestore from 'firebase/firestore';
import 'firebase/compat/firestore';
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq1egiLiVNyKyRit938KN0jh9lJ3EC36A",
  authDomain: "fitapp-8c7dc.firebaseapp.com",
  projectId: "fitapp-8c7dc",
  storageBucket: "fitapp-8c7dc.appspot.com",
  messagingSenderId: "594937665525",
  appId: "1:594937665525:web:59308213b71862da5d72bc"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore();
export { auth, db,firebase };
