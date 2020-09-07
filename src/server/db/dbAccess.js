const { Client } = require("pg");
const { postgres } = require("../utils/config");

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
      console.log(allRows);
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
};
