import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAqgiy9YqP8Yp2XA6tMuXGmjEVzXSk1e8U",
  authDomain: "chrisdizenzo.firebaseapp.com",
  databaseURL: "https://chrisdizenzo.firebaseio.com",
  projectId: "chrisdizenzo",
  storageBucket: "chrisdizenzo.appspot.com",
  messagingSenderId: "680179843944",
  appId: "1:680179843944:web:5023d7c78cb50683b0ccdd",
  measurementId: "G-537KMD16EL"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()

export default db;