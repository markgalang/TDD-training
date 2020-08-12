const express = require("express");
const router = express.Router();
const {
  addTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  toggleCompletion,
} = require("../handlers/task");

router.post("/", addTask);
router.get("/", getAllTasks);
router.get("/:taskId", getTaskById);
router.put("/:taskId", updateTaskById);
router.put("/:taskId/complete", toggleCompletion);
router.delete("/:taskId", deleteTaskById);

module.exports = router;
