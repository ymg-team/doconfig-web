import firebase from 'firebase'

const { FIREBASE_APIKEY, FIREBASE_AUTHDOMAIN, FIREBASE_DATABASEURL, FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET, FIREBASE_MESSAGINGSENDERID } = process.env

// initialize
const app = firebase.initializeApp({
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID
})

export default app
