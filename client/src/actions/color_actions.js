import axios from "axios";
import { FETCH_COLORS_SUCCESS, FETCH_COLORS_FAIL } from "./types";

export const fetchColors = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/v1/colors");
    dispatch({ type: FETCH_COLORS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_COLORS_FAIL });
  }
}
