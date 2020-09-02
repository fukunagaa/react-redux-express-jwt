const express = require("express");
const router = express.Router();

/* POST login listing. */
router.post("/", function (req, res, next) {
  console.log(req.body);
  const body = {
    email: "admin@example.com",
  };
  res.status(200).json(body);
});

module.exports = router;
