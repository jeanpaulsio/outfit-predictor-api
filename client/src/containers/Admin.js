import React, { Component } from "react";
import { array, func } from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Grid,
  Header,
  Input,
  Table
} from "semantic-ui-react";

import * as actions from "../actions";
import "./Admin.css";

class Admin extends Component {
  static propTypes = {
    outfits: array,
    shirts: array,
    pants: array,
    fetchOutfits: func,
    fetchShirts: func,
    fetchPants: func,
    createOutfit: func
  };

  initialState = {
    date: "",
    selectedShirt: "",
    selectedPants: ""
  };

  state = this.initialState;

  componentDidMount() {
    this.props.fetchOutfits();
    this.props.fetchShirts();
    this.props.fetchPants();
  }

  handleSelectDate = e => {
    this.setState({ date: e.target.value });
  };

  handleSelectShirt = (e, { value }) => {
    this.setState({ selectedShirt: value });
  };

  handleSelectPants = (e, { value }) => {
    this.setState({ selectedPants: value });
  };

  handleSubmitOutfit = e => {
    e.preventDefault();

    const params = {
      shirt_id: this.state.selectedShirt,
      pant_id: this.state.selectedPants,
      date: this.state.date
    };

    this.props.createOutfit(params, () => this.setState(this.initialState));
  };

  render() {
    const currentDayOfWeek = moment().format("ddd");

    const shirts = this.props.shirts.slice(0).map(shirt => ({
      ...shirt,
      key: shirt.id,
      value: shirt.id,
      text: shirt.color.name
    }));

    const pants = this.props.pants.slice(0).map(pant => ({
      ...pant,
      key: pant.id,
      value: pant.id,
      text: pant.color.name
    }));

    const isDisabled =
      this.state.length === this.initialState.date ||
      this.state.selectedShirt === this.initialState.selectedShirt ||
      this.state.selectedPants === this.initialState.selectedPants;

    return (
      <section>
        <Container style={{ padding: "5em 0em" }}>
          <Grid columns={2} stackable>
            <Grid.Column>
              <Header as="h1">Add Outfit</Header>
              <Form onSubmit={this.handleSubmitOutfit}>
                <Form.Field>
                  <Input
                    type="date"
                    placeholder="Date"
                    value={this.state.date}
                    onChange={this.handleSelectDate}
                  />
                </Form.Field>
                <Form.Field>
                  <Dropdown
                    search
                    selection
                    placeholder="Shirt Color"
                    value={this.state.selectedShirt}
                    options={shirts}
                    onChange={this.handleSelectShirt}
                  />
                </Form.Field>
                <Form.Field>
                  <Dropdown
                    search
                    selection
                    placeholder="Pants Color"
                    value={this.state.selectedPants}
                    options={pants}
                    onChange={this.handleSelectPants}
                  />
                </Form.Field>
                <Button primary type="submit" disabled={isDisabled}>
                  Submit
                </Button>
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

const mapStateToProps = state => ({
  outfits: state.outfits,
  shirts: state.shirts,
  pants: state.pants
});

export default connect(mapStateToProps, actions)(Admin);
