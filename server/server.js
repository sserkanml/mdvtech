const express = require("express");

const app = express();

app.use(express.json());

app.use("/static", express.static("../public"));
app.use("/img", express.static(".." + "/public/img"));
app.use("/css", express.static(".." + "/public/css"));
app.use("/js", express.static(".." + "/public/js"));
app.use("/fonts", express.static(".." + "/public/fonts"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile("index-6.html", { root: "../public" });
});

app.get("/about", (req, res) => {
  res.statusCode = 200;
  res.sendFile("about.html", { root: "../public" });
});
app.get("/contact", (req, res) => {
  res.statusCode = 200;
  res.sendFile("contact.html", { root: "../public" });
});

app.get("/service", (req, res) => {
  res.statusCode = 200;
  res.sendFile("services.html", { root: "../public" });
});

app.listen(5000, () => {
  console.log("server is created");
});
