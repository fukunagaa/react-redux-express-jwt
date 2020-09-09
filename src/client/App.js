import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import PostArticle from "./components/PostArticle";

const App = () => {
  const { isLogin } = useSelector((state) => state.user);
  console.log("isLogin : " + isLogin);
  return (
    <Router>
      <Layout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          {isLogin ? <Redirect to={"/"} /> : <Login />}
        </Route>
        <Route exact path="/signup">
          {isLogin ? <Redirect to={"/"} /> : <Signup />}
        </Route>
        <Route exact path="/postArticle">
          <PostArticle />
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
