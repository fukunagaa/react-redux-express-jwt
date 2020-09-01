import React from "react";
import { withRouter } from "react-router-dom";

const Layout = ({ location, children }) => {
  console.log(location);
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default withRouter(Layout);
