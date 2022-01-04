const express = require("express");
const app = express();

// routing using express
app.listen(3000);
app.get("/", (req, res) => {
  //   res.send("<h1>Home page</h1>");
  res.sendFile("./views/homepage.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.send("<h1>About Page</h1>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// error pages
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
