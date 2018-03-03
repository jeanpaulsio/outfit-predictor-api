import React, { Component } from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { Container } from "semantic-ui-react";

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
      <Container>
        <h1>Outfit Predictor</h1>
        <h2>Today is a {moment().format('dddd')}</h2>
        <Shirt fill={this.props.prediction.shirt} />
        <Pants fill={this.props.prediction.pants} />
      </Container>
    );
  }
}

const mapStateToProps = ({ prediction }) => ({ prediction });

export default connect(mapStateToProps, actions)(Main);
