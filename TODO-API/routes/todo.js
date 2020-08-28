const express = require("express");
const router = express.Router();
const {
  addTodo,
  getAllTodo,
  getTodoById,
  updateTodoById,
  deleteTodoById,
  toggleCompletion,
} = require("../handlers/todo");

router.post("/", addTodo);
router.get("/", getAllTodo);
router.get("/:todoId", getTodoById);
router.put("/:todoId", updateTodoById);
router.put("/:todoId/complete", toggleCompletion);
router.delete("/:todoId", deleteTodoById);

module.exports = router;
