import React from "react";
import { Route } from "react-router-dom";

import CategoryPage from "../categories/category.component";
import CollectionsOverview from "../../collections-overview/collections-overview.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} render={CategoryPage} />
    </div>
  );
};

export default ShopPage;
//
