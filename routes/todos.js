const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo");

//define Api address

// controller mapping with path (post request)
router.post("/createTodo",createTodo);

module.exports = router;