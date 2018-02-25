import React, { Component } from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import Shirt from "../components/Shirt";
import Pants from "../components/Pants";

class Main extends Component {
  static propTypes = {
    prediction: object,
    predictOutfit: func
  };

  componentDidMount() {
    this.props.predictOutfit();
  }

  render() {
    return (
      <div>
        <h1>Outfit Predictor</h1>
        <Shirt fill={this.props.prediction.shirt} />
        <Pants fill={this.props.prediction.pants} />
      </div>
    );
  }
}

const mapStateToProps = ({ prediction }) => ({ prediction });

export default connect(mapStateToProps, actions)(Main);
