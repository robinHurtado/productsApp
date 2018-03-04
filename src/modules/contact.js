import { hideLoader } from './isFetching'

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
    .then(() =>
      dispatch(hideLoader())
    );
  }
}

