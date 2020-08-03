
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVoTDnIE_TFobt6ZMTcVSx8UvwNLsvFFA",
    authDomain: "finstagram-ba84e.firebaseapp.com",
    databaseURL: "https://finstagram-ba84e.firebaseio.com",
    projectId: "finstagram-ba84e",
    storageBucket: "finstagram-ba84e.appspot.com",
    messagingSenderId: "986155444920",
    appId: "1:986155444920:web:e9a7ce54d6e1c113e5224d"
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebase.storage()

export {db, auth, storage}