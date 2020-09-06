import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import className from "classnames";
import navbarStyles from "../stylesheets/navbar.module.scss";

const NavBar = ({ location }) => {
  const user = useSelector((state) => state.user);
  const isLogin = user.isLogin;
  const homeClass = location.pathname === "/" ? navbarStyles.active : "";
  const aboutClass = location.pathname.match(/^\/about/) ? navbarStyles.active : "";
  const userClass = location.pathname.match(/^\/user/) ? navbarStyles.active : "";
  const adminClass = location.pathname.match(/^\/admin/) ? navbarStyles.active : "";
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
          <Link to="/">Home</Link>
        </li>
        <li className={aboutClass}>
          <Link to="/about">abort</Link>
        </li>
        <li className={userClass}>
          <Link to="/user">user</Link>
        </li>
        <li className={adminClass}>
          <Link to="/admin">admin</Link>
        </li>
        {rightNav}
      </ul>
    </nav>
  );
};

export default NavBar;
