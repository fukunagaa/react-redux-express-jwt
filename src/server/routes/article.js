const express = require("express");
const router = express.Router();
const dbAccess = require("../db/dbAccess");
const { encode } = require("../utils/hash");
const { HTTPSTATUS } = require("../utils/constant");

/* POST article listing. */
router.post("/create", async (req, res, next) => {
  const { title, contents, image } = req.body;
  const date = new Date();
  if (req.session.cookie._expires > date) {
    req.session.updatedTime = date;
    await dbAccess.insertArticle(title, contents, image, req.session.name);
    res.status(HTTPSTATUS.CREATED.CODE).json({ message: HTTPSTATUS.CREATED.MESSAGE });
  } else {
    res.status(HTTPSTATUS.UNAUTHORIZED.CODE).json({ message: HTTPSTATUS.UNAUTHORIZED.MESSAGE });
  }
});

module.exports = router;
