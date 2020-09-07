const express = require("express");
const router = express.Router();
const dbAccess = require("../db/dbAccess");
const { encode, compare } = require("../utils/hash");
const { ADMIN_ROLE, USER_ROLE, HTTPSTATUS } = require("../utils/constant");
const { cookie } = require("../utils/config");

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
    res.status(HTTPSTATUS.UNAUTHORIZED.CODE).json({ message: HTTPSTATUS.UNAUTHORIZED.MESSAGE });
  } else {
    const isLogin = await compare(password, userInfo.password);
    if (isLogin) {
      const roles = userInfo.roles.split(",");
      let isAdmin = false;
      let isUser = false;
      roles.forEach((role) => {
        if (role == ADMIN_ROLE) {
          isAdmin = true;
        }
        if (role == USER_ROLE) {
          isUser = true;
        }
      });
      req.session.name = userInfo.name;
      req.session.email = userInfo.email;
      req.session.isAdmin = isAdmin;
      req.session.isUser = isUser;
      req.session.cookie.maxAge = cookie.maxAge;
      const body = {
        email: userInfo.email,
        userName: userInfo.name,
        isLogin,
        isAdmin,
        isUser,
      };
      res.status(HTTPSTATUS.SUCCESS.CODE).json(body);
    } else {
      res.status(HTTPSTATUS.UNAUTHORIZED.CODE).json({ message: HTTPSTATUS.UNAUTHORIZED.MESSAGE });
    }
  }
});

module.exports = router;
