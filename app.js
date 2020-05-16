const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const notifyUsers = require("./src/scripts/notify.js");

const postsRoute = require("./src/routes/posts");

require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

// Import routes
app.use("/", postsRoute);

// Connect to DB, created .env to hide user and password to the DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Script testing
notifyUsers();
cron.schedule("* * * * *", () => {
  console.log("running every minute");
  notifyUsers();
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
