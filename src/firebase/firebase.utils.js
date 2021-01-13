import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB08qaiIyksxVwGBlnmdev9GaTTv7t6u8c",
  authDomain: "e-commerce-9938c.firebaseapp.com",
  projectId: "e-commerce-9938c",
  storageBucket: "e-commerce-9938c.appspot.com",
  messagingSenderId: "177246529157",
  appId: "1:177246529157:web:25d323e168f4a32027ebec",
  measurementId: "G-HSSFZ3GD5G"
};

export const createUserProfileDocument = async (userAuth, extraData) => {
  if (!userAuth) return;
  const useRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await useRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await useRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return useRef;
};

//firebase.initializeApp(config);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
