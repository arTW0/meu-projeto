import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyC2pia7Fmw-NYqhjIDDXdxXdmq5pvFG21U",
  authDomain: "letmeask-1971b.firebaseapp.com",
  databaseURL: "https://letmeask-1971b-default-rtdb.firebaseio.com",
  projectId: "letmeask-1971b",
  storageBucket: "letmeask-1971b.appspot.com",
  messagingSenderId: "1078527211170",
  appId: "1:1078527211170:web:9e05e82cc2ee4e8ebdc9fb"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth
const database = firebase.database