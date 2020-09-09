import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router";

const Home = () => {
  const dispach = useDispatch();
  return (
    <div>
      <h1>PostArticle Screen</h1>
      <div>
        <form method="post" action="/postArticle">
          <input type="text" />
          <input type="text" />
          <input type="file" accept="image/*" />
          <button type="submit">投稿する</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
