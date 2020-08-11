const express = require("express");
const router = express.Router();
const {
  addTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../handlers/task");

router.post("/", addTask);
router.get("/", getAllTasks);
router.get("/:taskId", getTaskById);
router.put("/:taskId", updateTaskById);
router.delete("/:taskId", deleteTaskById);

module.exports = router;
