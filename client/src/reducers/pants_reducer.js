import {
  FETCH_PANTS_SUCCESS,
  FETCH_PANTS_FAIL,
  CREATE_PANTS_SUCCESS
} from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PANTS_SUCCESS:
      return action.payload;
    case CREATE_PANTS_SUCCESS:
      return [...state, action.payload];
    case FETCH_PANTS_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
