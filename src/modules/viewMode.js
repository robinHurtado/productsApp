
const initialState = {
  list: false,
  block: true
}

export default (state=initialState,action) => {
  switch(action.type){
    case 'REQUEST_CHANGE_VIEW_MODE':
      return {...state, list: !state.list, block: !state.block, isFetching: true};
    default:
      return state;
  }
}

export const requestViewMode = () => ({
  type: 'REQUEST_CHANGE_VIEW_MODE'
});