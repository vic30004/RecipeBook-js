const express = require('express');
const { register,getUsers,getSingleUser } = require('../controller/auth');
const router = express.Router();

router.post('/', register);
router.get('/',getUsers)
router.get('/user',getSingleUser)
module.exports = router;
