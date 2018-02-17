
/*const initialState ={
  hotels: []
}*/

export default (state=[],action) => {
  switch(action.type){
    case 'FETCH_HOTEL_SUCCESS':
      return [...state,...action.data];
    case 'HOTEL_FILTERED_SUCCESS':
      return [action.data];
    case 'STAR_HOTEL_SUCCESS':
      return [...action.data];
    default:
      return state;
  }
}

const getHotelsSuccess = (data) => ({
  type: 'FETCH_HOTEL_SUCCESS',
  data
});

const getFilterHotelSuccess = (data) => ({
  type: 'HOTEL_FILTERED_SUCCESS',
  data
});

const getFilterByStarSuccess = (data) => ({
  type: 'STAR_HOTEL_SUCCESS',
  data
});

export const fetchHotels = () => {
  return (dispatch) => {
    fetch('/api/hotels',{
    method: 'get',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(({data}) => {
      dispatch(getHotelsSuccess(data));
    });
  }
}

export const filterHoltes = (hotelName) => {
 return (dispatch) => {
     fetch('/api/hotel',{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hotelName)
    })
    .then(response => response.json())
    .then(({data}) => {
      dispatch(getFilterHotelSuccess(data));
    });
  }
}

export const filterHoltesByStars = (stars) => {
 return (dispatch) => {
     fetch('/api/hotel_stars',{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stars)
    })
    .then(response => response.json())
    .then(({data}) => {
      dispatch(getFilterByStarSuccess(data));
    });
  }
}