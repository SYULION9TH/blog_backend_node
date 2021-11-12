const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const blogRouter = require("./routers/blogRouter");
//app config
const app = express();

const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
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
