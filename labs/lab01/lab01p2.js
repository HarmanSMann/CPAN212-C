/*
        REST/RESTful APIs
C -     POST
R -     GET
U -     PUT/PATCH
D -     DELETE

bookstore:
    homepage -> /
    contact ->  /contact
*/

import http from "http";
import fs from "fs"; // this file system

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // do something
    return res.end("Hello World from Harman");
  } else if (req.url === "/contact") {
    // do something
    const data = fs.readFileSync("./html/contact.html");
    return res.end(data);
  } else if (req.url === "/methods") {
    if (req.method === "GET") {
      // read information
      return res.end("Hello to the GET method");
    }
    if (req.method === "POST") {
      // create information/store information
      return res.end("Hello to the POST method");
    }
    if (req.method === "PUT") {
      // update information
      return res.end("Hello to the PUT method");
    } else {
      res.writeHead(404, "ERROR");
      return res.end(`404 page not found`);
    }
  } else {
    res.writeHead(404, "ERROR");
    return res.end(`404 page not found`);
  }
});

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
