const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://User:123321@node-queue-gtbnz.mongodb.net/test?retryWrites=true&w=majority",
  {
    useMongoClient: true,
  }
);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
