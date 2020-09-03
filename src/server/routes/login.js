const express = require("express");
const router = express.Router();
const dbAccess = require("../db/dbAccess");
const { encode, compare } = require("../utils/hash");
const { ADMIN_ROLE, USER_ROLE } = require("../utils/constant");

/* POST login listing. */
router.post("/", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  const hashPassword = encode(password);
  console.log(hashPassword);
  const userInfo = await dbAccess.userAuthentication(email);
  console.log(userInfo);
  if (userInfo == undefined || userInfo == null) {
    res.status(401).json({ message: "User is not found" });
  } else {
    const isLogin = await compare(password, userInfo.password);
    if (isLogin) {
      const roles = userInfo.roles.split(",");
      let isAdmin = false;
      let isUser = false;
      roles.forEach(function (value) {
        if (value == ADMIN_ROLE) {
          isAdmin = true;
        }
        if (value == USER_ROLE) {
          isUser = true;
        }
      });
      const body = {
        email: userInfo.email,
        userName: userInfo.name,
        isLogin,
        isAdmin,
        isUser,
      };
      res.status(200).json(body);
    } else {
      res.status(401).json({ message: "Authentication error" });
    }
  }
});

module.exports = router;
