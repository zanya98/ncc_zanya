const express = require('express');
const app= express();
const port = 8080;

const server = express.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello NCC');
});

server.listen(port, app, () => {
  console.log(`Server running at ${app} ${port}/`);
});