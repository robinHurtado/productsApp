import React, { PureComponent } from 'react';
import { List, ListItem } from 'react-md';

export default class ProductPage extends PureComponent{

  render(){
    return(
      <div>
        <List className="md-cell md-paper md-paper--1">
          <ListItem primaryText="Inbox" />
          <ListItem primaryText="Starred" />
          <ListItem primaryText="Sent Mail" />
          <ListItem primaryText="Drafts" />
        </List>
      </div>
    );
  }
}