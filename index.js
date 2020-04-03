const express = require("express");
const app = express();
const http = require("http");
app.get("/", (req, res) => {
  res.send("server is up and running");
});

app.listen(8000, () => {
  console.log(`app is running on port ${8000}`);
});
