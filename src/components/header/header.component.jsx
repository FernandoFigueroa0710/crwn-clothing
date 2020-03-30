import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../utils/firebase.utils";

import CartIcon from "../cart/cart-icon.component";
import CartDropdown from "../cart/cart-dropdown.component";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="shop">CONTACT</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			{currentUser ? <CartIcon /> : null}
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
});

export default connect(mapStateToProps)(Header);
