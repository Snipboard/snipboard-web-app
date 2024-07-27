import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxaDRNegP7ZBMqUmhMLf9JWbSjBhmwduc",
  authDomain: "snipboard-11a66.firebaseapp.com",
  projectId: "snipboard-11a66",
  storageBucket: "snipboard-11a66.appspot.com",
  messagingSenderId: "745024624255",
  appId: "1:745024624255:web:6323a5b7167b49ce03114a",
  measurementId: "G-RZ11MG8F1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Google Sign-In
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export { auth, signInWithGoogle };