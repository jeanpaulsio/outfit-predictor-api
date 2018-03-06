import axios from "axios";
import { FETCH_OUTFITS_SUCCESS, FETCH_OUTFITS_FAIL } from "./types";

export const fetchOutfits = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/v1/outfits");
    dispatch({ type: FETCH_OUTFITS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_OUTFITS_FAIL });
  }
};
