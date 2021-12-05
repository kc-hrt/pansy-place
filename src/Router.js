import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import cookie from "cookie";

import Home from "./components/Home";
import Login from "./components/Login";
import Availability from "./components/Availability";
import Admin from "./components/Admin";
import UpdateCrop from "./components/UpdateCrop";

// Write checkAuth function here
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log("🍪", cookies);
  return cookies["loggedIn"] ? true : false;
};

// Check the cookies for a cookie called "loggedIn"
// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log("💤", rest);
  return (
    <Route
      // spread the rest of the props that are needed in this component
      {...rest}
      // define the value of the render method as a ternaory that checks to see if checkAuth returns true or false
      render={(props) =>
        checkAuth() === true ? (
          // if true render the component with all the props
          <Component {...props} />
        ) : (
          // if false, use the Redirect component to update the url to `/login` so they are redirected to the login component
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Availability" component={Availability} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute path="/Admin" component={Admin} />
      <ProtectedRoute path="/UpdateCrop/:id" component={UpdateCrop} />
    </Switch>
  );
};

export default Router;
