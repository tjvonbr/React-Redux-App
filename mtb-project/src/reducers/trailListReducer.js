import { FETCHING_LIST_DATA_START, FETCHING_LIST_DATA_SUCCESS } from '../actions/trailListActions';

const initialState = {
  trails: [],
  isLoading: false,
  isSelected: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LIST_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_LIST_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trails: action.payload
      }
    default:
      return state;
  }
};