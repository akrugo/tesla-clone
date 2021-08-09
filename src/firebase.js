import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "tesla-clone-57a26.firebaseapp.com",
  projectId: "tesla-clone",
  storageBucket: "tesla-clone.appspot.com",
  messagingSenderId: "",
  appId: "1:web:",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
