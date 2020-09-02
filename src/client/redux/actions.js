import { LOAD_LOGIN } from "./actionTypes";
import axios from "axios";

/**
 * メールアドレスとパスワードを入力してサーバからログイン情報を取得する
 * メールアドレス : email
 * パスワード : password
 */
export const loadLogin = ({ email, password }) => {
  return {
    type: LOAD_LOGIN,
    payload: axios.post("/login", { email, password }),
  };
};
