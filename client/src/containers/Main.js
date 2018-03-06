import React, { Component } from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import Favicon from "react-favicon";
import "./Main.css";

import * as actions from "../actions";
import Shirt from "../components/Shirt";
import Pants from "../components/Pants";
import { chooseFavicon } from "../helpers/utils";

class Main extends Component {
  static propTypes = {
    prediction: object,
    predictOutfit: func
  };

  componentDidMount() {
    this.props.predictOutfit();
  }

  render() {
    if (!this.props.prediction.shirt) return null;

    const favicon = chooseFavicon(this.props.prediction.shirt);

    return (
      <section className="main-container">
        <Favicon url={favicon} />
        <Shirt fill={this.props.prediction.shirt} />
        <Pants fill={this.props.prediction.pants} />
      </section>
    );
  }
}

const mapStateToProps = ({ prediction }) => ({ prediction });

export default connect(mapStateToProps, actions)(Main);
