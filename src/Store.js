import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle'; // doc: https://lodash.com/docs/4.17.4#throttle

import RootReducer from './modules';
import { saveState, loadState } from './Utils/SyncBoardCollectionLocalStorage';

const middleware = applyMiddleware(thunk);
const persistedState = loadState();

const Store =  createStore(
    RootReducer,
    persistedState,
    composeWithDevTools(middleware),
);

//subscribe (it is change listener, every action dispatch or state change will excute the callback)
Store.subscribe(throttle(() => {
    saveState({
        boardsCollection: Store.getState().boardsCollection,
        activeBoard: Store.getState().activeBoard,
        newBoard: Store.getState().newBoard,
        activeBoardData: Store.getState().activeBoardData,
    })
}, 1000));

export default Store;

