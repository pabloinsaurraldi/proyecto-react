// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHvGfUoBq_Qglv2-fBrSRxBEk0oILge-k",
    authDomain: "verzall-react.firebaseapp.com",
    projectId: "verzall-react",
    storageBucket: "verzall-react.appspot.com",
    messagingSenderId: "492578156085",
    appId: "1:492578156085:web:5974a9d5c6a813d6decb7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);