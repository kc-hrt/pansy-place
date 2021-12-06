import React, { Component } from "react";
import axios from "axios";

import { Container, TextField, Button } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
// import UpdateIcon from "@material-ui/icons/Update";

let plantsURL = "http://api.fotohut.org:42001/plants";

class AddPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      crop: [],
      plants: [],
      updatePlants: "",
      addPlantName: "",
      addPlantVariant: "",
      addPlantColor: "",
      heading: "Add Plants",
    };
  }

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const pushData = {
      plant_name: this.state.addPlantName,
      plant_variant: this.state.addPlantVariant,
      plant_color: this.state.addPlantColor,
    };
    console.log("🚀🦷", pushData, plantsURL);

    axios({
      method: "POST",
      url: plantsURL,
      timeout: 9000,
      data: pushData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      setTimeout(() => {
        console.log("🌍");
        // window.location.replace("/Admin");
      }, 800)
    );
  };

  render() {
    console.log("🌾", this.state.plants);
    return (
      <Container maxWidth="lg" fixed>
        <h2 style={{ textAlign: "center", fontSize: "50px" }}>
          {this.state.heading}
        </h2>

        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.addPlantName}
              name="addPlantName"
              label="Plant Name - Ex. Pansy"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.addPlantVariant}
              name="addPlantVariant"
              label="Plant Variety - Ex. Delta"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.addPlantColor}
              name="addPlantColor"
              label="Plant Color - Ex. Pure White"
              type="text"
            />
            <Button
              type="submit"
              className="submit-button"
              variant="contained"
              color="primary"
            >
              Add Plant
            </Button>
          </form>
        </Container>
      </Container>
    );
  }
}
export default AddPlant;
