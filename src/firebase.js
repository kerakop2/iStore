import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD42sdeFlHWj6sA77AxEuK9Z9k73q-0JsM",
  authDomain: "js-gang-store-25fc0.firebaseapp.com",
  projectId: "js-gang-store-25fc0",
  storageBucket: "js-gang-store-25fc0.appspot.com",
  messagingSenderId: "345321955102",
  appId: "1:345321955102:web:177b55e874273ac5dd730f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you n
