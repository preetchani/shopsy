import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDqh1MV3se87OkoQbwM3ltP13jmM2OB48s",
    authDomain: "shopsy-db.firebaseapp.com",
    projectId: "shopsy-db",
    storageBucket: "shopsy-db.appspot.com",
    messagingSenderId: "2397974904",
    appId: "1:2397974904:web:baf63f337cc8b4eca7d88d",
    measurementId: "G-M653CQ9G78"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//set custom parameter whenever we use googleaouth provider it will open google sign in popup
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=() => auth.signInWithPopup(provider);

export default firebase;



