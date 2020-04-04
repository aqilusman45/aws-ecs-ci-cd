const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(`${process.env.DB_URI}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const con = mongoose.connection;
let runing = false;
con.once("open", (error) => {
  if (error) {
    console.error(error);
    throw error;
  }
  runing = true;
  console.log("We are connected");
});

const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send(`server is up and running ${runing}`);
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
