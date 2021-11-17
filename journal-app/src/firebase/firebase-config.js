import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn4GTXXLRtyjrD-iMB_8cHuJGP9zJAynI",
    authDomain: "react-app-cursos-d6108.firebaseapp.com",
    projectId: "react-app-cursos-d6108",
    storageBucket: "react-app-cursos-d6108.appspot.com",
    messagingSenderId: "974276627094",
    appId: "1:974276627094:web:208eed3250a5acae14d0b7",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const db = getFirestore(); //la bbdd

//para hacer la autentificación con Google
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
