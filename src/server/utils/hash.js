const bcrypt = require("bcrypt");

module.exports = {
  encode: (password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    return hashedPassword;
  },
  compare: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  },
};
