const initialState = {
  isFetching: false,
  usename: ''
}

export default (state=initialState,action) => {
  switch(action.type){
    case 'LOGIN_REQUEST':
    case 'LOGIN_SUCCESS':
    case 'LOGIN_FAIL':
    default:
      return state;
  }
}

export const login = (credentials) => (
  (dispatch) => {
    //llamar a loginReuest
  }
)