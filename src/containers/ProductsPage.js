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
import { changedViewMode } from '../modules/viewMode';

class ProductPage extends PureComponent{
  constructor(){
    super();
    this.state = {
      style: {minWidth: '872px'}
    }
    this.changeView = this.changeView.bind(this);
  }

  componentWillMount(){
    this.props.dispatch(fetchProducts());
  }

  changeView(view){
    switch(view){
      case "list":
        this.setState(()=>{
          this.props.dispatch(changedViewMode());
          return {style: {minWidth: '872px'}};
        });
      break;
      case "block":
        this.setState(()=> {
          this.props.dispatch(changedViewMode());
          return {style: {minWidth: '430px'}}
        });
      break;
    }
  }

  render(){
    const { products, viewMode } = this.props;
    if (viewMode.isFetching){
      return(
        <center><div className="loader"></div></center>
      );
    }
    return(
      <div>
        <Grid>
          <CategoriesPanel />
          <Cell size={8}>
            <ViewSearchProducts changeView={this.changeView} />
            {
              products.map((obj) => (
                <ProductCard {...obj} key={obj.id} style={this.state.style} />)
              )
            }
          </Cell>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({products,viewMode}) => ({products,viewMode});

export default connect(mapStateToProps)(ProductPage);