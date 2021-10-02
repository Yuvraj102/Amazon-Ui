import firebase from "firebase";

const firebaseConfig = {
  apiKey: "Enter Yours",
  authDomain: "Enter Yours",
  projectId: "Enter Yours",
  storageBucket: "Enter Yours",
  messagingSenderId: "Enter Yours",
  appId: "Enter Yours",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
