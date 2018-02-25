import React from "react";
import ReactDOM from "react-dom";
import Router from "./containers/Router";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.css";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
