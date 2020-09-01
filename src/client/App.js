import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Test from "./components/Test";

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/">
          <Test />
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
