import { UPDATE_COLLECTIONS } from './types';

export const updateCollections = collections => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collections
  };
};
