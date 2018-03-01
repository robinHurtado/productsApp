import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Cell
} from 'react-md';

import ProductCard from '../components/ProductCard';
import ViewSearchProducts from '../components/ViewSearchProducts';
import CategoriesPanel from '../components/CategoriesPanel';
import { fetchProducts } from '../modules/products';

class ProductPage extends PureComponent{

  componentWillMount(){
    this.props.dispatch(fetchProducts());
  }

  render(){
    const { products } = this.props;
    return(
      <div>
        <Grid>
          <CategoriesPanel />
          <Cell size={8}>
            <ViewSearchProducts />
            {
              products.map((obj) => (<ProductCard {...obj} key={obj.id} />))
            }
          </Cell>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({products}) => ({products});

export default connect(mapStateToProps)(ProductPage);