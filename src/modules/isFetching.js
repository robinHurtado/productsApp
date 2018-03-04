export default (state=false,action) => {
  switch(action.type){
    case 'LOADER_ON':
      return true;
    case 'LOADER_OFF':
      return false;
    default:
      return state;
  }
}

export const showLoader = () => ({
  type: 'LOADER_ON',
});

export const hideLoader = () => ({
  type: 'LOADER_OFF',
});
