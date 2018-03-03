/*const initialState = {
  isFetching: false
}

export default (state=initialState,action) => {
  switch(action.type){
    case 'SEND_DATA_SUCCES':
      return {isFetching: true};
    default:
      return state;
  }
}

export const sendDataSucces = () => ({
  type: 'SEND_DATA_SUCCES'
});
*/

export const sendData = (data) => {
  return (dispatch) => {
    fetch('/api/contact',{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
//    .then(() => dispatch(sendDataSucces()))
  }
}

