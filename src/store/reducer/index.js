import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  state: weatherReducer,
});

export default rootReducer;
