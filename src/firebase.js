import firebase from "firebase";

const firebaseAPp = firebase.initializeApp({
    apiKey: "AIzaSyCpPmFFhVCNURHGvaSALh1pHE1bImsBRDQ",
    authDomain: "clone-c3f0f.firebaseapp.com",
    databaseURL: "https://clone-c3f0f.firebaseio.com",
    projectId: "clone-c3f0f",
    storageBucket: "clone-c3f0f.appspot.com",
    messagingSenderId: "472853274552",
    appId: "1:472853274552:web:5db28835a83bf2a9fe794d"
});

const auth = firebase.auth();

export { auth };