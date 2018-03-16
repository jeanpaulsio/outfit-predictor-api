import {
  FETCH_COLORS_SUCCESS,
  FETCH_COLORS_FAIL,
  CREATE_COLOR_SUCCESS,
  CREATE_COLOR_FAIL
} from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLORS_SUCCESS:
      return action.payload;
    case CREATE_COLOR_SUCCESS:
      return [...state, action.payload];
    case FETCH_COLORS_FAIL:
      return INITIAL_STATE;
    case CREATE_COLOR_FAIL:
    default:
      return state;
  }
};
