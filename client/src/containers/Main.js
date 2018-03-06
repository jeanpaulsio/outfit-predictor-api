import React, { Component } from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import "./Main.css";

import * as actions from "../actions";
import Shirt from "../components/Shirt";
import Pants from "../components/Pants";

import Favicon from "react-favicon"

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
      <section className="main-container">
        <Favicon url={`static/favicons/${this.props.prediction.shirt}.png`} />
        <Shirt fill={this.props.prediction.shirt} />
        <Pants fill={this.props.prediction.pants} />
      </section>
    );
  }
}

const mapStateToProps = ({ prediction }) => ({ prediction });

export default connect(mapStateToProps, actions)(Main);
