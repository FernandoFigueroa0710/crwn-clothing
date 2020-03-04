import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/shop.selector";
import CollectionItem from "../../collection-item/collectionItem.component";

const CollectionPage = ({ collection }) => {
  console.log("Here", collection);
  return (
    <div className="category">
      <h2>Category page</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
