import React from "react";
import { Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/homepage/homePage.component";
import ShopPage from "./components/pages/shop/shop.component";

export default function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}
