import { createSelector } from "reselect";

const selectShopItems = state => state.shop;

export const selectCollectionsItems = createSelector(
	[selectShopItems],
	shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollectionsItems],
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => {
	return createSelector([selectCollectionsItems], collections =>
		collections ? collections[collectionUrlParam] : null
	);
};
