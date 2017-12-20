import uniqueId from 'lodash/uniqueId';

const initialState = {
  isBoardOpen: false,
  title: null,
  id: null,
  success: false,
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_BOARD':
      return {
        ...state,
        title: null,
        isBoardOpen: true,
        id: null,
        success: false,
      };
    case 'CANCEL_NEW_BOARD':
      return {
        ...state,
        title: null,
        isBoardOpen: false,
        id: null,
        success: false,
      };
    case 'SUBMIT_NEW_BOARD':
      return {
        ...state,
        isBoardOpen: false,
        title: action.payload,
        id: uniqueId(''),
      }
    default:
      return state;
  }
}

// Action Creators
export function cancelCreatingBoard() {
  return {
    type: 'CANCEL_NEW_BOARD',
    payload: false,
  }
}

export function createNewBoard() {
  return {
    type: 'CREATE_NEW_BOARD',
    payload: true,
  };
}