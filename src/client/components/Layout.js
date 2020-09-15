import React from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { SocketProvider } from "./SocketProvider";

/**
 * 画面のレイアウト
 * @param {パス} location
 * @param {子コンポーネント} children
 */
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
