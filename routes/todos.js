const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define Api routes

// controller mapping with path (post request)
router.post("/createTodo",createTodo);
// controller mapping with path (get request)
router.get("/getTodo",getTodo);

router.get("/getTodo/:id",getTodoById);

router.put("/updateTodo/:id",updateTodo);

router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;