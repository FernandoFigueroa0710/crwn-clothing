import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "./components/pages/loginRegister/signIn-signUp-page.component";
import HomePage from "./components/pages/homepage/homePage.component";
import ShopPage from "./components/pages/shop/shop.component";

import { auth } from "./components/utils/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unSubscribeFromAuth = null;

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
