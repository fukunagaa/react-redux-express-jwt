import { userInitialState } from "../initialState";
import {
  LOAD_LOGIN_FULFILLED,
  LOAD_LOGIN_REJECTED,
  SIGNUP_FULFILLED,
  SIGNUP_REJECTED,
  CHANGE_STATUS,
} from "../actionTypes";

export default function (state = userInitialState, action) {
  switch (action.type) {
    case LOAD_LOGIN_FULFILLED:
      const { data } = action.payload;
      console.log(data);
      return {
        ...state,
        isLogin: data.isLogin,
        isAdmin: data.isAdmin,
        isUser: data.isUser,
      };
    case LOAD_LOGIN_REJECTED:
      return {
        ...state,
      };
    case SIGNUP_FULFILLED:
      return {
        ...state,
        signupState: {
          message: "アカウントが作成されました。",
          errorFlag: false,
        },
      };
    case SIGNUP_REJECTED:
      return {
        ...state,
        signupState: {
          message: "** アカウントが既に存在します **",
          errorFlag: true,
        },
      };
    case CHANGE_STATUS:
      const { isLogin, isAdmin, isUser } = action.payload;
      return {
        ...state,
        isLogin,
        isAdmin,
        isUser,
      };
    default:
      return state;
  }
}
