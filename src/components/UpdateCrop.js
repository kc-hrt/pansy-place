import React, { Component } from "react";
import axios from "axios";

import { Container, TextField, Button } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
// import UpdateIcon from "@material-ui/icons/Update";

let cropsURL = "http://api.fotohut.org:42001/crops";

class UpdateCrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      crop: [],
      plants: [],
      updateCount: "",
      heading: "Update Crop",
    };
  }
  async componentDidMount() {
    console.log("🏹", cropsURL);
    cropsURL = cropsURL + this.props.match.params.id;
    console.log("🪃", this.props.match.params, cropsURL);
    console.log("mounted 🌵", this.state.crop);
    const res = await fetch(cropsURL);
    const data = await res.json();
    console.log("🌸🦋", data);
    this.setState({
      crop: data,
    });
    console.log("🍄", this.state);
  }
  // DeleayComponent = () => {
  //   const [show, setShow] = React.useState(false);
  // };

  componentDidUpdate() {
    console.log("updated Crop ☀️", this.state.crop);
  }

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const putData = {
      available_quantity: this.state.updateCount,
    };
    console.log("🚀🦷", putData, URL);

    axios({
      method: "PUT",
      url: URL,
      timeout: 9000,
      data: putData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      setTimeout(() => {
        console.log("World!");
        window.location.replace("/Availability");
      }, 1000)
    );

    // .then(window.location.replace("/Availability"));

    // window.location.replace("/Availability");
  };

  render() {
    const { id } = this.props.match.params;
    console.log("🌾", this.state.crop);
    return (
      <Container maxWidth="lg" fixed>
        <h2 style={{ textAlign: "center", fontSize: "50px" }}>
          {this.state.heading} - {id}
        </h2>
        {this.state.crop.map((crop, idx) => (
          <Container maxWidth="sm" key={idx}>
            <h4 style={{ textAlign: "center", fontSize: "30px" }}>
              {crop["plant_name"]} - {crop["plant_variant"]}
            </h4>
            <h3 style={{ textAlign: "center", fontSize: "40px" }}>
              {crop["plant_color"]}
            </h3>
            <h5 style={{ textAlign: "center", fontSize: "20px" }}>
              {crop["available_quantity"]}
            </h5>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.updateCount}
                name="updateCount"
                label={crop["available_quantity"]}
                type="text"
              />
              <Button
                type="submit"
                className="submit-button"
                variant="contained"
                color="primary"
              >
                Update Availability
              </Button>
            </form>
          </Container>
        ))}
      </Container>
    );
  }
}
export default UpdateCrop;
