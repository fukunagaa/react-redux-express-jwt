import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Login from "./components/Login";

const App = () => {
  const user = useSelector((state) => state.user);
  console.log("isLogin : " + user.isLogin);
  return (
    <Router>
      <Layout>
        <Route exact path="/">
          <Login />
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
