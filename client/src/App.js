import React, { Component } from "react";
import axios from "axios";

import Shirt from "./components/Shirt";
import Pants from "./components/Pants";

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
      </div>
    );
  }
}

export default App;
