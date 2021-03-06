const express = require("express");
const router = express.Router();
const path = require("path");

const options = {
  root: path.join(__dirname, "..", "..", "..", "public"),
};

/* GET home page. */
router.get("/", (req, res, next) => {
  res.sendFile("index.html", options);
});

router.get("/postArticle", (req, res, next) => {
  res.sendFile("index.html", options);
});

router.get("/getArticle", (req, res, next) => {
  res.sendFile("index.html", options);
});

router.get("/chat", (req, res, next) => {
  res.sendFile("index.html", options);
});

router.get("/login", (req, res, next) => {
  res.sendFile("index.html", options);
});

router.get("/signup", (req, res, next) => {
  res.sendFile("index.html", options);
});

module.exports = router;
