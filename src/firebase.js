import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyDrD7z_FLf-CkvwjkqOUJYVZfj70e73GUA",
  authDomain: "react-slack-2b70b.firebaseapp.com",
  databaseURL: "https://react-slack-2b70b.firebaseio.com",
  projectId: "react-slack-2b70b",
  storageBucket: "react-slack-2b70b.appspot.com",
  messagingSenderId: "941720172967",
  appId: "1:941720172967:web:2e0fcdd4f9954185b71e82",
  measurementId: "G-CN33XG9DNE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;