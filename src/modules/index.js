import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // doc: https://redux-form.com/7.2.0/docs/gettingstarted.md/ 
import CreateBoardReducer from './CreateBoard';
import BoardsCollectionReducer from './BoardsCollection';
import ActiveBoardReducer from './ActiveBoard';
import ActiveBoardDataReducer from './ActiveBoardData';

const RootReducer = combineReducers({
    form: formReducer,
    newBoard: CreateBoardReducer,
    boardsCollection: BoardsCollectionReducer,
    activeBoard: ActiveBoardReducer,
    activeBoardData: ActiveBoardDataReducer,
})

export default RootReducer;