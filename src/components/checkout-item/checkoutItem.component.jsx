import React from "react";
import { connect } from "react-redux";
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';
import {
	clearItemFromCart,
	addItem,
	removeItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addToCart, removeFromCart }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="checkout-item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeFromCart(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addToCart(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
	clearItem: cartItem => dispatch(clearItemFromCart(cartItem)),
	addToCart: cartItem => dispatch(addItem(cartItem)),
	removeFromCart: cartItem => dispatch(removeItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
