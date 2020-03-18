import React from "react";
import { connect } from "react-redux";

import {
	clearItemFromCart,
	addItem,
	removeItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addToCart, removeFromCart }) => {
	const { imageUrl, name, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeFromCart(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addToCart(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: cartItem => dispatch(clearItemFromCart(cartItem)),
	addToCart: cartItem => dispatch(addItem(cartItem)),
	removeFromCart: cartItem => dispatch(removeItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
