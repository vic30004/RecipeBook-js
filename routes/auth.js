const express = require('express');
const { register,getUsers,getSingleUser,getUser } = require('../controller/auth');
const router = express.Router();
const {protect} = require('../middleware/auth')


router.post('/', register);
router.get('/',getUsers)
router.post('/user',getSingleUser)
router.get('/auth',protect,getUser)
module.exports = router;
