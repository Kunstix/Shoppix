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

export const createUserProfileDoc = async (user, data) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

export const addCollection = async (collectionsKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionsKey);

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newRef = collectionRef.doc();
    batch.set(newRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((collectionsObject, collection) => {
    collectionsObject[collection.routeName] = collection;
    return collectionsObject;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
