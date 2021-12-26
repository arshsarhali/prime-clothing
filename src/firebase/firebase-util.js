import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={

    apiKey: "AIzaSyCCsIxEoJp7kfUcXt3oXu3ihUIm6cIuv6s",

    authDomain: "prime-db-c0a2e.firebaseapp.com",

    projectId: "prime-db-c0a2e",

    storageBucket: "prime-db-c0a2e.appspot.com",

    messagingSenderId: "531853449899",

    appId: "1:531853449899:web:ba8b97cfa1fcab47c235ee",

    measurementId: "G-302GPBN5TK"

};
  
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set(

                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData

                }
            )

        } catch (error) {
            console.log('error creating user',error.message);
        }

    }
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;