import { combineReducers } from "redux";
import prediction from "./prediction_reducer";
import colors from "./colors_reducer";

export default combineReducers({
  prediction,
  colors
});
