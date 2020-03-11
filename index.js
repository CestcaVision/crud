const express = require("express");
const db = require("./config/database");
const bodyParser = require("body-parser");
const app = express();
const topRouter = require("./routes/topRouter");

app.use(bodyParser.json());
app.use("/api", topRouter);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(3000, () => {
  console.log("正在监听3000端口");
});
