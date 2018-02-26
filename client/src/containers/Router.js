import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "./Main";
import ColorsIndex from "./ColorsIndex";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/colors">Colors</Link></li>
        </ul>
        <Route exact path="/" component={Main} />
        <Route exact path="/colors" component={ColorsIndex} />
      </div>
    </BrowserRouter>
  );
}

export default Router;
