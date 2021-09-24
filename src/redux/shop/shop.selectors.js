import { createSelector } from "reselect";

const selectShop = state => state.shop;


export const selectCollection = createSelector(
    [selectShop],
    shop=>shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollection],
  collections=>Object.keys(collections).map(key=>collections[key])
);

export const selectCollectionItem = collectionUrlPrams =>createSelector(
    [selectCollection],
    collections => collections[collectionUrlPrams]
);