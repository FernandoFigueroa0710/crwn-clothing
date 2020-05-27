import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../../redux/cart/cart.selector";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkoutPage.styles";
import CheckoutItem from "../../checkout-item/checkoutItem.component";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, cartItemsTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalContainer>
      <span>Total: ${cartItemsTotal}</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/23 - CCV: 123
    </WarningContainer>
    <StripeCheckoutButton price={cartItemsTotal} />
  </CheckoutPageContainer>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
  cartItemsTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
