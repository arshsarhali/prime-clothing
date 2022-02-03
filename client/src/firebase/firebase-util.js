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

export const getUserCart = async (userId) => {
    const cartRef = firestore.doc(`cartItems/${userId}`)
    const cartSnap = await cartRef.get()

    if (!cartSnap.exists) {
        try {
            await cartRef.set(

                {
                    cartItem:null

                }
            )

        } catch (error) {
            console.log('error creating user',error.message);
        }

    }

    return cartSnap;

}
export const updateCartItem = async (userId, cartItem) => {
    const cartRef = firestore.doc(`cartItems/${userId}`)

    try {
        cartRef.set({
            cartItem
        })
    } catch (error) {
        console.log('error updating firebase cart',error.message)
    }

}

export const addColletionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();


}

export const converCollectionsSnapshotToMap = (collections) => {
    
    const transformendCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {

            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformendCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;

    }, {})

}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
    },reject)
    })
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;