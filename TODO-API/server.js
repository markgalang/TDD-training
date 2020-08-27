const express = require("express");
const server = express();
const mongoose = require("mongoose");
require("dotenv").config();

server.use(express.json());

mongoose.connect(
  process.env.LOCALHOST_URL,
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

const taskRoutes = require("./routes/task");

server.use("/", taskRoutes);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server running on ${PORT}...`));
