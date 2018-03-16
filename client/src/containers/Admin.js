import React, { Component } from "react";
import { array, func, object } from "prop-types";
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
import { ChromePicker } from "react-color";

import * as actions from "../actions";
import "./Admin.css";

class Admin extends Component {
  static propTypes = {
    auth: object,
    outfits: array,
    shirts: array,
    pants: array,
    colors: array,
    authenticate: func,
    fetchOutfits: func,
    fetchShirts: func,
    fetchPants: func,
    fetchColors: func,
    createOutfit: func,
    createColor: func,
    createShirt: func,
    createPants: func
  };

  initialState = {
    date: "",
    selectedShirt: "",
    selectedPants: "",
    password: "",
    colorName: "",
    hex: "000000",
    newShirtColor: "",
    newPantsColor: ""
  };

  state = this.initialState;

  componentDidMount = () => {
    this.props.fetchOutfits();
    this.props.fetchShirts();
    this.props.fetchPants();
    this.props.fetchColors();
  };

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

    const { auth } = this.props;

    const params = {
      shirt_id: this.state.selectedShirt,
      pant_id: this.state.selectedPants,
      date: this.state.date
    };

    const config = {
      client: auth.client,
      uid: auth.uid,
      token: auth.token,
      expiry: auth.expiry
    };

    this.props.createOutfit(params, config, () =>
      this.setState(this.initialState)
    );
  };

  handleAddColor = () => {
    this.props.createColor(
      {
        name: this.state.colorName,
        hex: this.state.hex
      },
      () => this.setState(this.initialState)
    );
  };

  handleAddShirt = () => {
    this.props.createShirt(
      {
        color_id: this.state.newShirtColor
      },
      () => this.setState(this.initialState)
    );
  };

  handleAddPants = () => {
    this.props.createPants(
      {
        color_id: this.state.newPantsColor
      },
      () => this.setState(this.initialState)
    );
  };

  handleSelectNewShirt = (e, { value }) => {
    this.setState({ newShirtColor: value });
  };

  handleSelectNewPants = (e, { value }) => {
    this.setState({ newPantsColor: value });
  };

  handleAuthentication = () => {
    this.props.authenticate(
      {
        email: "sio.jeanpaul@gmail.com",
        password: this.state.password
      },
      () => this.setState(this.initialState)
    );
  };

  render() {
    const currentDayOfWeek = moment().format("ddd");

    const shirts = this.props.shirts.map(shirt => ({
      ...shirt,
      key: shirt.id,
      value: shirt.id,
      text: shirt.color.name
    }));

    const pants = this.props.pants.map(pant => ({
      ...pant,
      key: pant.id,
      value: pant.id,
      text: pant.color.name
    }));

    const flattenedShirts = this.props.shirts.map(shirt => shirt.color.name);
    const flattenedPants = this.props.pants.map(pant => pant.color.name);

    const availableShirtColors = this.props.colors
      .filter(color => {
        return !flattenedShirts.includes(color.name);
      })
      .map(color => ({
        ...color,
        key: color.id,
        value: color.id,
        text: color.name
      }));

    const availablePantsColors = this.props.colors
      .filter(color => {
        return !flattenedPants.includes(color.name);
      })
      .map(color => ({
        ...color,
        key: color.id,
        value: color.id,
        text: color.name
      }));

    const isDisabled =
      this.state.length === this.initialState.date ||
      this.state.selectedShirt === this.initialState.selectedShirt ||
      this.state.selectedPants === this.initialState.selectedPants;

    const isAuthenticated = Object.keys(this.props.auth).length > 0;

    return (
      <section>
        <Container style={{ padding: "5em 0em" }}>
          <Grid columns={2} stackable>
            <Grid.Column>
              {!isAuthenticated && (
                <Form onSubmit={this.handleAuthentication}>
                  <Form.Field>
                    <Input
                      type="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <Button onClick={this.handleAuthentication}>
                      Authenticate
                    </Button>
                  </Form.Field>
                </Form>
              )}
              {isAuthenticated && (
                <section>
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
                  <Header as="h1">Add Color</Header>
                  <Form>
                    <Form.Field>
                      <Input
                        type="text"
                        placeholder="Color Name"
                        value={this.state.colorName}
                        onChange={e =>
                          this.setState({ colorName: e.target.value })
                        }
                      />
                    </Form.Field>
                    <Form.Field>
                      <ChromePicker
                        color={this.state.hex}
                        onChangeComplete={({ hex }) => this.setState({ hex })}
                      />
                    </Form.Field>
                    <Button primary type="submit" onClick={this.handleAddColor}>
                      Add Color
                    </Button>
                  </Form>
                  <Header as="h1">Add Shirt</Header>
                  <Form>
                    <Form.Field>
                      <Dropdown
                        search
                        selection
                        placeholder="Shirt Color"
                        value={this.state.newShirtColor}
                        options={availableShirtColors}
                        onChange={this.handleSelectNewShirt}
                      />
                    </Form.Field>
                    <Button primary type="submit" onClick={this.handleAddShirt}>
                      Add Shirt
                    </Button>
                  </Form>
                  <Header as="h1">Add Pants</Header>
                  <Form>
                    <Form.Field>
                      <Dropdown
                        search
                        selection
                        placeholder="Pants Color"
                        value={this.state.newPantsColor}
                        options={availablePantsColors}
                        onChange={this.handleSelectNewPants}
                      />
                    </Form.Field>
                    <Button primary type="submit" onClick={this.handleAddPants}>
                      Add Pants
                    </Button>
                  </Form>
                  <Header as="h1">Colors</Header>
                  {this.props.colors.map(color => {
                    return (
                      <div
                        key={color.id}
                        style={{
                          width: "100%",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: color.hex,
                          fontSize: "18px"
                        }}>
                        {color.name}
                      </div>
                    );
                  })}
                </section>
              )}
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
                            onMouseEnter={() =>
                              console.log(outfit.shirt_color.name)
                            }
                            className="hex-square"
                            style={{ backgroundColor: outfit.shirt_color.hex }}
                          />
                        </Table.Cell>
                        <Table.Cell>
                          <div
                            onMouseEnter={() =>
                              console.log(outfit.pant_color.name)
                            }
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
  auth: state.auth,
  outfits: state.outfits,
  shirts: state.shirts,
  pants: state.pants,
  colors: state.colors
});

export default connect(mapStateToProps, actions)(Admin);
