const express = require("express");
const { products, people } = require("./data");
const app = express();
const port = 3000;

app.get("/", (res, req) => {
  req.send('<h1> Home</h1> <a href="/api/products"> API </a>');
});

app.get("/api/products", (res, req) => {
  req.json(products);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
