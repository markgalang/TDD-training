const Todo = require("../models/todo");
const { trimInputField, validateTodoData } = require("../validators");

const addTodo = async (req, res) => {
  try {
    const newTodo = trimInputField(req.body);
    const { errors, isValid } = validateTodoData(newTodo);

    if (!isValid) {
      throw errors;
    }

    const TodoData = await Todo.create(newTodo);

    return res.status(201).json(TodoData);
  } catch (err) {
    if (err.title) {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const getAllTodo = async (req, res) => {
  try {
    const allTodos = await Todo.find().sort({ createdAt: "descending" });
    return res.status(200).json(allTodos);
  } catch (err) {
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const TodoFound = await Todo.findById(todoId);

    if (!todoId || !TodoFound) {
      throw { error: "Todo not found." };
    }

    return res.status(200).json(TodoFound);
  } catch (err) {
    if (err.error) {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const updateTodoById = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const TodoFound = await Todo.findById(todoId);
    const newTodoData = trimInputField(req.body);
    const { errors, isValid } = validateTodoData(newTodoData);

    if (!todoId || !TodoFound) {
      throw { error: "Todo not found." };
    }

    if (!isValid) {
      throw errors;
    }

    TodoFound.title = newTodoData.title;
    TodoFound.save();

    return res.status(200).json(TodoFound);
  } catch (err) {
    if (err.error || err.title === "Must not be empty") {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const deleteTodoById = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const TodoFound = await Todo.findById(todoId);

    if (!todoId || !TodoFound) {
      throw { error: "Todo not found." };
    }

    TodoFound.remove();

    return res.status(204).json(TodoFound);
  } catch (err) {
    if (err.error) {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

const toggleCompletion = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const TodoFound = await Todo.findById(todoId);

    if (!todoId || !TodoFound) {
      throw { error: "Todo not found." };
    }

    TodoFound.isComplete = !TodoFound.isComplete;
    TodoFound.save();

    return res.status(200).json(TodoFound);
  } catch (err) {
    if (err.error) {
      return res.status(400).json(err);
    }
    return res.status(500).json({ error: err.name, message: err.message });
  }
};

module.exports = {
  addTodo,
  getAllTodo,
  getTodoById,
  updateTodoById,
  deleteTodoById,
  toggleCompletion,
};
