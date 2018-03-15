import axios from "axios";
import { AUTHENTICATE_SUCCESS, AUTHENTICATE_FAIL } from "./types";

export const authenticate = (params, callback = () => {}) => async dispatch => {
  try {
    const { headers } = await axios.post("/api/v1/auth/sign_in", params);

    dispatch({ type: AUTHENTICATE_SUCCESS, payload: headers });
    callback();
  } catch (e) {
    dispatch({ type: AUTHENTICATE_FAIL });
  }
};
