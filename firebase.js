// firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, limit, onSnapshot, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRlOzsn-69rFk5lUA5UvdtpvOp3zR60g8",
    authDomain: "rare-decker-423514-m6.firebaseapp.com",
    projectId: "rare-decker-423514-m6",
    storageBucket: "rare-decker-423514-m6.appspot.com",
    messagingSenderId: "281437239891",
    appId: "1:281437239891:web:cf38a490a8f76aeddd64a6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);

export { app, firestore, collection, query, orderBy, limit, onSnapshot, serverTimestamp };
