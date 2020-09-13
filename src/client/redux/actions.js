import {
  LOAD_LOGIN,
  SIGNUP,
  CHANGE_STATUS,
  POST_ARTICLE,
  FETCH_ALL_ARTICLE,
  ADD_RECEIVED_ARTICLE,
} from "./actionTypes";
import axios from "axios";

/**
 * メールアドレスとパスワードを入力してサーバからログイン情報を取得する
 * @param {Eメールアドレス} email
 * @param {パスワード} password
 */
export const loadLogin = ({ email, password }) => {
  return {
    type: LOAD_LOGIN,
    payload: axios.post("/login", { email, password }),
  };
};

/**
 * メールアドレス、パスワード、ユーザ名、ファーストネーム、ラストネームを入力してサインアップする
 * @param {Eメールアドレス} email
 * @param {ユーザ名} userName
 * @param {パスワード} password
 * @param {性} firstName
 * @param {名} lastName
 */
export const signupRequest = ({ email, userName, password, firstName, lastName }) => {
  return {
    type: SIGNUP,
    payload: axios.post("/signup", { email, userName, password, firstName, lastName }),
  };
};

/**
 *
 * @param {ログインフラグ} isLogin
 * @param {管理者フラグ} isAdmin
 * @param {ユーザフラグ} isUser
 */
export const changeLoginStatus = ({ isLogin, isAdmin, isUser }) => {
  return {
    type: CHANGE_STATUS,
    payload: {
      isLogin,
      isAdmin,
      isUser,
    },
  };
};

/**
 * タイトル、内容、画像を登録する
 * @param {タイトル} title
 * @param {内容} contents
 * @param {画像} image
 */
export const postArticleRequest = ({ title, contents, image }) => {
  return {
    type: POST_ARTICLE,
    payload: axios.post("/article/create", { title, contents, image }),
  };
};

export const fethAllArticles = () => {
  return {
    type: FETCH_ALL_ARTICLE,
    payload: axios.post("/article/fetchAll"),
  };
};

export const addReceivedArticle = ({ article }) => {
  return {
    type: ADD_RECEIVED_ARTICLE,
    payload: {
      article,
    },
  };
};
