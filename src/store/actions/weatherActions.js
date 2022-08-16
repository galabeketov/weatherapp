import { ADD_DATA } from "../const";
import { dispatch } from "../store";

export const addWeather = (data) => {
  dispatch({
    type: ADD_DATA,
    payload: data,
  });
};
