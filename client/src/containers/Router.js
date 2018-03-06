import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DocumentTitle from "react-document-title";
import moment from "moment";

import Main from "./Main";
import ColorsIndex from "./ColorsIndex";

function Router() {
  return (
    <DocumentTitle title={moment().format("dddd MMM Do")}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/colors" component={ColorsIndex} />
        </div>
      </BrowserRouter>
    </DocumentTitle>
  );
}

export default Router;
