const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("server is up and running");
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
