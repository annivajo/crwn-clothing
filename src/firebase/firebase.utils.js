import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCdMj3rdLdUdvq66MKg9cYQpLU_t0hPGs",
    authDomain: "crwn-db-4148f.firebaseapp.com",
    databaseURL: "https://crwn-db-4148f.firebaseio.com",
    projectId: "crwn-db-4148f",
    storageBucket: "crwn-db-4148f.appspot.com",
    messagingSenderId: "1048806325535",
    appId: "1:1048806325535:web:7b661ec11987907c91c42a",
    measurementId: "G-WH1ZPC0W3V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const createCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
        console.log(newDocRef);
    })

    return  batch.commit(); //await
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;