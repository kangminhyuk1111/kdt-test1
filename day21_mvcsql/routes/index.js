const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitor', controller.getVisitors);
router.post('/visitor/write', controller.postVisitor);
router.get('/visitor/get', controller.getVisitor);
router.delete('/visitor/delete', controller.deleteVisitor);
router.patch('/visitor/edit', controller.patchVisitor);
// router.patch('/visitor/edit', controller.patchVisitor);

module.exports = router;