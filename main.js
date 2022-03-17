var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      fs.readFile("./home.html", "utf-8", function (err, data) {
        if (err) {
          response.end("err occured");
        } else {
          response.end(data);
        }
      });
    } else if (request.url === "/about") {
      response.end("its about");
    } else if (request.url === "/contact") {
      response.end("contact us");
    } else {
      response.end("invalid path");
    }
  } else {
    response.end("invalid request");
  }
});

server.listen(3000, function () {
  console.log("server is live at 3000");
});
