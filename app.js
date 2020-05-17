const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const notifyUsers = require('./src/scripts/notify.js');
const path = require('path');
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
// notifyUsers();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server up and running on port ${port}.`));
