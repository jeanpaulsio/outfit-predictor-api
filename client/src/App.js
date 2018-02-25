import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  async componentDidMount() {
    const { data } = await axios.get("/api/v1/predict")
    console.log("data", data)
  }

  render() {
    return (
      <div>
        Outfit Predictor
      </div>
    );
  }
}

export default App;
