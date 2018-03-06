import { combineReducers } from "redux";
import prediction from "./prediction_reducer";
import colors from "./color_reducer";
import outfits from "./outfit_reducer";

export default combineReducers({
  prediction,
  colors,
  outfits
});
