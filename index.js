const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let URL = req.url;
  if (URL === '/') {
    fs.readFile(path.join(__dirname, "pages", "index.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (URL === '/about') {
    fs.readFile(path.join(__dirname, "pages", "about.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else if (URL === '/contact-me') {
    fs.readFile(path.join(__dirname, "pages", "contact-me.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  } else {
    fs.readFile(path.join(__dirname, "pages", "404.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  }
}).listen(8080, () => {
  console.log("server is running on port 5000...")
});

