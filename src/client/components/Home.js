import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { changeLoginStatus } from "../redux/actions";
import { Redirect } from "react-router";

const Home = () => {
  const [redirectTo, setRedirectTo] = useState(false);
  const dispach = useDispatch();
  useEffect(() => {
    axios
      .get("/login/ok")
      .then((res) => {
        console.log(res.status);
      })
      .catch(() => {
        console.log("catch!!");
        dispach(changeLoginStatus({ isLogin: false, isAdmin: false, isUser: false }));
        setRedirectTo(true);
      });
  });
  if (redirectTo) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <h1>Home Screen</h1>
      </div>
    );
  }
};

export default Home;
