const express = require("express");
const mongoose = require("mongoose");
const pageRoute = "./routes/pageRoute.js";
const courseRoute = require("./routes/courseRoute");
const app = express();

//Connect DB
mongoose
  .connect("mongodb://localhost/smartedu-db", {
    eseNewUrlParser: true,
    useUnifiedTopology: true,
    useFındAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to db succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));

//Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

const port = 4200;
app.listen(port, () => {
  console.log("App is live");
});
