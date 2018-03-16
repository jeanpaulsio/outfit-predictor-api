import {
  FETCH_SHIRTS_SUCCESS,
  FETCH_SHIRTS_FAIL,
  CREATE_SHIRT_SUCCESS
} from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHIRTS_SUCCESS:
      return action.payload;
    case CREATE_SHIRT_SUCCESS:
      return [...state, action.payload];
    case FETCH_SHIRTS_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
