import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "informaticamendoza-e1593.firebaseapp.com",
    projectId: "informaticamendoza-e1593",
    storageBucket: "informaticamendoza-e1593.appspot.com",
    messagingSenderId: "155138986649",
    appId: "1:155138986649:web:dc9a84c9b1a98abdde1e08",
    measurementId: "G-W3G60EEQ0K"
    };


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };
