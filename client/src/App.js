import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Shirt from "./components/Shirt";
import Pants from "./components/Pants";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
  state = { data: {} };

  async componentDidMount() {
    const { data } = await axios.get("/api/v1/predict");
    console.log("data", data);
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <h1>Outfit Predictor</h1>
        <Shirt fill={this.state.data.shirt} />
        <Pants fill={this.state.data.pants} />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
