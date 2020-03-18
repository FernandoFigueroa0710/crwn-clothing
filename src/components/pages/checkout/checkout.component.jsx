import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectCartItems,
	selectCartItemsCount,
	selectCartTotal
} from "../../../redux/cart/cart.selector";

import CheckoutItem from "../../checkout-item/checkoutItem.component";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}

		<div className="total">
			<span>Total: ${cartItemsTotal}</span>
		</div>
		<div className="text-warning">
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/23 - CCV: 123
		</div>
		<StripeCheckoutButton price={cartItemsTotal} />
	</div>
);
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartItemsCount: selectCartItemsCount,
	cartItemsTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);