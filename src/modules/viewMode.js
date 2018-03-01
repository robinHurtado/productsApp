
const initialState = {
  list: false,
  block: true,
  isFetching: false
}

export default (state=initialState,action) => {
  switch(action.type){
    case 'REQUEST_CHANGE_VIEW_MODE':
      return {...state, list: !state.list, block: !state.block, isFetching: true};
    case 'CHANGE_VIEW_MODE_SUCCESS':
      return {...state, isFetching: false};
    default:
      return state;
  }
}

export const requestViewMode = () => ({
  type: 'REQUEST_CHANGE_VIEW_MODE'
});

export const changedViewMode = () => ({
  type: 'CHANGE_VIEW_MODE_SUCCESS'
});