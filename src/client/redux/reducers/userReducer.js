import { userInitialState } from "../initialState";
import { LOAD_LOGIN_PENDING, LOAD_LOGIN_FULFILLED, LOAD_LOGIN_REJECTED } from "../actionTypes";

export default function (state = userInitialState, action) {
  switch (action.type) {
    case LOAD_LOGIN_FULFILLED:
      const { data } = action.payload;
      console.log(data);
      return {
        ...state,
        // isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
}
