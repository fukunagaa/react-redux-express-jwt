const express = require("express");
const router = express.Router();
const dbAccess = require("../db/dbAccess");
const { encode } = require("../utils/hash");
const { HTTPSTATUS } = require("../utils/constant");

/* POST signup listing. */
router.post("/", async (req, res, next) => {
  const { email, userName, password, firstName, lastName } = req.body;
  const countByEmail = await dbAccess.countByEmail(email);
  const countByName = await dbAccess.countByName(userName);
  console.log(firstName + lastName);
  if (countByEmail == 0 && countByName == 0) {
    const hashedPassword = encode(password);
    await dbAccess.insertAccount(email, userName, hashedPassword);
    res.status(HTTPSTATUS.SUCCESS.CODE).json(body);
  } else {
    res.status(HTTPSTATUS.CONFLICT.CODE).json({ message: HTTPSTATUS.CONFLICT.MESSAGE });
  }
});

module.exports = router;
