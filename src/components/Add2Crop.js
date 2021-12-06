import React, { Component } from "react";
import axios from "axios";

import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";

// import DeleteIcon from "@material-ui/icons/Delete";
// import UpdateIcon from "@material-ui/icons/Update";

const cropsURL = "http://localhost:42001/crops";
const plantsURL = "http://localhost:42001/plants";

class Add2Crop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      crop: [],
      plants: [],
      updatePlants: "0",
      addPlantID: "",
      heading: "Add Plants to Crop List",
    };
  }
  async componentDidMount() {
    console.log("🏹", plantsURL);
    // plantsURL = plantsURL + this.props.match.params.id;
    // console.log("🪃", this.props.match.params, plantsURL);
    console.log("mounted 🌵", this.state.plants);
    const res = await fetch(plantsURL);
    const getData = await res.json();
    console.log("🌸🦋", getData);
    this.setState({
      plants: getData,
    });
    console.log("🍄", this.state);
  }

  handleChange = (event) => {
    this.setState({ addPlantID: event.target.value });
    console.log("🏂", this.state.addPlantID);
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const pushData = {
      plant_id: this.state.addPlantID,
      available_quantity: this.state.updateCount,
    };
    console.log("🚀🦷", pushData, cropsURL);

    axios({
      method: "POST",
      url: cropsURL,
      timeout: 9000,
      data: pushData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      setTimeout(() => {
        console.log("🌍");
        // window.location.replace("/Admin");
      }, 1000)
    );
  };

  renderOptions() {
    return this.state.plants.map((plant, idx) => {
      console.log("🍕🥗", plant);
      console.log("👃", plant.id);
      return (
        <MenuItem
          label="Select a Plant"
          value={plant.id}
          key={idx}
          name={plant.plant_name}
        >
          {plant.plant_name} {plant.plant_variant} - {plant.plant_color}
        </MenuItem>
      );
    });
  }

  render() {
    console.log("🌾", this.state.plants);
    return (
      <Container maxWidth="lg" fixed>
        <h2 style={{ textAlign: "center", fontSize: "50px" }}>
          {this.state.heading}
        </h2>

        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <Select
              className="width50"
              value={this.state.addPlantID}
              onChange={this.handleChange}
            >
              {this.renderOptions()}
            </Select>
            <h3>Selected Plant {this.state.addPlantID}</h3>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.updateCount}
              name="updateCount"
              label="0"
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
export default Add2Crop;
