import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // doc: https://redux-form.com/7.2.0/docs/gettingstarted.md/ 
import CreateBoardReducer from './CreateBoardReducer';
import BoardsCollectionReducer from './BoardsCollectionReducer';
import ActiveBoardReducer from './ActiveBoardReducer';
import ActiveBoardDataReducer from './ActiveBoardDataReducer';

const RootReducer = combineReducers({
    form: formReducer,
    newBoard: CreateBoardReducer,
    boardsCollection: BoardsCollectionReducer,
    activeBoard: ActiveBoardReducer,
    activeBoardData: ActiveBoardDataReducer,
})

export default RootReducer;