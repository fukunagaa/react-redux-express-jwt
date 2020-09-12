const express = require("express");
const path = require("path");
const session = require("express-session");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const redisClient = redis.createClient(6379, "192.168.56.101");
const logger = require("morgan");
const { cookie } = require("./utils/config");
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");
const articleRouter = require("./routes/article");

const app = express();

app.use(
  session({
    secret: "secret",
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false,
    cookie: cookie,
  })
);

app.use(logger("dev"));
app.use(express.json({ limit: 100000000 }));
app.use(express.urlencoded({ extended: true, limit: 100000000 }));
app.use(express.static(path.join("public")));

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/article", articleRouter);

const port = 3000;
app.listen(port, () => {
  console.log("on server :: http://localhost:" + port);
});
