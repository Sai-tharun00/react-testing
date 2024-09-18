// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getStorage } from 'firebase/storage';// import storage


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWZCFVxRqd0GgkjBUr0MuGd7JBujfTi44",
    authDomain: "login-auth-70707.firebaseapp.com",
    projectId: "login-auth-70707",
    storageBucket: "login-auth-70707.appspot.com",
    messagingSenderId: "807878286873",
    appId: "1:807878286873:web:ceeafe4c1bf94fe60f9488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;