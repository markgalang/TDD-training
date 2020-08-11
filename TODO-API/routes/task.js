const express = require("express");
const router = express.Router();
const {
  addTask,
  getTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../handlers/task");

router.post("/", addTask);
router.get("/", getTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTaskById);
router.delete("/", deleteTaskById);

module.exports = router;
