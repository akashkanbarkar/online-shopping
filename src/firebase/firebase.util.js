import firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';

const config={
    apiKey: "AIzaSyAN6bCoG_jkz72MP55ZQYELzj2GTg4ZWTY",
    authDomain: "online-shopping-d3c66.firebaseapp.com",
    dataBaseUrl: "online-shopping-d3c66.firebaseio.com",
    projectId: "online-shopping-d3c66",
    storageBucket: "online-shopping-d3c66.appspot.com",
    messagingSenderId: "618647179618",
    appId: "1:618647179618:web:38f5256ba8a34d60125c3b"
}

export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return
    console.log("Hiiiiiiiiiiiiii")
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    console.log("userRef",userRef)
    const snapShot= await userRef.get()
    console.log("snapShot",snapShot)
    if(!snapShot.exists){
        const {displayName,email}=userAuth
        const createdAt= new Date();

       try{
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData

           })

       }catch(err){
      console.log("error in creating user", err)
       }
    }

    return userRef

}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
 }

// firebase.initializeApp(config);
export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase