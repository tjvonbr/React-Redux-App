import axios from 'axios';

export const FETCHING_LIST_DATA_START = 'FETCHING_LIST_DATA_START';
export const FETCHING_LIST_DATA_SUCCESS = 'FETCHING_LIST_DATA_SUCCESS';
export const FETCHING_LIST_DATA_FAILURE = 'FETCHING_LIST_DATA_FAILURE';


export const getData = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_LIST_DATA_START });
    axios
      .get('https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200560643-d939da199994aa1b7e0145759da44932')
      .then(response => {
        dispatch({ type: FETCHING_LIST_DATA_SUCCESS, payload: response.data.trails })
      })
      .catch(error => {
        dispatch({ type: FETCHING_LIST_DATA_FAILURE, payload: error.response })
      });
  }; 
};