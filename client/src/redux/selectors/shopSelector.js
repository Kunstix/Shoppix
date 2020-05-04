import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionId => {
  return createSelector([selectCollections], collections =>
    collections ? collections[collectionId] : null
  );
};

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching && !!!shop.collections
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
