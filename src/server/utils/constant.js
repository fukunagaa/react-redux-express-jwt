module.exports = {
  ADMIN_ROLE: "ADMIN_ROLE",
  USER_ROLE: "USER_ROLE",
  HTTPSTATUS: {
    SUCCESS: {
      CODE: 200,
      MESSAGE: "成功しました。",
    },
    CREATED: {
      CODE: 201,
      MESSAGE: "リクエストは完了しました。",
    },
    UNAUTHORIZED: {
      CODE: 401,
      MESSAGE: "認証エラー",
    },
    FORBIDDEN: {
      CODE: 403,
      MESSAGE: "アクセス権がありません。",
    },
    NOTFOUND: {
      CODE: 404,
      MESSAGE: "リソースが見つかりません。",
    },
    ERROR: {
      CODE: 500,
      MESSAGE: "サーバ内部でエラーが発生しました。",
    },
  },
};
