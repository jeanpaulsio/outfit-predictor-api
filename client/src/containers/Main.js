import React, { Component } from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";
import Favicon from "react-favicon";
import moment from "moment";
import { Header, Container } from "semantic-ui-react";
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

  handleNoPrediction = () => {
    const date = moment().format("dddd");
    const isWeekend = date === "Sunday" || date === "Saturday";

    if (isWeekend) {
      return (
        <Container>
          <Header as="h3" textAlign="center">
            Sorry! No weekend predictions! :(
          </Header>
        </Container>
      );
    }

    return null;
  };

  render() {
    if (!this.props.prediction.shirt) return this.handleNoPrediction();

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
