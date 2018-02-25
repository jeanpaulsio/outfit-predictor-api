import { PREDICT_OUTFIT_SUCCESS, PREDICT_OUTFIT_FAIL } from "../actions/types";

const INITIAL_STATE = {
  shirt: null,
  pants: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PREDICT_OUTFIT_SUCCESS:
      return action.payload;
    case PREDICT_OUTFIT_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};
