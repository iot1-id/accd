import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCXQIc9XUQ0hSVGddxZz1ITdautpm2ttWs",
  authDomain: "accreditation-53748.firebaseapp.com",
  projectId: "accreditation-53748",
  storageBucket: "accreditation-53748.appspot.com",
  messagingSenderId: "694952945283",
  appId: "1:694952945283:web:c0b239c4498ec2cd059db6",
  measurementId: "G-ET4RMQRMBJ",
});

export const auth = app.auth();
export var db = app.firestore();
export default app;
