import React from "react";
import { Switch, Route} from "react-router-dom";
import HomePage from "./components/pages/homepage/homePage.component";
export default function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}
