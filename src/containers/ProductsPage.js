import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Cell
} from 'react-md';

import ProductCard from '../components/ProductCard';
import ViewSearchProducts from './ViewSearchProducts';
import CategoriesPanel from '../components/CategoriesPanel';
import { fetchProducts, filterByCategory } from '../modules/products';
import { showLoader } from '../modules/isFetching';

class ProductPage extends PureComponent{
  constructor(){
    super();
    this.state = {
      style: {minWidth: '872px'}
    }
    this.changeView = this.changeView.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
  }

  componentWillMount(){
    this.props.dispatch(showLoader());
    this.props.dispatch(fetchProducts());
  }

  changeView(view){
    switch(view){
      case "list":
        this.setState({style: {minWidth: '872px'}});
      break;
      default:
        this.setState({style: {minWidth: '430px'}});
    }
  }

  filterCategory(category){
    this.props.dispatch(filterByCategory(category));
  }

  render(){
    const { products, isFetching } = this.props;
    if (isFetching){
      return(
        <center><div className="loader"></div></center>
      );
    }
    return(
      <div>
        <Grid>
          <CategoriesPanel filterCategory={this.filterCategory} />
          <Cell size={8}>
            <ViewSearchProducts changeView={this.changeView} showing={products.length} />
            <div>
              {
                products.map((obj) => (
                  <ProductCard {...obj} key={obj.id} style={this.state.style} />)
                )
              }
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ products, isFetching }) => ({ products, isFetching });

export default connect(mapStateToProps)(ProductPage);