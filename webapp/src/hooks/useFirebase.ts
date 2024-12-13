// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "themagictodo.firebaseapp.com",
  projectId: "themagictodo",
  storageBucket: "themagictodo.firebasestorage.app",
  messagingSenderId: "1015187498055",
  appId: "1:1015187498055:web:a0d9cf8c92a20d4d9abd62"
};

// Initialize Firebase

export default function useFirebase() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const user = auth.currentUser;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        if(user){
            console.log(user)
            setIsLoggedIn(true)
        }else{
            console.log("no user")
        }
    })
    return {isLoggedIn}
}