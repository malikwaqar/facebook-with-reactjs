import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8L1YRhodWuIpo3zg-wuG4OaGaLlx_VHc",
    authDomain: "facebook-with-reactjs.firebaseapp.com",
    databaseURL: "https://facebook-with-reactjs.firebaseio.com",
    projectId: "facebook-with-reactjs",
    storageBucket: "facebook-with-reactjs.appspot.com",
    messagingSenderId: "709260539642",
    appId: "1:709260539642:web:7a76531da94777619a7b43",
    measurementId: "G-ZH64EC49BM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;