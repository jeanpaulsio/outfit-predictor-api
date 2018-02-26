import React, { Component } from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import ColorChip from "../components/ColorChip";

class ColorsIndex extends Component {
  static propTypes = {
    fetchColors: func,
    colors: array
  };

  componentDidMount() {
    this.props.fetchColors();
  }

  render() {
    return (
      <div>
        <h1>Color Index</h1>

        {
          this.props.colors.map(color => {
            return (
              <ColorChip key={color.name} backgroundColor={color.hex} />
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = ({ colors }) => ({ colors });

export default connect(mapStateToProps, actions)(ColorsIndex);
