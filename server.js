const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;
const firstName = 'Za Nya';
const lastName = 'Hmue';
const birthYear = 1998;
let age = 2022 - birthYear;
console.log(`My year old is ${age}`);
console.log(`I'm ${firstName} ${lastName}.`);


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end (`I am ${firstName} ${lastName}.`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});