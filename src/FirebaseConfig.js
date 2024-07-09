import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGiHdLSbvvBUXf6T1t2m0y-t1Bw5CnXCg",
    authDomain: "mojoapp-ccfe3.firebaseapp.com",
    projectId: "mojoapp-ccfe3",
    storageBucket: "mojoapp-ccfe3.appspot.com",
    messagingSenderId: "919981919327",
    appId: "1:919981919327:web:f5ab8b27a14f4e80209fea",
    measurementId: "G-P2QL6CSKB7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new FacebookAuthProvider();

export {auth, provider}