import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

const availURL = "http://api.fotohut.org:42001/availability";

class Availability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      availability: [],
      plants: [],
      heading: "Current Availability",
    };
  }
  async componentDidMount() {
    console.log("mounted 🌵", this.state.availability);
    const res = await fetch(availURL);
    const data = await res.json();
    console.log("🌸🦋", data);
    this.setState({
      availability: data,
    });
    console.log("🍄", this.state);
  }

  componentDidUpdate() {
    console.log("updated availability☀️", this.state.availability);
  }

  render() {
    return (
      <Container maxWidth="lg" fixed>
        <h2 style={{ textAlign: "center", fontSize: "50px" }}>
          {this.state.heading}
        </h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Plant Name - Variant</TableCell>
              <TableCell>Color</TableCell>
              <TableCell># Available</TableCell>
              {document.cookie === "loggedIn=true" ? (
                <TableCell>Update</TableCell>
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.availability.map((plant, idx) => (
              <TableRow key={plant["crop_id"]}>
                <TableCell>
                  {plant["plant_name"]} - {plant["plant_variant"]}
                </TableCell>
                <TableCell>{plant["plant_color"]}</TableCell>
                {document.cookie === "loggedIn=true" ? (
                  <TableCell>{plant["available_quantity"]}</TableCell>
                ) : (
                  <TableCell>{plant["available_quantity"]}</TableCell>
                )}
                {document.cookie === "loggedIn=true" ? (
                  <TableCell>
                    <Link to={"/UpdateCrop/" + plant["crop_id"]}>
                      <UpdateIcon style={{ color: "green" }} />
                    </Link>
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    );
  }
}
export default Availability;
