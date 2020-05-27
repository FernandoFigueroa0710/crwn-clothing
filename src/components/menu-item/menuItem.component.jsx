import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menuItem.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <ContentContainer>
      <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
