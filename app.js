const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Index");
});

const port = 4200;
app.listen(port, () => {
  console.log("App is live");
});
