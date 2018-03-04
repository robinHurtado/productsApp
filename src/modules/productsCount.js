
export default (state=0,action) => {
  switch(action.type){
    case 'TOTAL_PRODUCTS':
      return action.num;
   default:
      return state;
  }
}

export const getTotalProducts = (num) => ({
  type: 'TOTAL_PRODUCTS',
  num
});