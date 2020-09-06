import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ location, children }) => {
  console.log(location);
  return (
    <div>
      <NavBar location={location} />
      <div>{children}</div>
    </div>
  );
};

export default withRouter(Layout);
