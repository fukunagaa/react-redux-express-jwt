import { LOAD_LOGIN, SIGNUP, CHANGE_STATUS } from "./actionTypes";
import axios from "axios";

/**
 * メールアドレスとパスワードを入力してサーバからログイン情報を取得する
 * @param {クエリー} param0
 */
export const loadLogin = ({ email, password }) => {
  return {
    type: LOAD_LOGIN,
    payload: axios.post("/login", { email, password }),
  };
};

/**
 * メールアドレス、パスワード、ユーザ名、ファーストネーム、ラストネームを入力してサインアップする
 * @param {クエリー} param0
 */
export const signupRequest = ({ email, userName, password, firstName, lastName }) => {
  return {
    type: SIGNUP,
    payload: axios.post("/signup", { email, userName, password, firstName, lastName }),
  };
};

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
