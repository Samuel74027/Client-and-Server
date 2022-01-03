const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");
  //   // write response in HTML
  //   res.write("<h1>./testing.html</h1>");
  //   // end response
  //   res.end();
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "homepage.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // redirect about-me to about
    case "/about-me":
      res.setHeader("Location", "/about");
      res.statusCode = 301;
      res.end();
      break;
    case "/info":
      path += "info.html";
      res.statusCode = 200;
      break;
    default:
      path += "unknown.html";
      res.statusCode = 404;
      break;
  }
  // send HTML page
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
