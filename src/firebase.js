import { initializeApp } from "firebase/app";
import {getAuth,} from "firebase/auth";
import {getFirestore,} from "firebase/firestore";
import { getStorage } from "firebase/storage";


export const firebaseConfig = {
    apiKey: "AIzaSyAl9QAJ7LRemQqzyriacbBsU6pl32lOqrQ",
    authDomain: "messsagerie-dd416.firebaseapp.com",
    projectId: "messsagerie-dd416",
    storageBucket: "messsagerie-dd416.appspot.com",
    messagingSenderId: "941209209096",
    appId: "1:941209209096:web:c21986e88bc1f6db8cc4bd"

}



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

