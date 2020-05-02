// import axios from 'axios';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebaseUtils';
import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAIL
} from './types';

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccsess = collections => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  };
};

export const fetchCollectionsFail = errMsg => {
  return {
    type: FETCH_COLLECTIONS_FAIL,
    payload: errMsg
  };
};

export const fetchCollections = () => {
  return async dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    try {
      /*     axios.get(
        'https://firestore.googleapis.com/v1/projects/shoppix-df2b1/databases/(default)/documents/collections'
      ) */
      const snapShot = await collectionRef.get();
      const collections = convertCollectionsSnapshotToMap(snapShot);
      dispatch(fetchCollectionsSuccsess(collections));
    } catch (err) {
      dispatch(fetchCollectionsFail(err.message));
    }
  };
};
