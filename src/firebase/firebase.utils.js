import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDrF9PM6ZHs5PxnFt4gi-Va87YrvyXhCE8",
    authDomain: "kenashop-4c5c4.firebaseapp.com",
    databaseURL: "https://kenashop-4c5c4.firebaseio.com",
    projectId: "kenashop-4c5c4",
    storageBucket: "kenashop-4c5c4.appspot.com",
    messagingSenderId: "674176952352",
    appId: "1:674176952352:web:9017c4ed15613e6ba9b445"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;