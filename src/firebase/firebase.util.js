import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDoBobg34a-xMKmNEiKVY5cRl2Fvf_9LWM",
    authDomain: "lootlo-3120f.firebaseapp.com",
    databaseURL: "https://lootlo-3120f.firebaseio.com",
    projectId: "lootlo-3120f",
    storageBucket: "lootlo-3120f.appspot.com",
    messagingSenderId: "700474461605",
    appId: "1:700474461605:web:0240e755c192931eaf6c4c",
    measurementId: "G-20R4T5D0ZZ"
  };

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;