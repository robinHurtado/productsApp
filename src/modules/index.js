import { combineReducers } from 'redux';

import products from './products';
import viewMode from './viewMode';
import totalProducts from './productsCount';

export default combineReducers({
  products,
  viewMode,
  totalProducts
});