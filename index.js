const express = require("express");
const db = require("./config/database");
const bodyParser = require("body-parser");
const app = express();
const topRouter = require("./routes/topRouter");
const userRouter = require("./routes/userRouter");

app.use(bodyParser.json());
app.use("/api", [topRouter, userRouter]);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(3000, () => {
  console.log("正在监听3000端口");
});
