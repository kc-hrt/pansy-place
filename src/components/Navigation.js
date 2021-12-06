import React, { Component } from "react";
import { AppBar, Toolbar, Typography, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  logOutUser = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=false;max-age=0*0";
    window.location.replace("/login");
    console.log("🚽");
  };

  render() {
    return (
      <AppBar position="static" style={{ backgroundColor: "green" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none" }} to="/">
              Pansy Place
            </Link>
          </Typography>
          <List className="nav">
            <ListItem className="nav-item">
              <Link style={{ textDecoration: "none" }} to="/Availability">
                Availability
              </Link>
            </ListItem>
            <ListItem className="nav-item">
              {document.cookie === "loggedIn=true" ? (
                <Link style={{ textDecoration: "none" }} to="/Admin">
                  Admin
                </Link>
              ) : null}
            </ListItem>
            <ListItem className="nav-item">
              {document.cookie === "loggedIn=true" ? (
                <Link
                  style={{ textDecoration: "none" }}
                  to="/logout"
                  onClick={this.logOutUser}
                >
                  Logout
                </Link>
              ) : (
                <Link style={{ textDecoration: "none" }} to="/login">
                  {" "}
                  Login{" "}
                </Link>
              )}
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    );
  }
}
