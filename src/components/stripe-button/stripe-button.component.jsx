import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_OwqBa1BWFAO3bxXYicbxJyd90084vPXP7W";
	const onToken = token => {
		console.log(token);
	};
	return (
		<StripeCheckout
			label="Pay now"
			name="CRWN Clothing & Co."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
