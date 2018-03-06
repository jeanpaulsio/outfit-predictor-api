import React, { Component } from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { Table } from "semantic-ui-react";

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
    const currentDayOfWeek = moment().format("ddd");

    return (
      <section>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Date</Table.HeaderCell>
              <Table.HeaderCell>Shirt</Table.HeaderCell>
              <Table.HeaderCell>Pants</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.outfits.map(outfit => {
              const outfitDay = moment(outfit.date, "YYYY-MM-DD").format("ddd");
              return (
                <Table.Row
                  key={outfit.id}
                  positive={currentDayOfWeek === outfitDay}
                >
                  <Table.Cell>
                    {moment(outfit.date, "YYYY-MM-DD").format("ddd MMM Do")}
                  </Table.Cell>
                  <Table.Cell>
                    <div
                      className="hex-square"
                      style={{ backgroundColor: outfit.shirt_color.hex }}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <div
                      className="hex-square"
                      style={{ backgroundColor: outfit.pant_color.hex }}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </section>
    );
  }
}

const mapStateToProps = ({ outfits }) => ({ outfits });

export default connect(mapStateToProps, actions)(Admin);
