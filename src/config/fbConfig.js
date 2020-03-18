import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAF6oQeIr8E1hxn8mSHEkxLkLIUmz6k6Gk",
  authDomain: "net-ninja-marioplan-c3866.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-c3866.firebaseio.com",
  projectId: "net-ninja-marioplan-c3866",
  storageBucket: "net-ninja-marioplan-c3866.appspot.com",
  messagingSenderId: "89364093109",
  appId: "1:89364093109:web:1503b944b5e11f5c7546fc",
  measurementId: "G-1S2DEDY070"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebase;
