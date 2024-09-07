const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
