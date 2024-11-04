console.log("hello world");

const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//var fs = require("fs");

//fs.appendFile("welcome.txt", "Hello Node!", function (err) {
//if (err) throw err;
//console.log("Saved!");
//});

const fs = require("node:fs");

fs.readFile("./welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
