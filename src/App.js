import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "./components/pages/loginRegister/signIn-signUp-page.component";
import HomePage from "./components/pages/homepage/homePage.component";
import ShopPage from "./components/pages/shop/shop.component";
import CheckoutPage from "./components/pages/checkout/checkout.component";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import {
	auth,
	createUserProfileDocument
} from "./components/utils/firebase.utils";

class App extends Component {
	unSubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="" />
							) : (
								<SignInAndSignupPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
