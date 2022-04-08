const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "pages")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "404.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
