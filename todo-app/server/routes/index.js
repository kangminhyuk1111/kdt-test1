const express = require('express');
const controller = require('../controller/CTodo');
const router = express.Router();

router.get('/todos', controller.getTodos);
router.post('/todo', controller.createTodo);
router.patch('/todo/:todoId', controller.patchTodo);
router.delete('/todo/:todoId', controller.deleteTodo);

module.exports = router;