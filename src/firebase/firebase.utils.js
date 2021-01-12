import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB08qaiIyksxVwGBlnmdev9GaTTv7t6u8c",
    authDomain: "e-commerce-9938c.firebaseapp.com",
    projectId: "e-commerce-9938c",
    storageBucket: "e-commerce-9938c.appspot.com",
    messagingSenderId: "177246529157",
    appId: "1:177246529157:web:25d323e168f4a32027ebec",
    measurementId: "G-HSSFZ3GD5G"
  }

  //firebase.initializeApp(config);
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

  

  export const auth= firebase.auth()

  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;