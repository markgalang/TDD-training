const TASK = require("../models/task");
const { trimInputField, validateTaskData } = require("../validators");

const addTask = async (req, res) => {
  try {
    const newTask = trimInputField(req.body);
    const { errors, isValid } = validateTaskData(newTask);

    if (!isValid) {
      throw errors;
    }

    const TaskData = await TASK.create(newTask);

    return res.status(201).json(TaskData);
  } catch (err) {
    if (err.name) {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await TASK.find();
    return res.status(200).json(allTasks);
  } catch (err) {
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const TaskFound = await TASK.findById(taskId);

    if (!taskId || !TaskFound) {
      throw { error: "Task not found." };
    }

    return res.status(200).json(TaskFound);
  } catch (err) {
    if (err.error) {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const TaskFound = await TASK.findById(taskId);
    const newTaskData = trimInputField(req.body);
    const { errors, isValid } = validateTaskData(newTaskData);

    if (!taskId || !TaskFound) {
      throw { error: "Task not found." };
    }

    if (!isValid) {
      throw errors;
    }

    TaskFound.name = newTaskData.name;
    TaskFound.save();

    return res.status(200).json(TaskFound);
  } catch (err) {
    if (err.error || err.name === "Must not be empty") {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const TaskFound = await TASK.findById(taskId);

    if (!taskId || !TaskFound) {
      throw { error: "Task not found." };
    }

    TaskFound.remove();

    return res.status(204).json(TaskFound);
  } catch (err) {
    if (err.error) {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const toggleCompletion = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const TaskFound = await TASK.findById(taskId);

    if (!taskId || !TaskFound) {
      throw { error: "Task not found." };
    }

    TaskFound.isComplete = !TaskFound.isComplete;
    TaskFound.save();

    return res.status(200).json(TaskFound);
  } catch (err) {
    if (err.error) {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  toggleCompletion,
};
