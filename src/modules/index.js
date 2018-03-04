import { combineReducers } from 'redux';

import products from './products';
import viewMode from './viewMode';
import totalProducts from './productsCount';
import isFetching from './isFetching';

export default combineReducers({
  products,
  viewMode,
  totalProducts,
  isFetching
});