import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import className from "classnames";
import navbarStyles from "../stylesheets/navbar.module.scss";

const NavBar = ({ location }) => {
  const user = useSelector((state) => state.user);
  const isLogin = user.isLogin;
  const homeClass = location.pathname === "/" ? navbarStyles.active : "";
  const postArticleClass = location.pathname.match(/^\/postArticle/) ? navbarStyles.active : "";
  const userClass = location.pathname.match(/^\/user/) ? navbarStyles.active : "";
  const getArticle = location.pathname.match(/^\/getArticle/) ? navbarStyles.active : "";
  const loginClass = location.pathname.match(/^\/login/) ? navbarStyles.active : "";
  const accountClass = location.pathname.match(/^\/account/) ? navbarStyles.active : "";
  const rightNav = isLogin ? (
    <li className={`${navbarStyles.account} ${accountClass}`}>
      <Link to="/account">アカウント</Link>
    </li>
  ) : (
    <li className={`${navbarStyles.login} ${loginClass}`}>
      <Link to="/login" className={navbarStyles.loginColor}>
        login
      </Link>
    </li>
  );
  return (
    <nav>
      <ul>
        <li className={homeClass}>
          <Link to="/">ホーム</Link>
        </li>
        <li className={postArticleClass}>
          <Link to="/postArticle">投稿</Link>
        </li>
        <li className={getArticle}>
          <Link to="/getArticle">閲覧</Link>
        </li>
        <li className={userClass}>
          <Link to="/user">ユーザ</Link>
        </li>
        {rightNav}
      </ul>
    </nav>
  );
};

export default NavBar;
