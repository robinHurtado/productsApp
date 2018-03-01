import React from 'react';
import {
  FontIcon,
  TextField
} from 'react-md';

const ViewSearchProducts = () => (
  <div>
    <FontIcon
      forceSize
      forceFontSize
    >
      view_list
    </FontIcon>
    <FontIcon
      forceSize
      forceFontSize
      disabled
    >
      view_module
    </FontIcon>
    <h5>Showing 10 products - Hidden: 5</h5>
    <TextField
      id="floating-center-title"
      label="Search"
      className="md-cell md-cell--bottom field-search"
    />
  </div>
);

export default ViewSearchProducts;