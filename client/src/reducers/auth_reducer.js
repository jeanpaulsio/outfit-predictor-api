import { AUTHENTICATE_SUCCESS, AUTHENTICATE_FAIL } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      return action.payload;
    case AUTHENTICATE_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
}
