import Store from './../Store';

const initialState = [];

export default function(state = initialState, action) {

  switch (action.type) {
      case 'STORE_NEW_BOARD_TO_COLLECTION':
        return [...state, action.payload];
      default: return state;
  }
}

export function submitNewBoard(title) {
  return dispatch => {
    dispatch({ type: 'SUBMIT_NEW_BOARD', payload: title });
    const newBoard = {
      id: Store.getState().newBoard.id,
      title: Store.getState().newBoard.title
    }
    dispatch({ type: 'STORE_NEW_BOARD_TO_COLLECTION', payload: newBoard });
  }
}