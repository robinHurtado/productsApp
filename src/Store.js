import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk);

const rootReducer = () => ({
  app: null
});

const Store =  createStore(
    rootReducer,
    composeWithDevTools(middleware),
);

export default Store;

