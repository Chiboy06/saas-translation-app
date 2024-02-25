import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBodwNcUniyLVsAQ1JJrsCNonJBdRtKI9g",
    authDomain: "saas-translator-app-31188.firebaseapp.com",
    projectId: "saas-translator-app-31188",
    storageBucket: "saas-translator-app-31188.appspot.com",
    messagingSenderId: "650726533525",
    appId: "1:650726533525:web:9346ebcd0468d0814e2e9c"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };