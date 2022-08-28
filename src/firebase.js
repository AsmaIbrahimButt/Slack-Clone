import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDMBAvf_OduQClbP90P8EpECxGPuf84qFs",
  authDomain: "slack-clone-a73e7.firebaseapp.com",
  databaseURL: "https://slack-clone-a73e7-default-rtdb.firebaseio.com",
  projectId: "slack-clone-a73e7",
  storageBucket: "slack-clone-a73e7.appspot.com",
  messagingSenderId: "671021951881",
  appId: "1:671021951881:web:d656e37c74dd3315b30f58"
};
  
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db ,provider};