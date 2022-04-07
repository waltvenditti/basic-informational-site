const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 5000;
const members = require('./Members.js');

const logger = (req, res, next) => {
  console.log("logged successfully");
  next();
};
app.use(logger);

app.get("/api/members", (req, res) => {
  res.json(members);
})

app.use(express.static(path.join(__dirname, "pages")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
