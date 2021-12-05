import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing">
      <div className="masthead">
        <h2>Quality Above Quantity</h2>
        <Link style={{ textDecoration: "none" }} to="/Availability">
          View Current Availability
        </Link>
      </div>
    </div>
  );
};

export default Home;
