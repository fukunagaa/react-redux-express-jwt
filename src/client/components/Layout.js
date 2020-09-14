import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { SocketProvider } from "./SocketProvider";

const Layout = ({ location, children }) => {
  console.log(location);
  return (
    <div>
      <NavBar location={location} />
      <SocketProvider>
        <div>{children}</div>
      </SocketProvider>
    </div>
  );
};

export default withRouter(Layout);
