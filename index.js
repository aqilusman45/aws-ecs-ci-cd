const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(`${process.env.DB_URI}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const con = mongoose.connection;

con.once("open", (error) => {
  if (error) {
    console.error(error);
    throw error;
  }
  console.log("We are connected");
});

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is up and running");
});

app.listen(PORT, () => {
  console.log(`app is running on port hahah ${PORT}`);
});
