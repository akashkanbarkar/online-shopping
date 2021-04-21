import firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';

const config={
    apiKey: "AIzaSyAN6bCoG_jkz72MP55ZQYELzj2GTg4ZWTY",
    authDomain: "online-shopping-d3c66.firebaseapp.com",
    projectId: "online-shopping-d3c66",
    storageBucket: "online-shopping-d3c66.appspot.com",
    messagingSenderId: "618647179618",
    appId: "1:618647179618:web:38f5256ba8a34d60125c3b"
}

firebase.initializeApp(config);
export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase