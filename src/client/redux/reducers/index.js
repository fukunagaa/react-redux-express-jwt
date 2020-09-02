import { combineReducers } from "redux";
import user from "./userReducer";
import dummy from "./dummyReducer";

export default combineReducers({ user, dummy });
