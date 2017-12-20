// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case 'STORE_NEW_BOARD_TO_COLLECTION':
      return [...state, action.payload];
    default: 
      return state;
  }
}