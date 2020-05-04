import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  collections: null,
  isFetching: true,
  errMsg: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        errMsg: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
