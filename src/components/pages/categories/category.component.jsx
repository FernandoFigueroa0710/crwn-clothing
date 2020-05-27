import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/shop.selector";
import CollectionItem from "../../collection-item/collectionItem.component";
import {
  CategoryPageContainer,
  CategoryTitle,
  CategoryItemsContainer,
} from "./categoryPageStyles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CategoryPageContainer>
      <CategoryTitle className="title">{title}</CategoryTitle>
      <CategoryItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CategoryItemsContainer>
    </CategoryPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
