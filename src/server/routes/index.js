const express = require("express");
const router = express.Router();
const path = require("path");

const options = {
  root: path.join(__dirname, "..", "..", "..", "public"),
};

/* GET home page. */
router.get("/*", (req, res, next) => {
  res.sendFile("index.html", options);
});

module.exports = router;
