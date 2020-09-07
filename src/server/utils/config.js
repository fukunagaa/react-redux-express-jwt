module.exports = {
  postgres: {
    option: {
      user: "postgres",
      password: "postgres",
      host: "localhost",
      port: "5432",
      database: "expressjwt",
    },
  },
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 30,
  },
};
