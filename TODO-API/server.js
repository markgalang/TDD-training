const express = require("express");
const server = express();
const mongoose = require("mongoose");
require("dotenv").config();

server.use(express.json());
mongoose.connect(
  "mongodb://localhost/TODO_APP",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Database Connected...");
  }
);

server.get("/hello-world", (req, res) => {
  res.send("HELLO WORLD!");
});

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server running on ${PORT}...`));
