import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBwbFmZCWAjj4BYA1PMY6kbs_41PtyIflo",
    authDomain: "banking-application-8a0b8.firebaseapp.com",
    projectId: "banking-application-8a0b8",
    storageBucket: "banking-application-8a0b8.appspot.com",
    messagingSenderId: "653253723587",
    appId: "1:653253723587:web:ef6002bea1f02e5f0a6976"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
export default db;
