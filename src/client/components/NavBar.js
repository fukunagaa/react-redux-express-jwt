import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import navbarStyles from "../stylesheets/navbar.module.scss";

/**
 * ナビゲーションバーを表示する
 * 表示されているパスからアクティブ状態を判断する
 * @param {パス} location
 */
const NavBar = ({ location }) => {
  const user = useSelector((state) => state.user);
  const isLogin = user.isLogin;
  const homeClass = location.pathname === "/" ? navbarStyles.active : "";
  const postArticleClass = location.pathname.match(/^\/postArticle/) ? navbarStyles.active : "";
  const chatClass = location.pathname.match(/^\/chat/) ? navbarStyles.active : "";
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
        ログイン
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
        <li className={chatClass}>
          <Link to="/chat">チャット</Link>
        </li>
        {rightNav}
      </ul>
    </nav>
  );
};

export default NavBar;
