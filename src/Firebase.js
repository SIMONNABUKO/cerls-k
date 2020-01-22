import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDSOO3orNuJY_U4UaYaTU21DO5wkrald8g',
  authDomain: 'cerls-k.firebaseapp.com',
  databaseURL: 'https://cerls-k.firebaseio.com',
  projectId: 'cerls-k',
  storageBucket: 'cerls-k.appspot.com',
  messagingSenderId: '327019397442',
  appId: '1:327019397442:web:2bdff4fa15ad10254d88db',
  measurementId: 'G-JFLBDNGERZ'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;
