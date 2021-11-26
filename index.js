const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const blogRouter = require("./routers/blogRouter");
const bodyParser = require("body-parser");
//app config
const app = express();

const port = process.env.PORT || 9000;

//middleware
app.use(express.json({ limit: "50mb" }));
// app.use(express.limit(100000000));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/blog", blogRouter);
//mongo db config
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello server");
});

app.listen(port, () => {
  console.log(`Server is listenting on http://localhost:${port}`);
});
