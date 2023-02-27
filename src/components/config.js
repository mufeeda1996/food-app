import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAhmOQBHkwcBfHxwgAtHCxjb732z6xp9r8",
    authDomain: "food-app-e797d.firebaseapp.com",
    projectId: "food-app-e797d",
    storageBucket: "food-app-e797d.appspot.com",
    messagingSenderId: "159991671249",
    appId: "1:159991671249:web:97e39f4c335d02e9b018f0",
    measurementId: "G-VJYCF362Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};