const { Client } = require("pg");
const { postgres } = require("../utils/config");
const { encode } = require("../utils/hash");

let client;

module.exports = {
  /**
   * Eメールアドレスを入力してユーザ情報を1件取得する
   * @param {Eメールアドレス} email
   */
  userAuthentication: async function (email) {
    try {
      client = new Client(postgres.option);
      await client.connect();
      console.log("Connected successfully in async");
      const allRows = await client.query(
        "select email, name, password, roles from account_table where email=$1 AND delete_flag='0'",
        [email]
      );
      return allRows.rows[0];
    } catch (err) {
      console.log("DB Access Error: ", err);
    } finally {
      await client.end();
      console.log("finally");
    }
  },

  /**
   * Eメールアドレスを入力してレコードの数を取得する
   * @param {Eメールアドレス} email
   */
  countByEmail: async function (email) {
    try {
      client = new Client(postgres.option);
      await client.connect();
      console.log("Connected successfully in async");
      const allRows = await client.query("select count(*) from account_table where email=$1", [email]);
      return allRows.rows[0].count;
    } catch (err) {
      console.log("DB Access Error: ", err);
    } finally {
      await client.end();
      console.log("finally");
    }
  },

  /**
   * アカウント名を入力してレコードの数を取得する
   * @param {アカウント名} name
   */
  countByName: async function (name) {
    try {
      client = new Client(postgres.option);
      await client.connect();
      console.log("Connected successfully in async");
      const allRows = await client.query("select count(*) from account_table where name=$1", [name]);
      return allRows.rows[0].count;
    } catch (err) {
      console.log("DB Access Error: ", err);
    } finally {
      await client.end();
      console.log("finally");
    }
  },

  /**
   * Eメールアドレス、アカウント名、パスワードを入力してレコードを作成する
   * @param {Eメールアドレス} email
   * @param {アカウント名} name
   * @param {パスワード} password
   */
  insertAccount: async function (email, name, password) {
    try {
      client = new Client(postgres.option);
      await client.connect();
      console.log("Connected successfully in async");
      const allRows = await client.query("INSERT INTO account_table (email, name, password) VALUES($1, $2, $3)", [
        email,
        name,
        password,
      ]);
      return allRows.rowCount;
    } catch (err) {
      console.log("DB Access Error: ", err);
    } finally {
      await client.end();
      console.log("finally");
    }
  },

  /**
   * タイトル、内容、画像、ユーザ名を保存する。
   * @param {タイトル} title
   * @param {内容} contents
   * @param {画像の情報} encoded_image
   * @param {ユーザ名} userName
   */
  insertArticle: async function (title, contents, encoded_image, userName) {
    try {
      client = new Client(postgres.option);
      await client.connect();
      console.log("Connected successfully in async");
      const allRows = await client.query(
        "INSERT INTO article_table (title, contents, encoded_image, create_user) VALUES($1, $2, $3, $4)",
        [title, contents, encoded_image, userName]
      );
      return allRows.rowCount;
    } catch (err) {
      console.log("DB Access Error: ", err);
    } finally {
      await client.end();
      console.log("finally");
    }
  },

  /**
   * 全ての投稿情報を取得する
   */
  selectAllArticle: async function () {
    try {
      client = new Client(postgres.option);
      await client.connect();
      console.log("Connected successfully in async");
      const allRows = await client.query(
        "select title, contents, encoded_image as image, create_user from article_table"
      );
      return allRows.rows;
    } catch (err) {
      console.log("DB Access Error: ", err);
    } finally {
      await client.end();
      console.log("finally");
    }
  },
};
