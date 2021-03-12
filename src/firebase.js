import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB96cylPoI3NxB1LmuAAY8ZylNIER_BROw",
    authDomain: "tinder-clone-78707.firebaseapp.com",
    projectId: "tinder-clone-78707",
    storageBucket: "tinder-clone-78707.appspot.com",
    messagingSenderId: "134454230679",
    appId: "1:134454230679:web:ebf14884070f0b76d7f3d2",
    measurementId: "G-YCCEYHPEV9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;