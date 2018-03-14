import { FETCH_SHIRTS_SUCCESS, FETCH_SHIRTS_FAIL } from "../actions/types";

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SHIRTS_SUCCESS:
      return action.payload;
    case FETCH_SHIRTS_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};

