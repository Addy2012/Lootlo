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

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapshot = await userRef.get();
  
  if (!snapshot.exists){
    const { displayName, email } = userAuth; 
    const createdAt= new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error)
    }

  }
  return userRef;
}

export const addCollectionAndItems = async (collectionKey,objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef)
    batch.set(newDocRef, obj);
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title,items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    };
  });
  transformedCollection.reduce((accumulator,collection)=>  {
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  } ,{})
}

export const auth=firebase.auth();

export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
 
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;