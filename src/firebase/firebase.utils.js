import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "shopsy-db.firebaseapp.com",
    projectId: "shopsy-db",
    storageBucket: "shopsy-db.appspot.com",
    messagingSenderId: "2397974904",
    appId: "1:2397974904:web:baf63f337cc8b4eca7d88d",
    measurementId: "G-M653CQ9G78"
  };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth,additionalData)=>{

  //check if userauthenticated or not else exit from this function
  if(!userAuth) return;
  //store the path of doc in user ref and use snapshot to check if data exists in firebase
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snaptShot = await userRef.get();
  
  //if user doesn't exists use set method on userRef to store data in firebase
  if(!snaptShot.exists){

    const {displayName,email}=userAuth;
    const createdAt = new Date();

    try {
      await userRef.set(
        {
          displayName,
          email,
          createdAt,
          ...additionalData
        }
      );
    } catch (error) {
      console.log('error creating user',error.message);
    }

  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//set custom parameter whenever we use googleaouth provider it will open google sign in popup
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=() => auth.signInWithPopup(provider).catch(error=>console.log(error));

export default firebase;



