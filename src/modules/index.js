import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // doc: https://redux-form.com/7.2.0/docs/gettingstarted.md/ 

import newBoard from './CreateBoard';
import boardsCollection from './BoardsCollection.js';
import activeBoard from './ActiveBoard';
import activeBoardData from './ActiveBoardData';

const RootReducer = combineReducers({
    form: formReducer,
    newBoard,
    boardsCollection,
    activeBoard,
    activeBoardData,
});

export default RootReducer;