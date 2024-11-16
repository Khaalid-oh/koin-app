import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBPS7VSt09SyFR-OOuOK_LyCe7LWAzQSQk",
    authDomain: "koin-app-e9ae4.firebaseapp.com",
    projectId: "koin-app-e9ae4",
    storageBucket: "koin-app-e9ae4.firebasestorage.app",
    messagingSenderId: "687489889596",
    appId: "1:687489889596:web:0e076017947bcc74601a39",
    measurementId: "G-9DNBJ34DHM"
  };
// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };