const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("public")));

app.use("/", indexRouter);
app.use("/login", loginRouter);

const port = 3000;
app.listen(port, () => {
  console.log("on server :: http://localhost:" + port);
});
