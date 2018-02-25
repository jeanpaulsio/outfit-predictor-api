import axios from "axios";
import { PREDICT_OUTFIT_SUCCESS, PREDICT_OUTFIT_FAIL } from "./types";

export const predictOutfit = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/v1/predict");
    dispatch({ type: PREDICT_OUTFIT_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PREDICT_OUTFIT_FAIL });
  }
};
