import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../preview-collection/previewCollection.component";

import { selectCollectionsItems } from "../../../redux/shop/shop.selector";

const ShopPage = ({ collections }) => (
	<div>
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsItems
});
export default connect(mapStateToProps)(ShopPage);
