import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  List,
  ListItem,
  Subheader,
  Divider,
  Avatar,
  FontIcon
} from 'react-md';

const CategoriesPanel = ({history}) => (
  <List className="md-cell md-paper md-paper--1">
    <Subheader primaryText="Categories" />
    <ListItem
      primaryText="All"
      leftAvatar={
        <Avatar icon={<FontIcon>list</FontIcon>} />
      }
      style={
        {
          backgroundColor: history.location.pathname === "/products" && '#BDBDBD'
        }
      }
    />
    <Divider />
    <ListItem
      primaryText="Tech"
      leftAvatar={<Avatar icon={<FontIcon>computer</FontIcon>} />}
    />
    <ListItem
      primaryText="Services"
      leftAvatar={<Avatar icon={<FontIcon>build</FontIcon>} />}
    />
    <ListItem
      primaryText="Offices"
      leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
    />
  </List>
);

export default withRouter(CategoriesPanel);