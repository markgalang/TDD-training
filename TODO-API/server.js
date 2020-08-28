const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

server.use(express.json());
server.use(cors());

mongoose.connect(
  process.env.DATABASE_URL,
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

server.use("/api/todo", taskRoutes);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server running on ${PORT}...`));
