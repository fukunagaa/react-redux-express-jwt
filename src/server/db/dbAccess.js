const { Client } = require("pg");
const { postgres } = require("../utils/config");

let client;

module.exports = {
  /**
   * Eメールアドレスを入力しユーザ情報を1件取得する
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
};
