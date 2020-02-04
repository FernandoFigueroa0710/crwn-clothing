import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "./components/pages/loginRegister/signIn-signUp-page.component";
import HomePage from "./components/pages/homepage/homePage.component";
import ShopPage from "./components/pages/shop/shop.component";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignupPage} />
      </Switch>
    </div>
  );
}
