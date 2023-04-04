const express = require('express');
const controller = require('../controller/Cmain');
/* controller 구조 
    controller = {
        main : ()=>{},
        comments : ()=>{},
    }
*/
const router = express.Router();

// const app = exrpess();
// app.get

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.commentId);
router.post('/signIn', controller.signIn);
router.post('/users', controller.users);

module.exports = router;