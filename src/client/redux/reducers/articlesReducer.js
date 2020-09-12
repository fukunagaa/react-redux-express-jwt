import { articlesInitialState } from "../initialState";
import { POST_ARTICLE_FULFILLED, FETCH_ALL_ARTICLE_FULFILLED } from "../actionTypes";

export default function (state = articlesInitialState, action) {
  switch (action.type) {
    case POST_ARTICLE_FULFILLED:
      const { data } = action.payload;
      return {
        ...state,
        postArticleState: {
          message: data.message,
          errorFlag: false,
        },
      };
    case FETCH_ALL_ARTICLE_FULFILLED:
      const { articles } = action.payload.data;
      console.log(articles);
      return {
        ...state,
        articles: articles,
      };
    default:
      return {
        ...state,
      };
  }
}
