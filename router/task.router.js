const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controller/task.controller");
const { checkAuthentication } = require("../middleware/auth"); // Middleware to verify JWT

const router = express.Router();

// CRUD routes for tasks
router.post("/tasks", checkAuthentication, createTask);
router.get("/tasks", checkAuthentication, getTasks);
router.put("/tasks/:tid", checkAuthentication, updateTask);
router.delete("/tasks/:tid", checkAuthentication, deleteTask);

module.exports = router;
