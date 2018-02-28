import React, { PureComponent } from 'react';
import {
  Grid,
  Cell } from 'react-md';

  import ProductCard from './ProductCard';
  import ViewSearchProducts from './ViewSearchProducts';
  import CategoriesPanel from './CategoriesPanel';

export default class ProductPage extends PureComponent{

  render(){
    return(
      <div>
        <Grid>
          <CategoriesPanel />
          <Cell size={8}>
            <ViewSearchProducts />
            <ProductCard />
          </Cell>
        </Grid>
      </div>
    );
  }
}