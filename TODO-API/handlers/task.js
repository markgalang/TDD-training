const TASK = require("../models/task");

const addTask = (req, res) => {
  res.send("NEW TASK");
};

const getTask = (req, res) => {
  res.send("GET TASK");
};

const getTaskById = (req, res) => {
  res.send("GET TASK BY ID");
};

const updateTaskById = (req, res) => {
  res.send("UPDATE TASK BY ID");
};
const deleteTaskById = (req, res) => {
  res.send("DELETE TASK BY ID");
};

module.exports = {
  addTask,
  getTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
