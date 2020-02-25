import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../categories/category.component";
import CollectionsOverview from "../../collections-overview/collections-overview.component";

const ShopPage = ({ match }) => {
  console.log("SHOP PAGE MATCH", match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
