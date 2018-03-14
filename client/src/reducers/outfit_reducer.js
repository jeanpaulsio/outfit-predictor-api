import {
  FETCH_OUTFITS_SUCCESS,
  FETCH_OUTFITS_FAIL,
  CREATE_OUTFITS_SUCCESS
} from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_OUTFITS_SUCCESS:
      return action.payload;
    case CREATE_OUTFITS_SUCCESS:
      return [action.payload, ...state];
    case FETCH_OUTFITS_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
