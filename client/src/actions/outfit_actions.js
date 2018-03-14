import axios from "axios";
import {
  FETCH_OUTFITS_SUCCESS,
  FETCH_OUTFITS_FAIL,
  CREATE_OUTFITS_SUCCESS,
  CREATE_OUTFITS_FAIL,
  FETCH_SHIRTS_SUCCESS,
  FETCH_SHIRTS_FAIL,
  FETCH_PANTS_SUCCESS,
  FETCH_PANTS_FAIL
} from "./types";

export const fetchOutfits = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/v1/outfits");
    dispatch({ type: FETCH_OUTFITS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_OUTFITS_FAIL });
  }
};

export const fetchShirts = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/v1/shirts");
    dispatch({ type: FETCH_SHIRTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_SHIRTS_FAIL });
  }
};

export const fetchPants = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/v1/pants");
    dispatch({ type: FETCH_PANTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_PANTS_FAIL });
  }
};

export const createOutfit = (params, callback) => async dispatch => {
  const headers = {
    "Content-Type": "application/json",
    "access_token": "3gnQt1U0_lq5aIBZjiHjsA",
    "token-type": "Bearer",
    client: "axYea7j5gV4bcCNzLdZgiA",
    expiry: "1522268043",
    uid: "sio.jeanpaul@gmail.com"
  };

  try {
    const { data } = await axios.post(
      `/api/v1/outfits?client=${headers["client"]}&uid=${
        headers["uid"]
      }&access-token=${headers["access_token"]}&expiry=${headers["expiry"]}`,
      params
    );
    dispatch({ type: CREATE_OUTFITS_SUCCESS, payload: data });
    callback();
  } catch (e) {
    dispatch({ type: CREATE_OUTFITS_FAIL });
  }
};
