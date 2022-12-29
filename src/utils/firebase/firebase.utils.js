import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
      
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   setDoc,
// } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMMNg_54PCaNnlbWy0yDX-9AV4S2U8mek",
  authDomain: "clothing-cart-db.firebaseapp.com",
  projectId: "clothing-cart-db",
  storageBucket: "clothing-cart-db.appspot.com",
  messagingSenderId: "1036101318401",
  appId: "1:1036101318401:web:4fbbdb3cc5d41822ce8d00"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


// export const db = getFirestore();
 
// export const createUserDocumentFromAuth = async(userAuth)=>{
//     const userDocRef = doc(db, 'users', userAuth.uid);
//     console.log(userDocRef);
// }