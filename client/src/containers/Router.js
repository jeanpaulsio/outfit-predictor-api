import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
    </BrowserRouter>
  )
}

export default Router;
