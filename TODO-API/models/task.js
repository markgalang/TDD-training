const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String },
  isComplete: { type: Boolean },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
