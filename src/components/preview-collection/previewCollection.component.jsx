import React from "react";
import CollectionItem from "../collection-item/collectionItem.component";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./previewCollection.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default CollectionPreview;
