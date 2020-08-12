const TASK = require("../models/task");

const addTask = async (req, res) => {
  try {
    const TaskData = await TASK.create(req.body);
    return res.status(201).json(TaskData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TASK.find();
    return res.status(201).json(allTasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const TaskFound = await TASK.findById(taskId);

    return res.status(200).json(TaskFound);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const updateTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const { name } = req.body;
    const TaskFound = await TASK.findById(taskId);

    TaskFound.name = name;
    TaskFound.save();

    return res.status(200).json(TaskFound);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
const deleteTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const TaskFound = await TASK.findById(taskId);

    TaskFound.remove();

    return res.status(204).json(TaskFound);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
