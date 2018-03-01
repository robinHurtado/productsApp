import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules';

const middleware = applyMiddleware(thunk);

const Store =  createStore(
    rootReducer,
    composeWithDevTools(middleware),
);

export default Store;

