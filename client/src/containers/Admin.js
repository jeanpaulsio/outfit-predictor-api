import React, { Component } from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

import * as actions from "../actions";
import "./Admin.css";

class Admin extends Component {
  static propTypes = {
    outfits: array,
    fetchOutfits: func
  };

  componentDidMount() {
    this.props.fetchOutfits();
  }

  render() {
    return (
      <section>
        {this.props.outfits.map(outfit => {
          return (
            <div key={outfit.id} className="outfit-list-item">
              <div className="date">{moment(outfit.date, "YYYY-MM-DD").format("MMM Do")}</div>
              <div className="shirt">
                Shirt:
                <div
                  className="hex-square"
                  style={{ backgroundColor: outfit.shirt_color.hex }}
                />
              </div>
              <div className="pant">
                Pants:
                <div
                  className="hex-square"
                  style={{ backgroundColor: outfit.pant_color.hex }}
                />
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = ({ outfits }) => ({ outfits });

export default connect(mapStateToProps, actions)(Admin);
