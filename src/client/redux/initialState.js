/**
 * ユーザ情報の状態
 */
export const userInitialState = {
  isLogin: false,
  isUser: false,
  isAdmin: false,
  signupState: {
    message: "",
    errorFlag: false,
  },
};

/**
 * 投稿情報の状態
 */
export const articlesInitialState = {
  articles: [],
  postArticleState: {
    message: "",
    errorFlag: false,
  },
};
