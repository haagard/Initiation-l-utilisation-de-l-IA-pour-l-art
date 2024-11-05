const admin = require('firebase-admin');

// Chemin vers votre fichier de clés de service JSON
const serviceAccount = require('../Js/initation-a-l-ia-firebase-adminsdk-23w76-fa6242d435.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://initation-a-l-ia.firebaseapp.com/"
});

// Exemple d'accès à la base de données
const db = admin.database();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG8ndR1eCbJsdC6uVRvpgD5YDMQ1rrljk",
  authDomain: "initation-a-l-ia.firebaseapp.com",
  projectId: "initation-a-l-ia",
  storageBucket: "initation-a-l-ia.firebasestorage.app",
  messagingSenderId: "232332959247",
  appId: "1:232332959247:web:68229dd4594c4cd978cd7a",
  measurementId: "G-P5ZVVNV5HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);