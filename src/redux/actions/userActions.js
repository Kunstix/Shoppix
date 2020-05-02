import { SIGN_IN, SIGN_OUT, CLEAR_CART } from './types';
import {
  auth,
  getCurrentUser,
  googleProvider,
  createUserProfileDoc
} from '../../firebase/firebaseUtils';

const getUserSnapshot = async (userAuth, additionalData) => {
  const userRef = await createUserProfileDoc(userAuth, additionalData);
  const user = await userRef.get();
  return user;
};

export const fetchUser = () => async dispatch => {
  try {
    const userAuth = await getCurrentUser();
    if (!userAuth) return;
    const user = await getUserSnapshot(userAuth);
    dispatch({
      type: SIGN_IN,
      payload: { id: user.id, ...user.data() }
    });
  } catch (err) {
    console.log(err);
  }
};

export const signInWithEmail = (email, password) => async dispatch => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);

    const existingUser = await getUserSnapshot(user);
    dispatch({
      type: SIGN_IN,
      payload: { id: existingUser.id, ...existingUser.data() }
    });
  } catch (err) {
    console.log('User creation failed', err);
  }
};

export const signInWithGoogle = () => async dispatch => {
  try {
    const { user } = await auth.signInWithPopup(googleProvider);

    const existingUser = await getUserSnapshot(user);

    dispatch({
      type: SIGN_IN,
      payload: { id: existingUser.id, ...existingUser.data() }
    });
  } catch (err) {
    console.log('User creation failed', err);
  }
};

export const signOut = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch({
      type: SIGN_OUT
    });
    dispatch({
      type: CLEAR_CART
    });
  } catch (err) {}
};

export const signUpWithEmail = (
  email,
  password,
  displayName
) => async dispatch => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    console.log(user);

    const newUser = await getUserSnapshot(user, { displayName });
    console.log(newUser);

    dispatch({
      type: SIGN_IN,
      payload: { id: newUser.id, ...newUser.data() }
    });
  } catch (err) {
    console.log('User creation failed', err);
  }
};
