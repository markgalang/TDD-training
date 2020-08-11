const TASK = require("../models/task");
const Task = require("../models/task");

const addTask = async (req, res) => {
  try {
    const TaskData = await Task.create(req.body);
    return res.status(201).json(TaskData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    return res.status(201).json(allTasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
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
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
