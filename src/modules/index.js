import { combineReducers } from 'redux';

import products from './products';
import viewMode from './viewMode';

export default combineReducers({
  products,
  viewMode
});