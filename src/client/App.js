import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import PostArticle from "./pages/PostArticle";
import GetArticle from "./pages/GetArticle";

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
        <Route exact path="/getArticle">
          <GetArticle />
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
