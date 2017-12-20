import find from 'lodash/find';
import Store from '../Store';

const initialState = {
  title: null,
  id: null,
  isFetching: false,
  isEditingList: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_ACTIVE_BOARD':
      return {
        ...state,
        title: action.payload.title,
        id:  action.payload.id,
        isFetching: true
      }
    case 'SELECT_ACTIVE_BOARD_SUCCESS':
      return { ...state, isFetching: false }
    case 'STOP_EDITING_LIST':
      return {
        ...state,
        isEditingList: action.payload
      }
    case 'LIST_EDIT_MODE_ENABLED':
      return {
        ...state,
        isEditingList: action.payload
      };
    default: return { ...state };
  }
}

// Action Creators
export function disableListEditMode() {
  return dispatch => dispatch({ type: 'STOP_EDITING_LIST', payload: false });
}

export function selectActiveBoard(id) {
  return dispatch => {
    const boardsCollection = Store.getState().boardsCollection;
    const activeBoard = find(boardsCollection, board => board.id === id);
    dispatch({ type: 'SELECT_ACTIVE_BOARD', payload: activeBoard });
    dispatch({ type: 'SELECT_ACTIVE_BOARD_SUCCESS' });
  }
}

export function enableListEditMode() {
  return dispatch => dispatch({ type: 'LIST_EDIT_MODE_ENABLED', payload: true });
}