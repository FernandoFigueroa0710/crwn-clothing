import React from "react";
import CustomButton from "../utils/custom-button.component";

const CollectionItem = ({ id, name, imageUrl, price }) => (
	<div className="collection-item">
		<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price}</span>
		</div>
		<CustomButton inverted>ADD TO CART</CustomButton>
	</div>
);
export default CollectionItem;
