import { combineReducers } from "redux";
import prediction from "./prediction_reducer";
import colors from "./color_reducer";
import outfits from "./outfit_reducer";
import shirts from "./shirt_reducer";
import pants from "./pants_reducer";

export default combineReducers({
  prediction,
  colors,
  outfits,
  shirts,
  pants
});
