const bcrypt = require("bcrypt");

module.exports = {
  /**
   * パスワードを入力し、エンコードして返却する
   */
  encode: (password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword;
  },
  /**
   * 入力されたパスワードとエンコードしたパスワードを比較する
   */
  compare: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  },
};
