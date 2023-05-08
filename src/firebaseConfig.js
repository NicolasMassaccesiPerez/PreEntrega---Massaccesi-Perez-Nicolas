// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA7iAZ6b6tGMvnLP5btbSQOrsjLLDY2qV8",
    authDomain: "ecommerce-urban-e2726.firebaseapp.com",
    projectId: "ecommerce-urban-e2726",
    storageBucket: "ecommerce-urban-e2726.appspot.com",
    messagingSenderId: "56371007268",
    appId: "1:56371007268:web:a702607f24a08b76ff2db1",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
