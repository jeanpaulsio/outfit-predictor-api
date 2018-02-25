import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "../reducers";

const middlewares =
  "development" === process.env.NODE_ENV ? [thunk, logger] : [thunk];

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

export default store;
