import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAr0L_gQWTDZuh5Ml-s6SymvLt7FSQjYWQ',
  authDomain: 'shoppix-df2b1.firebaseapp.com',
  databaseURL: 'https://shoppix-df2b1.firebaseio.com',
  projectId: 'shoppix-df2b1',
  storageBucket: 'shoppix-df2b1.appspot.com',
  messagingSenderId: '124921863117',
  appId: '1:124921863117:web:9912dbd3a3d60eac9fc284',
  measurementId: 'G-FVN843614S'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
