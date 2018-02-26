import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "./Main";
import ColorPicker from "./ColorPicker";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/color-picker">Color Picker</Link></li>
        </ul>
        <Route exact path="/" component={Main} />
        <Route exact path="/color-picker" component={ColorPicker} />
      </div>
    </BrowserRouter>
  );
}

export default Router;
