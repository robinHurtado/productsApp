let products;

export default (state=[],action) => {
  switch(action.type){
    case 'FETCH_PRODUCTS_SUCCESS':
      return [...state,...action.data];
    case 'FILTER_PRODUCTS_BY_CATEGORY':
      if(action.category === "all"){
       return products;
      } else {
        return products.filter(({categories}) => {
          return categories.indexOf(action.category) >= 0;
        });
      }
    case 'FILTER_PRODUCTS_BY_NAME':
      if(action.name === ""){
        return products;
      } else {
        return products.filter(({name}) => {
          return name.toLowerCase().includes(action.name.toLowerCase())
        });
      }
    default:
      return state;
  }
}

export const getProductsSuccess = (data) => ({
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
      products = [...data];
      dispatch(getProductsSuccess(data));
    });
  }
}

export const filterByCategory = (category) => ({
  type: 'FILTER_PRODUCTS_BY_CATEGORY',
  category
});

export const filterByName = (name) => ({
  type: 'FILTER_PRODUCTS_BY_NAME',
  name
});