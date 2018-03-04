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

const CategoriesPanel = ({ history, filterCategory}) => (
  <List className="md-cell md-paper md-paper--1 panel">
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
      onClick={() => {
        history.push("/products");
        filterCategory("all");
      }}
    />
    <Divider />
    <ListItem
      primaryText="Tech"
      leftAvatar={
        <Avatar icon={<FontIcon>computer</FontIcon>} />
      }
      style={
        {
          backgroundColor: history.location.pathname === "/products/tech" && '#BDBDBD'
        }
      }
      onClick={() => {
        history.push("/products/tech");
        filterCategory("Tech");
      }}
    />
    <ListItem
      primaryText="Services"
      leftAvatar={
        <Avatar icon={<FontIcon>build</FontIcon>} />
      }
      style={
        {
          backgroundColor: history.location.pathname === "/products/services" && '#BDBDBD'
        }
      }
      onClick={() => {
        history.push("/products/services");
        filterCategory("Services");
      }}
    />
    <ListItem
      primaryText="Office"
      leftAvatar={
        <Avatar icon={<FontIcon>folder</FontIcon>} />
      }
      style={
        {
          backgroundColor: history.location.pathname === "/products/office" && '#BDBDBD'
        }
      }
      onClick={() => {
        history.push("/products/office");
        filterCategory("Office");
      }}
    />
  </List>
);

export default withRouter(CategoriesPanel);