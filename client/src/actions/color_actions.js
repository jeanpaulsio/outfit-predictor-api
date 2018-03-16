import axios from "axios";
import {
  FETCH_COLORS_SUCCESS,
  FETCH_COLORS_FAIL,
  CREATE_COLOR_SUCCESS,
  CREATE_COLOR_FAIL
} from "./types";

export const fetchColors = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/v1/colors");
    dispatch({ type: FETCH_COLORS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_COLORS_FAIL });
  }
}

export const createColor = params => async dispatch => {
  try {
    const { data } = await axios.post("/api/v1/colors", params);
    dispatch({ type: CREATE_COLOR_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: CREATE_COLOR_FAIL })
  }
}
