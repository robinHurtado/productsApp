
export default (state=[],action) => {
  switch(action.type){
    case 'FETCH_PRODUCTS_SUCCESS':
      return [...state,...action.data];
    case 'HOTEL_FILTERED_SUCCESS':
      return [action.data];
    default:
      return state;
  }
}

const getProductsSuccess = (data) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  data
});

export const fetchProducts = () => {
  return (dispatch) => {
    fetch('/api/products',{
    method: 'get',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(({data}) => {
      dispatch(getProductsSuccess(data));
    });
  }
}