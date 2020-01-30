import React from "react";

const MenuItem = ({title, imageUrl, size}) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }} className={`${size} menu-item`}>
    <div className="item-content">
      <h1 className="item-title">{title}</h1>
      <span className="item-subtitle"> SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;