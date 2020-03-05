import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollectionsItems = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam => {
  return createSelector(
    [selectCollectionsItems],
    collections => collections[collectionUrlParam]
  );
};
