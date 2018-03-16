import qs from "qs";
import axios from "axios";
import {
  FETCH_OUTFITS_SUCCESS,
  FETCH_OUTFITS_FAIL,
  CREATE_OUTFITS_SUCCESS,
  CREATE_OUTFITS_FAIL,
  FETCH_SHIRTS_SUCCESS,
  FETCH_SHIRTS_FAIL,
  FETCH_PANTS_SUCCESS,
  FETCH_PANTS_FAIL,
  CREATE_SHIRT_SUCCESS,
  CREATE_SHIRT_FAIL,
  CREATE_PANTS_SUCCESS,
  CREATE_PANTS_FAIL
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

export const createShirt = (params, callback) => async dispatch => {
  try {
    const { data } = await axios.post("/api/v1/shirts", params);
    dispatch({ type: CREATE_SHIRT_SUCCESS, payload: data });
    callback();
  } catch (e) {
    dispatch({ type: CREATE_SHIRT_FAIL });
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

export const createPants = (params, callback) => async dispatch => {
  try {
    const { data } = await axios.post("/api/v1/pants", params);
    dispatch({ type: CREATE_PANTS_SUCCESS, payload: data });
    callback();
  } catch (e) {
    dispatch({ type: CREATE_PANTS_FAIL });
  }
};

export const createOutfit = (params, config, callback) => async dispatch => {
  try {
    const search = qs.stringify({
      client: config.client,
      uid: config.uid,
      token: config.token,
      expiry: config.expiry
    });
    const response = await axios.post(`/api/v1/outfits?${search}`, params);
    dispatch({ type: CREATE_OUTFITS_SUCCESS, payload: response.data });
    callback();
  } catch (e) {
    dispatch({ type: CREATE_OUTFITS_FAIL });
  }
};
