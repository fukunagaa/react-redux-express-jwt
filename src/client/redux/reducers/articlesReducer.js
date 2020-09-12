import { articlesInitialState } from "../initialState";
import { POST_ARTICLE_FULFILLED } from "../actionTypes";

export default function (state = articlesInitialState, action) {
  switch (action.type) {
    case POST_ARTICLE_FULFILLED:
      console.log(action.payload);
      return { ...state };
    default:
      return { ...state };
  }
}
