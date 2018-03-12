import React, { Component } from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { Container, Form, Dropdown, Grid, Table } from "semantic-ui-react";

import * as actions from "../actions";
import "./Admin.css";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "af", value: "af", flag: "af", text: "Afghanistan" }
];

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
        <Container style={{ padding: "5em 0em" }}>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Form onSubmit={() => console.log("Submit")}>
                <Form.Input fluid label="Date" placeholder="Date" />
                <Dropdown
                  placeholder="Select Country"
                  fluid
                  search
                  selection
                  options={countryOptions}
                />
                <Form.Button>Submit</Form.Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
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
                    const outfitDay = moment(outfit.date, "YYYY-MM-DD").format(
                      "ddd"
                    );
                    return (
                      <Table.Row
                        key={outfit.id}
                        positive={currentDayOfWeek === outfitDay}>
                        <Table.Cell>
                          {moment(outfit.date, "YYYY-MM-DD").format(
                            "ddd MMM Do"
                          )}
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
            </Grid.Column>
          </Grid>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = ({ outfits }) => ({ outfits });

export default connect(mapStateToProps, actions)(Admin);
