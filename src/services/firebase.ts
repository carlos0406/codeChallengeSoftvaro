
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyDCK6hzQ7GEQFlzWvif5gessFRfgzq0ZFY",
	authDomain: "softvaro-db086.firebaseapp.com",
	projectId: "softvaro-db086",
	storageBucket: "softvaro-db086.appspot.com",
	messagingSenderId: "868799283302",
	appId: "1:868799283302:web:1fe2b256bc79c95650eda7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
