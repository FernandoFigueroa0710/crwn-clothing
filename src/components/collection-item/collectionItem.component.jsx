import React from "react";
import { connect } from "react-redux";
import {
  AddButton,
  CollectionItemContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  BackgroundImage,
} from "./collection-item.styles";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
	return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapToDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapToDispatchToProps)(CollectionItem);
