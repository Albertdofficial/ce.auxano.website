import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCI9NplZUnQI4AmWd-Hi_LzEKzm2eTEJ7k",
    authDomain: "church-beb97.firebaseapp.com",
    projectId: "church-beb97",
    storageBucket: "church-beb97.appspot.com",
    messagingSenderId: "242579675010",
    appId: "1:242579675010:web:89d377f9cc50562fd3a19b"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  // init services
  const projectFirestore = firebase.firestore();

  export {projectFirestore};