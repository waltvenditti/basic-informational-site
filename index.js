const express = require('express');
const app = express();


const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 5000;

app.get('/', (req, res) => {
  res.render("/index.html");
});
app.get('/about', (req, res) => {
  res.send('test about');
});
app.get('/contact-me', (req, res) => {
  res.send('test contact-me');
});



app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

// const server = http.createServer((req, res) => {
//   let URL = req.url;
//   if (URL === '/') {
//     fs.readFile(path.join(__dirname, "pages", "index.html"), (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(content);
//     });
//   } else if (URL === '/about') {
//     fs.readFile(path.join(__dirname, "pages", "about.html"), (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(content);
//     });
//   } else if (URL === '/contact-me') {
//     fs.readFile(path.join(__dirname, "pages", "contact-me.html"), (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(content);
//     });
//   } else {
//     fs.readFile(path.join(__dirname, "pages", "404.html"), (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(content);
//     });
//   }
// }).listen(port, () => {
//   console.log(`server is running on port ${port}...`)
// });

