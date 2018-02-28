import React, { PureComponent } from 'react';
import {
  List,
  ListItem,
  Grid,
  Cell } from 'react-md';

  import ProductCard from './ProductCard';
  import ViewSearchProducts from './ViewSearchProducts';

export default class ProductPage extends PureComponent{

  render(){
    return(
      <div>
        <Grid>
          <List className="md-cell md-paper md-paper--1">
            <ListItem primaryText="Inbox" />
            <ListItem primaryText="Starred" />
            <ListItem primaryText="Sent Mail" />
            <ListItem primaryText="Drafts" />
          </List>
          <Cell size={8}>
            <ViewSearchProducts />
            <ProductCard />
          </Cell>
        </Grid>
      </div>
    );
  }
}