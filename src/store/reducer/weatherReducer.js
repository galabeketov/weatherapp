import { ADD_DATA, FILTER_REGIONS } from "../const";
const initialState = {};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        weather: action.payload,
      };
    case FILTER_REGIONS:
    default:
      return state;
  }
};

export default weatherReducer;
