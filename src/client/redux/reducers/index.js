import { combineReducers } from "redux";
import user from "./userReducer";
import articles from "./articlesReducer";

export default combineReducers({ user, articles });
